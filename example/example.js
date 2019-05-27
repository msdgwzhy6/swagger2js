/**
 * Created by JetBrains WebStorm.
 * Author: yoon
 * Date: 19-5-24
 * Time: 下午6:05
 * Desc:
 */
const {swagger2js} = require('../index');

swagger2js({
  swaggerUrl: 'http://192.168.1.16:8080/manage/v1/api-docs',
  pathName: __dirname + '/API'
});
