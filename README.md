# swagger2js
根据swagger的json数据生成js可直接使用的API文件

- 解决在实际项目中url随处写的问题

## Installation

- Using [npm](https://www.npmjs.com/#getting-started): `npm install swagger2js --save`
- Using [Yarn](https://yarnpkg.com/): `yarn add swagger2js`

## Future

- [X] 增加配置可选择是否使用axios
- [X] 增加变更日志

## Example
```javascript
const {swagger2js} = require('../index');

swagger2js({
  swaggerUrl: 'http://your-hostname/v1/api-docs',
  pathName: __dirname + '/API'
}, {
  useAxios: true,
  useLog: true,
  saveOriginJson: true
});
```
**生成的代码**
```typescript
import Axios, {
  AxiosPromise,
  AxiosRequestConfig
} from "axios";

interface Result {
  success: boolean;
  data: any;
  code: number;
  message: string;
}

/**
 * manage服务
 * 接口文档
 * 接口数量:69
 */
export default {
  _baseURL: 'http://your-hostname/pro-name/',
    _instance: null,
  
    get getInstance() {
      if (!this._instance) {
        this._instance = Axios.create({
          baseURL: this._baseURL
        })
      }
      return this._instance;
    },
  
    set baseURL(url) {
      if (this._instance) {
        throw new Error('Axios已实例化，无效操作');
      }
      this._baseURL = url;
    },
  
    getQueryParams(query) {
      let queryParams = '';
      if (query) {
        queryParams = Object.keys(query).map(key => `${key}=${query[key]}`).join('&')
      }
      return queryParams ? '?' + queryParams : '';
    },

  /**
     * get
     * @method
     */
    get_v1_contact_query({
      path,
      query = {},
      body = {},
      config = {}
    }: {
      path ? : {},
      query ? : {},
      body ? : {},
      config ? : AxiosRequestConfig
    } | any = {}): AxiosPromise < Result > {
  
      const requestParams = {
        url: `v1/contact/query` + this.getQueryParams(query),
        method: 'get',
        data: body,
        ...config
      };
  
      return this.getInstance.request(requestParams);
    },
}

```

 ## Config
 
 参数                 | 默认值
 -|-
 useAxios             | true
 useLog               | true
 saveOriginJson       | true

 ## Reference

 - [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)
