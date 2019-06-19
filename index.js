/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 19-5-24
 * Time: 下午6:04
 * Desc: 根据swagger的json数据生成js可直接使用的API文件
 */
const Mustache = require('mustache');
const fs = require('fs');
const beautify = require('js-beautify').js_beautify;
const axios = require("axios");
const process = require('child_process');
const spawn = require('cross-spawn');

const isPathParam = word => word.includes('{') || word.includes('}');
// 去除括号
const delBrackets = word => word.replace(/{|}/g, '');
// 替换横杠
const replaceHorizontal = word => word.replace(/-/g, '_');
// 类型转换
const transType = (type) => {
  if (type === 'string') {
    return 'string';
  } else if (type === 'number' || type === 'integer') {
    return 'number';
  } else if (type === 'boolean') {
    return 'boolean';
  } else if (type === 'array') {
    return 'any[]';
  }
  return type;
};

function userHasTsc() {
  try {
    const result = spawn.sync('tsc', ['--version'], {stdio: 'ignore'});
    if (result.error || result.status !== 0) {
      return false;
    }
    return true;
  } catch (e) {
    return false;
  }
}

function makeDir(name) {
  try {
    spawn.sync('mkdir', [name], {stdio: 'ignore'});
  } catch (e) {
  }
}

/**
 * 格式化path为方法名
 * @param path
 * @returns {*}
 */
function getMethodName(path) {
  if (!path) {
    return null;
  }
  // url
  const pathStr = path.split('/')
    .filter(word => !!word && !isPathParam(word))
    .map(replaceHorizontal)
    .map(word => word.toLowerCase())
    .join('_');
  // url中的参数
  const pathParamStr = path.split('/')
    .filter(word => !!word && isPathParam(word))
    .map(delBrackets)
    .map(word => word.toLowerCase())
    .join('_');

  if (pathParamStr) {
    return pathStr + '_by_' + pathParamStr;
  }

  return pathStr;
}

/**
 * 带参数的url
 * @param path
 * @returns {*}
 */
function getJsUrl(path) {
  if (!path) {
    return null;
  }
  return path.split('/')
    .filter(word => !!word)
    .map(word => {
      if (isPathParam(word)) {
        return `$${'{path.' + delBrackets(word) + '}'}`;
      }
      return word;
    }).join('/')
}

/**
 * url中的参数
 * @param path
 */
function getPathParams(path) {
  if (!path) {
    return [];
  }
  return path.split('/')
    .filter(word => !!word && isPathParam(word))
    .map(delBrackets)
    .map(key => ({
      key,
      type: 'string'
    }));
}

/**
 * query参数
 * @param parameters
 */
function getQueryParams(parameters) {
  return parameters.filter(par => par.in === 'query')
    .map(par => ({
      key: par.name,
      type: transType(par.type),
      optional: true,
      description: par.description
    }))
}

/**
 * body参数
 * @param parameters
 * @param definitions
 */
function getBodyParams(parameters, definitions) {
  const bodyParRef = parameters.find((par) => (par.in === 'body') && par.schema && par.schema.$ref);
  if (bodyParRef) {
    try {
      const target = bodyParRef.schema.$ref.substring(bodyParRef.schema.$ref.lastIndexOf('/') + 1);
      const properties = definitions[target].properties;

      if (!properties) {
        return null;
      }

      return Object.keys(properties).map(key => ({
        key,
        type: properties[key].$ref ? 'object' : transType(properties[key].type),
        optional: true,
        description: properties[key].description
      }));
    } catch (error) {
      console.error('捕获错误', error, parameters);
      return null;
    }
  }
  return null;
}

/**
 *
 * @param swaggerJson
 * @returns {{title: *, description: *, domain: string}}
 */
function getViewForSwagger(swaggerJson, config) {
  const {
    swagger,
    info: {
      title,
      description
    },
    host,
    basePath,
    paths,
    definitions
  } = swaggerJson;

  const methods = [];

  Object.keys(paths).forEach(path => {
    const requestMethods = paths[path];
    Object.keys(requestMethods).slice(0, 10).forEach(requestMethod => {
      const methodObj = requestMethods[requestMethod];
      methods.push({
        methodName: requestMethod + '_' + getMethodName(path),
        description: methodObj.description || methodObj.summary,
        url: getJsUrl(path),
        requestMethod,
        params: {
          // headers,
          path: getPathParams(path),
          query: getQueryParams(methodObj.parameters),
          body: getBodyParams(methodObj.parameters, definitions)
        },
        responseType: "AxiosPromise<Result>"
      })
    });
  });

  const data = {
    version: swagger,
    title,
    description,
    _baseURL: 'http://' + host + basePath + '/',
    methods,
    methodCount: methods.length,
    useAxios: config.useAxios
  };

  return data;
}

