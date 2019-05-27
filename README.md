# swagger2js
根据swagger的json数据生成js可直接使用的API文件

## Installation

- Using [npm](https://www.npmjs.com/#getting-started): `npm install swagger2js --save`
- Using [Yarn](https://yarnpkg.com/): `yarn add swagger2js`

## Example
```javascript
const {swagger2js} = require('../index');

swagger2js({
  swaggerUrl: 'http://192.168.1.51:10101/doctor/v2/api-docs',
  pathName: __dirname + '/API'
});
```
**生成的代码**
```typescript
interface Result {
  url: string;
  method: string;
  body: any;
}

/**
 * 云医生服务
 * 云患者服务接口文档
 * 接口数量:69
 */
export default {
  /**
   * 域名
   */
  domain: 'http://192.168.1.16:8080/manage',

  /**
   * 初始化权限
   * @method
   */
  post_other_init_by_hosId(
    path: {
      hosId: string;
    },
    query ? : {
      // deptCodes
      deptCodes ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.deptCodes !== undefined) {
      queryParams += `deptCodes=${ query.deptCodes }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `other/init/${path.hosId}` + queryParams,
      method: 'post',
      body
    }
  },
}
```
 ## Reference

 - [swagger-js-codegen](https://github.com/wcandillon/swagger-js-codegen)
