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
  domain: 'http://192.168.1.51:10101/doctor',

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

  /**
   * 初始化医生账户信息
   * @method
   */
  post_other_initdocinfo_by_hosId(
    path: {
      hosId: string;
    },
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `other/initdocinfo/${path.hosId}` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * 保存信息
   * @method
   */
  post_printer(
    path ? : {},
    query ? : {},
    body ? : {
      comments ? : string;
      createTime ? : string;
      createUser ? : number;
      docCode ? : string;
      docName ? : string;
      hosId ? : number;
      id ? : number;
      presPrinter ? : string;
      producer ? : string;
      receiptPrinter ? : string;
      showFlag ? : string;
      updateTime ? : string;
      updateUser ? : number;
      version ? : number;
    }
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `printer` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * 查询指定时间，指定科室,指定医生是否有排班
   * @method
   */
  get_test_dutyday_by_deptCode_startDate_endDate(
    path: {
      deptCode: string;
      startDate: string;
      endDate: string;
    },
    query ? : {
      // 医生code
      docCode ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.docCode !== undefined) {
      queryParams += `docCode=${ query.docCode }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `test/dutyday/${path.deptCode}/${path.startDate}/${path.endDate}` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * getPatDept
   * @method
   */
  get_test_feign_pat_dept(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `test/feign/pat/dept` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * getDocInfo
   * @method
   */
  get_test_feign_pat_doc_by_deptCode(
    path: {
      deptCode: string;
    },
    query ? : {
      // endDate
      endDate ? : string;
      // startDate
      startDate ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.endDate !== undefined) {
      queryParams += `endDate=${ query.endDate }`
    }
    if (query.startDate !== undefined) {
      queryParams += `startDate=${ query.startDate }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `test/feign/pat/doc/${path.deptCode}` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 根据医院id查询所有系统参数
   * @method
   */
  get_v1_common_allparams_by_hosId(
    path: {
      hosId: string;
    },
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/common/allparams/${path.hosId}` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * getAvatar
   * @method
   */
  get_v1_common_avatar_by_userId_accountType(
    path: {
      userId: string;
      accountType: string;
    },
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/common/avatar/${path.userId}/${path.accountType}` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * getHospitalByBussType
   * @method
   */
  get_v1_common_busstype_hos(
    path ? : {},
    query ? : {
      // bussTypes
      bussTypes ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.bussTypes !== undefined) {
      queryParams += `bussTypes=${ query.bussTypes }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/common/busstype/hos` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * getDeptsByTypes
   * @method
   */
  get_v1_common_depts_types_by_hosId(
    path: {
      hosId: string;
    },
    query ? : {
      // types
      types ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.types !== undefined) {
      queryParams += `types=${ query.types }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/common/depts/types/${path.hosId}` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 获取指定医院科室列表（用于下来框展示）,科室过滤条件：科室类型等，根据实际需求添加
   * @method
   */
  get_v1_common_depts_by_hosId(
    path: {
      hosId: string;
    },
    query ? : {
      // filter
      filter ? : object;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.filter !== undefined) {
      queryParams += `filter=${ query.filter }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/common/depts/${path.hosId}` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 获取指定医院的科室信息
   * @method
   */
  get_v1_common_depts_by_hosId_deptCode(
    path: {
      hosId: string;
      deptCode: string;
    },
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/common/depts/${path.hosId}/${path.deptCode}` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 查询指定医院和指定字典项下的字典值（用于下来框展示）,支持一次获取多个字典项，字典项之间用,隔开，比如：stan_profession,auth_state
   * @method
   */
  get_v1_common_dic_by_hosId(
    path: {
      hosId: string;
    },
    query ? : {
      // dicCodes
      dicCodes: string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.dicCodes !== undefined) {
      queryParams += `dicCodes=${ query.dicCodes }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/common/dic/${path.hosId}` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 获取医院列表
   * @method
   */
  get_v1_common_hos(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/common/hos` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 获取指定医院信息
   * @method
   */
  get_v1_common_hos_by_hosId(
    path: {
      hosId: string;
    },
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/common/hos/${path.hosId}` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 获取指定医院指定参数的值
   * @method
   */
  get_v1_common_params_by_hosId_paramCode(
    path: {
      hosId: string;
      paramCode: string;
    },
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/common/params/${path.hosId}/${path.paramCode}` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 获取医院医生
   * @method
   */
  get_v1_dochosinfo(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/dochosinfo` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * getAvatar
   * @method
   */
  get_v1_docinfo_avatar_by_userId(
    path: {
      userId: string;
    },
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/avatar/${path.userId}` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * bindPhoneVerificationcode
   * @method
   */
  get_v1_docinfo_bind_phone_verifcationcode(
    path ? : {},
    query ? : {
      // phone
      phone ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.phone !== undefined) {
      queryParams += `phone=${ query.phone }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/bind-phone-verifcationcode` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * bindWechatId
   * @method
   */
  post_v1_docinfo_bind_wechat(
    path ? : {},
    query ? : {},
    body ? : {
      // app版本
      appVersion ? : string;
      // 设备信息
      deviceInfo ? : string;
      // 登录医生code
      docCode ? : string;
      hosId ? : number;
      // ip
      ip ? : string;
      password ? : string;
      // 登录推送id
      pushKey ? : string;
      // 登录终端 1:PC 2:APP 3:SUPER 超级客户端
      terminal ? : number;
      usernameOrPhone ? : string;
      // 微信code
      wechatCode ? : string;
    }
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/bind-wechat` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * bindleVerificationcode
   * @method
   */
  get_v1_docinfo_bindle_verificationcode(
    path ? : {},
    query ? : {
      // phone
      phone ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.phone !== undefined) {
      queryParams += `phone=${ query.phone }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/bindle-verificationcode` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * bindphone
   * @method
   */
  put_v1_docinfo_bindphone(
    path ? : {},
    query ? : {
      // code
      code ? : string;
      // phone
      phone ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.code !== undefined) {
      queryParams += `code=${ query.code }`
    }
    if (query.phone !== undefined) {
      queryParams += `phone=${ query.phone }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/bindphone` + queryParams,
      method: 'put',
      body
    }
  },

  /**
   * 绑定微信
   * @method
   */
  post_v1_docinfo_bindwechat(
    path ? : {},
    query ? : {},
    body ? : {
      // app版本
      appVersion ? : string;
      // 设备信息
      deviceInfo ? : string;
      // 登录医生code
      docCode ? : string;
      hosId ? : number;
      // ip
      ip ? : string;
      password ? : string;
      // 登录推送id
      pushKey ? : string;
      // 登录终端 1:PC 2:APP 3:SUPER 超级客户端
      terminal ? : number;
      usernameOrPhone ? : string;
      // 微信code
      wechatCode ? : string;
    }
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/bindwechat` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * changeUsername
   * @method
   */
  put_v1_docinfo_changename(
    path ? : {},
    query ? : {
      // username
      username: string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.username !== undefined) {
      queryParams += `username=${ query.username }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/changename` + queryParams,
      method: 'put',
      body
    }
  },

  /**
   * 通过医院id和医生code 创建医生
   * @method
   */
  post_v1_docinfo_createAccount_by_hosId_docCode(
    path: {
      hosId: string;
      docCode: string;
    },
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/createAccount/${path.hosId}/${path.docCode}` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * checkUserExistByEmail
   * @method
   */
  get_v1_docinfo_exist_by_email(
    path ? : {},
    query ? : {
      // email
      email: string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.email !== undefined) {
      queryParams += `email=${ query.email }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/exist-by-email` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 校验手机是否被绑定
   * @method
   */
  get_v1_docinfo_exist_by_phone(
    path ? : {},
    query ? : {
      // phone
      phone ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.phone !== undefined) {
      queryParams += `phone=${ query.phone }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/exist-by-phone` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * checkUserExistByUsername
   * @method
   */
  get_v1_docinfo_exist_by_username(
    path ? : {},
    query ? : {
      // username
      username ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.username !== undefined) {
      queryParams += `username=${ query.username }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/exist-by-username` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 忘记密码修改密码
   * @method
   */
  put_v1_docinfo_forget_password_modify_password(
    path ? : {},
    query ? : {
      // code
      code ? : string;
      // newpassword
      newpassword ? : string;
      // phone
      phone ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.code !== undefined) {
      queryParams += `code=${ query.code }`
    }
    if (query.newpassword !== undefined) {
      queryParams += `newpassword=${ query.newpassword }`
    }
    if (query.phone !== undefined) {
      queryParams += `phone=${ query.phone }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/forget-password-modify-password` + queryParams,
      method: 'put',
      body
    }
  },

  /**
   * forgetPasswordVerificationcode
   * @method
   */
  get_v1_docinfo_forget_password_verificationcode(
    path ? : {},
    query ? : {
      // phone
      phone ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.phone !== undefined) {
      queryParams += `phone=${ query.phone }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/forget-password-verificationcode` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 获取用户基本信息
   * @method
   */
  get_v1_docinfo_info(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/info` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 通过医院id和医生code 登录
   * @method
   */
  post_v1_docinfo_login_by_doccode(
    path ? : {},
    query ? : {},
    body ? : {
      // app版本
      appVersion ? : string;
      // 设备信息
      deviceInfo ? : string;
      // 登录医生code
      docCode ? : string;
      hosId ? : number;
      // ip
      ip ? : string;
      password ? : string;
      // 登录推送id
      pushKey ? : string;
      // 登录终端 1:PC 2:APP 3:SUPER 超级客户端
      terminal ? : number;
      usernameOrPhone ? : string;
      // 微信code
      wechatCode ? : string;
    }
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/login-by-doccode` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * 通过密码登录
   * @method
   */
  post_v1_docinfo_login_by_password(
    path ? : {},
    query ? : {},
    body ? : {
      // app版本
      appVersion ? : string;
      // 设备信息
      deviceInfo ? : string;
      // 登录医生code
      docCode ? : string;
      hosId ? : number;
      // ip
      ip ? : string;
      password ? : string;
      // 登录推送id
      pushKey ? : string;
      // 登录终端 1:PC 2:APP 3:SUPER 超级客户端
      terminal ? : number;
      usernameOrPhone ? : string;
      // 微信code
      wechatCode ? : string;
    }
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/login-by-password` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * loginByVerificationcode
   * @method
   */
  post_v1_docinfo_login_by_verificationcode(
    path ? : {},
    query ? : {},
    body ? : {
      // app版本
      appVersion ? : string;
      // 设备信息
      deviceInfo ? : string;
      // 登录医生code
      docCode ? : string;
      hosId ? : number;
      // ip
      ip ? : string;
      password ? : string;
      // 登录推送id
      pushKey ? : string;
      // 登录终端 1:PC 2:APP 3:SUPER 超级客户端
      terminal ? : number;
      usernameOrPhone ? : string;
      // 微信code
      wechatCode ? : string;
    }
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/login-by-verificationcode` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * 通过微信登录
   * @method
   */
  post_v1_docinfo_login_by_wechat(
    path ? : {},
    query ? : {},
    body ? : {
      // app版本
      appVersion ? : string;
      // 设备信息
      deviceInfo ? : string;
      // 登录医生code
      docCode ? : string;
      hosId ? : number;
      // ip
      ip ? : string;
      password ? : string;
      // 登录推送id
      pushKey ? : string;
      // 登录终端 1:PC 2:APP 3:SUPER 超级客户端
      terminal ? : number;
      usernameOrPhone ? : string;
      // 微信code
      wechatCode ? : string;
    }
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/login-by-wechat` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * loginVerificationcode
   * @method
   */
  get_v1_docinfo_login_verificationcode(
    path ? : {},
    query ? : {
      // phone
      phone ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.phone !== undefined) {
      queryParams += `phone=${ query.phone }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/login-verificationcode` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * logout
   * @method
   */
  get_v1_docinfo_logout(
    path ? : {},
    query ? : {
      // token
      token: string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.token !== undefined) {
      queryParams += `token=${ query.token }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/logout` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 登出
   * @method
   */
  post_v1_docinfo_logout(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/logout` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * 修改密码
   * @method
   */
  put_v1_docinfo_modify_password(
    path ? : {},
    query ? : {
      // oldpassword
      oldpassword ? : string;
      // password
      password ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.oldpassword !== undefined) {
      queryParams += `oldpassword=${ query.oldpassword }`
    }
    if (query.password !== undefined) {
      queryParams += `password=${ query.password }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/modify-password` + queryParams,
      method: 'put',
      body
    }
  },

  /**
   * refreshToken
   * @method
   */
  post_v1_docinfo_refresh(
    path ? : {},
    query ? : {},
    body ? : {
      accessToken ? : string;
      imToken ? : string;
      refreshToken ? : string;
    }
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/refresh` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * registerVerificationcode
   * @method
   */
  get_v1_docinfo_register_verificationcode(
    path ? : {},
    query ? : {
      // phone
      phone ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.phone !== undefined) {
      queryParams += `phone=${ query.phone }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/register-verificationcode` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * resetPassword
   * @method
   */
  put_v1_docinfo_reset_password_by_userId(
    path: {
      userId: string;
    },
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/reset-password/${path.userId}` + queryParams,
      method: 'put',
      body
    }
  },

  /**
   * resetWechat
   * @method
   */
  put_v1_docinfo_resetwechat(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/resetwechat` + queryParams,
      method: 'put',
      body
    }
  },

  /**
   * superClientLogin
   * @method
   */
  post_v1_docinfo_superclient_login_by_userId_verCode(
    path: {
      userId: string;
      verCode: string;
    },
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/superclient/login/${path.userId}/${path.verCode}` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * superLogout
   * @method
   */
  get_v1_docinfo_superclient_logout(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/superclient/logout` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * getSuperClientVerCode
   * @method
   */
  get_v1_docinfo_superclient_vercode(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/superclient/vercode` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * unbindphone
   * @method
   */
  put_v1_docinfo_unbindphone(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/unbindphone` + queryParams,
      method: 'put',
      body
    }
  },

  /**
   * validateToken
   * @method
   */
  get_v1_docinfo_validate(
    path ? : {},
    query ? : {
      // token
      token: string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.token !== undefined) {
      queryParams += `token=${ query.token }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/validate` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * getBindVerPhone
   * @method
   */
  get_v1_docinfo_vercode_bindphone(
    path ? : {},
    query ? : {
      // phone
      phone ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.phone !== undefined) {
      queryParams += `phone=${ query.phone }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/docinfo/vercode/bindphone` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 自主排班 type为2
   * @method
   */
  post_v1_dutyonline(
    path ? : {},
    query ? : {},
    body ? : {
      // 平均问诊时间
      avgMin ? : number;
      // 日期，格式为yyyy-MM-dd
      date ? : string;
      // 科室code
      deptCode ? : string;
      // 医生code
      docCode ? : string;
      // 医院id,如果在优先去该值，如果没有，则从header中获取
      hosId ? : number;
      // 排班类型 字典code 1:科室排班,2:医生排班,3:医生端医生自主排班
      typeDc ? : string;
    }
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/dutyonline` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * flipDetails
   * @method
   */
  put_v1_dutyonline_details_flip(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/dutyonline/details/flip` + queryParams,
      method: 'put',
      body
    }
  },

  /**
   * getDetails
   * @method
   */
  get_v1_dutyonline_dutywithdetails_by_deptCode_date(
    path: {
      deptCode: string;
      date: string;
    },
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/dutyonline/dutywithdetails/${path.deptCode}/${path.date}` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * getDateByDateRange
   * @method
   */
  get_v1_dutyonline_by_deptCode_startDate_endDate(
    path: {
      deptCode: string;
      startDate: string;
      endDate: string;
    },
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/dutyonline/${path.deptCode}/${path.startDate}/${path.endDate}` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * downLoad
   * @method
   */
  get_v1_oss_file(
    path ? : {},
    query ? : {
      // fileName
      fileName: string;
      // name
      name: string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.fileName !== undefined) {
      queryParams += `fileName=${ query.fileName }`
    }
    if (query.name !== undefined) {
      queryParams += `name=${ query.name }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/oss/file` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 往OSS中上传文件, 返回格式: 原图_缩略图
   * @method
   */
  post_v1_oss_file(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/oss/file` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * 根据文件名删除OSS中文件
   * @method
   */
  delete_v1_oss_file(
    path ? : {},
    query ? : {
      // fileName
      fileName: string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.fileName !== undefined) {
      queryParams += `fileName=${ query.fileName }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/oss/file` + queryParams,
      method: 'delete',
      body
    }
  },

  /**
   * 小程序上传图片
   * @method
   */
  post_v1_oss_file_mini_upload(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/oss/file/mini-upload` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * 查询oss前半段地址
   * @method
   */
  get_v1_oss_file_query(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/oss/file/query` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 手动认证接口
   * @method
   */
  post_v1_realname(
    path ? : {},
    query ? : {},
    body ? : {
      // 医生code
      docCode ? : string;
      // 工作证
      empCardPath ? : string;
      // 身份证
      idcard ? : string;
      // 医生姓名
      name ? : string;
      // 执业证书
      professionalCertificatePath ? : string;
      // 开始工作时间
      startWorkTime ? : string;
    }
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/realname` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * 获取权限信息
   * @method
   */
  get_v1_realname_authinfo(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/realname/authinfo` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * checkAndSaveRealName
   * @method
   */
  post_v1_realname_checkandsave(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/realname/checkandsave` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * 获取认证科室信息 医生端授权(authTypes)类型包括 func_net_clinic(视频问诊)func_consult( 在线咨询) func_hos_clinic(医院门诊) func_inpat_query( 住院查询),多个用都好隔开
   * @method
   */
  get_v1_realname_dept(
    path ? : {},
    query ? : {
      // authTypes
      authTypes ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.authTypes !== undefined) {
      queryParams += `authTypes=${ query.authTypes }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/realname/dept` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * realName
   * @method
   */
  post_v1_realname_realname(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/realname/realname` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * 获取医生在当前医院的实名认证状态，返回值为:1未认证2认证中3已认证,4认证失败
   * @method
   */
  get_v1_realname_status(
    path ? : {},
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v1/realname/status` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * sendMsg
   * @method
   */
  post_v2_msg_send(
    path ? : {},
    query ? : {},
    body ? : {
      bussInfo ? : object;
      extra ? : object;
      from ? : string;
      fromClient ? : string;
      msg ? : object;
      param ? : object;
      to ? : string;
      toClient ? : string;
    }
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v2/msg/send` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * 测试创建用户
   * @method
   */
  post_v2_usermanage(
    path ? : {},
    query ? : {},
    body ? : {
      accid ? : string;
      birth ? : string;
      email ? : string;
      ex ? : string;
      gender ? : string;
      icon ? : string;
      mobile ? : string;
      name ? : string;
      props ? : string;
      sign ? : string;
      token ? : string;
    }
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v2/usermanage` + queryParams,
      method: 'post',
      body
    }
  },

  /**
   * 测试更新用户信息
   * @method
   */
  put_v2_usermanage(
    path ? : {},
    query ? : {},
    body ? : {
      accid ? : string;
      birth ? : string;
      email ? : string;
      ex ? : string;
      gender ? : string;
      icon ? : string;
      mobile ? : string;
      name ? : string;
      props ? : string;
      sign ? : string;
      token ? : string;
    }
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v2/usermanage` + queryParams,
      method: 'put',
      body
    }
  },

  /**
   * 获取用户token
   * @method
   */
  get_v2_usermanage_token_by_accid(
    path: {
      accid: string;
    },
    query ? : {
      // appKey
      appKey ? : string;
      // appSecret
      appSecret ? : string;
    },
    body ? : {}
  ): Result {
    let queryParams = '';
    if (query.appKey !== undefined) {
      queryParams += `appKey=${ query.appKey }`
    }
    if (query.appSecret !== undefined) {
      queryParams += `appSecret=${ query.appSecret }`
    }
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v2/usermanage/token/${path.accid}` + queryParams,
      method: 'get',
      body
    }
  },

  /**
   * 测试更新用户信息,多个用逗号隔开
   * @method
   */
  get_v2_usermanage_by_accids(
    path: {
      accids: string;
    },
    query ? : {},
    body ? : {}
  ): Result {
    let queryParams = '';
    if (queryParams) {
      queryParams = '?' + queryParams;
    }

    return {
      url: `v2/usermanage/${path.accids}` + queryParams,
      method: 'get',
      body
    }
  },

}