function getCode(swaggerJson, config) {
  const data = getViewForSwagger(swaggerJson, config);
  const classTemplate = fs.readFileSync(__dirname + '/class.mustache', 'utf-8');
  const methodTemplate = fs.readFileSync(__dirname + '/method.mustache', 'utf-8');
  const source = Mustache.render(classTemplate, data, {
    method: methodTemplate
  });
  return beautify(source, {indent_size: 2, max_preserve_newlines: 2});
}

/**
 * 生成请求到的数据
 * @param json
 * @param pathName
 */
function writeSwaggerJson({swaggerJson, pathName}) {
  const json = JSON.stringify(swaggerJson, null, 2);
  fs.writeFile(`${pathName}.json`, json, function (err) {
    if (err) {
      console.error(err);
    }
    console.log(`${pathName}.json 已生成----------------------------------------------`);
  });
}

/**
 * 生成API文件
 * @param code
 * @param pathName
 */
function writeApiFile({code, pathName}) {
  fs.writeFile(`${pathName}.ts`, code, function (err) {
    if (err) {
      console.error(err);
    }
    console.log(`${pathName}.ts 已生成----------------------------------------------`);

    if (!userHasTsc()) {
      console.log(`${pathName}.js 生成失败, 请确认是否全局安装typescript [npm install -g typescript]`);
    } else {
      process.exec(`tsc ${pathName}.ts`, function (error, stdout, stderr) {
        // if (!error) {
        console.log(`${pathName}.js 已生成----------------------------------------------`);
        // } else {
        //   console.log(`${pathName}.js 生成失败`, error);
        // }
      });
    }
  })
}

/**
 * 生成变更日志
 */
function writeLog({swaggerJson, config, pathName}) {
  const {methods} = getViewForSwagger(swaggerJson, config);
  const json = methods.map(({methodName}) => methodName);

  let originList = [];

  try {
    originList = JSON.parse(fs.readFileSync(`${pathName}.list.json`, {encoding: 'utf-8'}));
  } catch (e) {
    console.log(`不存在之前的${pathName}.list.json`);
  }

  fs.writeFile(`${pathName}.list.json`, JSON.stringify(json), function (err) {
    if (err) {
      console.error(err);
    }
    console.log(`${pathName}.list.json 已生成----------------------------------------------`);
  });

  // 变更日志
  const addItems = json.filter(item => !originList.includes(item));
  const removeItem = originList.filter(item => !json.includes(item));

  const logData = {
    addItems, removeItem
  };
  const fileName = pathName.split('\/').slice(-1)[0];
  const pathNames = pathName.split('\/').slice(0, -1);
  makeDir(`${pathNames.join('\/')}/logs`);
  fs.writeFile(`${pathNames.join('\/')}/logs/${fileName}-${new Date().toLocaleString()}.json`, JSON.stringify(logData), function (err) {
    if (err) {
      console.error(err);
    }
    console.log(`变更日志 已生成----------------------------------------------`);
  });
}

const defaultConfig = {
  useAxios: true, // 是否使用请求库
  useLog: true, // 生成变更日志
  saveOriginJson: true, // 保存请求到到数据
};

function swagger2js({swaggerUrl, pathName = 'API'}, config = defaultConfig) {
  console.log('开始请求----------------------------------------------');
  axios({
    method: 'get',
    url: swaggerUrl,
    responseType: 'json'
  }).then(function ({data}) {
    console.log('请求完成----------------------------------------------');
    if (data.swagger !== '2.0') {
      throw '只支持swagger2.0版本';
    }
    if (config.saveOriginJson) {
      writeSwaggerJson({swaggerJson: data, pathName});
    }
    const code = getCode(data, config);
    writeApiFile({code, pathName});
    if (config.useLog) {
      writeLog({swaggerJson: data, config, pathName});
    }
  }).catch(function (err) {
    console.error(new Error(err));
  });
}

exports.swagger2js = swagger2js;
