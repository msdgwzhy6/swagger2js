"use strict";
exports.__esModule = true;
/**
 * 云医生服务
 * 云患者服务接口文档
 * 接口数量:69
 */
exports["default"] = {
    /**
     * 域名
     */
    domain: 'http://192.168.1.51:10101/doctor',
    /**
     * 初始化权限
     * @method
     */
    post_other_init_by_hosId: function (path, query, body) {
        var queryParams = '';
        if (query.deptCodes !== undefined) {
            queryParams += "deptCodes=" + query.deptCodes;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "other/init/" + path.hosId + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * 初始化医生账户信息
     * @method
     */
    post_other_initdocinfo_by_hosId: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "other/initdocinfo/" + path.hosId + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * 保存信息
     * @method
     */
    post_printer: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "printer" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * 查询指定时间，指定科室,指定医生是否有排班
     * @method
     */
    get_test_dutyday_by_deptCode_startDate_endDate: function (path, query, body) {
        var queryParams = '';
        if (query.docCode !== undefined) {
            queryParams += "docCode=" + query.docCode;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "test/dutyday/" + path.deptCode + "/" + path.startDate + "/" + path.endDate + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * getPatDept
     * @method
     */
    get_test_feign_pat_dept: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "test/feign/pat/dept" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * getDocInfo
     * @method
     */
    get_test_feign_pat_doc_by_deptCode: function (path, query, body) {
        var queryParams = '';
        if (query.endDate !== undefined) {
            queryParams += "endDate=" + query.endDate;
        }
        if (query.startDate !== undefined) {
            queryParams += "startDate=" + query.startDate;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "test/feign/pat/doc/" + path.deptCode + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 根据医院id查询所有系统参数
     * @method
     */
    get_v1_common_allparams_by_hosId: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/common/allparams/" + path.hosId + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * getAvatar
     * @method
     */
    get_v1_common_avatar_by_userId_accountType: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/common/avatar/" + path.userId + "/" + path.accountType + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * getHospitalByBussType
     * @method
     */
    get_v1_common_busstype_hos: function (path, query, body) {
        var queryParams = '';
        if (query.bussTypes !== undefined) {
            queryParams += "bussTypes=" + query.bussTypes;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/common/busstype/hos" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * getDeptsByTypes
     * @method
     */
    get_v1_common_depts_types_by_hosId: function (path, query, body) {
        var queryParams = '';
        if (query.types !== undefined) {
            queryParams += "types=" + query.types;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/common/depts/types/" + path.hosId + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 获取指定医院科室列表（用于下来框展示）,科室过滤条件：科室类型等，根据实际需求添加
     * @method
     */
    get_v1_common_depts_by_hosId: function (path, query, body) {
        var queryParams = '';
        if (query.filter !== undefined) {
            queryParams += "filter=" + query.filter;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/common/depts/" + path.hosId + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 获取指定医院的科室信息
     * @method
     */
    get_v1_common_depts_by_hosId_deptCode: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/common/depts/" + path.hosId + "/" + path.deptCode + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 查询指定医院和指定字典项下的字典值（用于下来框展示）,支持一次获取多个字典项，字典项之间用,隔开，比如：stan_profession,auth_state
     * @method
     */
    get_v1_common_dic_by_hosId: function (path, query, body) {
        var queryParams = '';
        if (query.dicCodes !== undefined) {
            queryParams += "dicCodes=" + query.dicCodes;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/common/dic/" + path.hosId + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 获取医院列表
     * @method
     */
    get_v1_common_hos: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/common/hos" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 获取指定医院信息
     * @method
     */
    get_v1_common_hos_by_hosId: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/common/hos/" + path.hosId + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 获取指定医院指定参数的值
     * @method
     */
    get_v1_common_params_by_hosId_paramCode: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/common/params/" + path.hosId + "/" + path.paramCode + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 获取医院医生
     * @method
     */
    get_v1_dochosinfo: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/dochosinfo" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * getAvatar
     * @method
     */
    get_v1_docinfo_avatar_by_userId: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/avatar/" + path.userId + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * bindPhoneVerificationcode
     * @method
     */
    get_v1_docinfo_bind_phone_verifcationcode: function (path, query, body) {
        var queryParams = '';
        if (query.phone !== undefined) {
            queryParams += "phone=" + query.phone;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/bind-phone-verifcationcode" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * bindWechatId
     * @method
     */
    post_v1_docinfo_bind_wechat: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/bind-wechat" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * bindleVerificationcode
     * @method
     */
    get_v1_docinfo_bindle_verificationcode: function (path, query, body) {
        var queryParams = '';
        if (query.phone !== undefined) {
            queryParams += "phone=" + query.phone;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/bindle-verificationcode" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * bindphone
     * @method
     */
    put_v1_docinfo_bindphone: function (path, query, body) {
        var queryParams = '';
        if (query.code !== undefined) {
            queryParams += "code=" + query.code;
        }
        if (query.phone !== undefined) {
            queryParams += "phone=" + query.phone;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/bindphone" + queryParams,
            method: 'put',
            body: body
        };
    },
    /**
     * 绑定微信
     * @method
     */
    post_v1_docinfo_bindwechat: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/bindwechat" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * changeUsername
     * @method
     */
    put_v1_docinfo_changename: function (path, query, body) {
        var queryParams = '';
        if (query.username !== undefined) {
            queryParams += "username=" + query.username;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/changename" + queryParams,
            method: 'put',
            body: body
        };
    },
    /**
     * 通过医院id和医生code 创建医生
     * @method
     */
    post_v1_docinfo_createAccount_by_hosId_docCode: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/createAccount/" + path.hosId + "/" + path.docCode + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * checkUserExistByEmail
     * @method
     */
    get_v1_docinfo_exist_by_email: function (path, query, body) {
        var queryParams = '';
        if (query.email !== undefined) {
            queryParams += "email=" + query.email;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/exist-by-email" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 校验手机是否被绑定
     * @method
     */
    get_v1_docinfo_exist_by_phone: function (path, query, body) {
        var queryParams = '';
        if (query.phone !== undefined) {
            queryParams += "phone=" + query.phone;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/exist-by-phone" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * checkUserExistByUsername
     * @method
     */
    get_v1_docinfo_exist_by_username: function (path, query, body) {
        var queryParams = '';
        if (query.username !== undefined) {
            queryParams += "username=" + query.username;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/exist-by-username" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 忘记密码修改密码
     * @method
     */
    put_v1_docinfo_forget_password_modify_password: function (path, query, body) {
        var queryParams = '';
        if (query.code !== undefined) {
            queryParams += "code=" + query.code;
        }
        if (query.newpassword !== undefined) {
            queryParams += "newpassword=" + query.newpassword;
        }
        if (query.phone !== undefined) {
            queryParams += "phone=" + query.phone;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/forget-password-modify-password" + queryParams,
            method: 'put',
            body: body
        };
    },
    /**
     * forgetPasswordVerificationcode
     * @method
     */
    get_v1_docinfo_forget_password_verificationcode: function (path, query, body) {
        var queryParams = '';
        if (query.phone !== undefined) {
            queryParams += "phone=" + query.phone;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/forget-password-verificationcode" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 获取用户基本信息
     * @method
     */
    get_v1_docinfo_info: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/info" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 通过医院id和医生code 登录
     * @method
     */
    post_v1_docinfo_login_by_doccode: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/login-by-doccode" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * 通过密码登录
     * @method
     */
    post_v1_docinfo_login_by_password: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/login-by-password" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * loginByVerificationcode
     * @method
     */
    post_v1_docinfo_login_by_verificationcode: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/login-by-verificationcode" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * 通过微信登录
     * @method
     */
    post_v1_docinfo_login_by_wechat: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/login-by-wechat" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * loginVerificationcode
     * @method
     */
    get_v1_docinfo_login_verificationcode: function (path, query, body) {
        var queryParams = '';
        if (query.phone !== undefined) {
            queryParams += "phone=" + query.phone;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/login-verificationcode" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * logout
     * @method
     */
    get_v1_docinfo_logout: function (path, query, body) {
        var queryParams = '';
        if (query.token !== undefined) {
            queryParams += "token=" + query.token;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/logout" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 登出
     * @method
     */
    post_v1_docinfo_logout: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/logout" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * 修改密码
     * @method
     */
    put_v1_docinfo_modify_password: function (path, query, body) {
        var queryParams = '';
        if (query.oldpassword !== undefined) {
            queryParams += "oldpassword=" + query.oldpassword;
        }
        if (query.password !== undefined) {
            queryParams += "password=" + query.password;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/modify-password" + queryParams,
            method: 'put',
            body: body
        };
    },
    /**
     * refreshToken
     * @method
     */
    post_v1_docinfo_refresh: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/refresh" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * registerVerificationcode
     * @method
     */
    get_v1_docinfo_register_verificationcode: function (path, query, body) {
        var queryParams = '';
        if (query.phone !== undefined) {
            queryParams += "phone=" + query.phone;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/register-verificationcode" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * resetPassword
     * @method
     */
    put_v1_docinfo_reset_password_by_userId: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/reset-password/" + path.userId + queryParams,
            method: 'put',
            body: body
        };
    },
    /**
     * resetWechat
     * @method
     */
    put_v1_docinfo_resetwechat: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/resetwechat" + queryParams,
            method: 'put',
            body: body
        };
    },
    /**
     * superClientLogin
     * @method
     */
    post_v1_docinfo_superclient_login_by_userId_verCode: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/superclient/login/" + path.userId + "/" + path.verCode + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * superLogout
     * @method
     */
    get_v1_docinfo_superclient_logout: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/superclient/logout" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * getSuperClientVerCode
     * @method
     */
    get_v1_docinfo_superclient_vercode: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/superclient/vercode" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * unbindphone
     * @method
     */
    put_v1_docinfo_unbindphone: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/unbindphone" + queryParams,
            method: 'put',
            body: body
        };
    },
    /**
     * validateToken
     * @method
     */
    get_v1_docinfo_validate: function (path, query, body) {
        var queryParams = '';
        if (query.token !== undefined) {
            queryParams += "token=" + query.token;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/validate" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * getBindVerPhone
     * @method
     */
    get_v1_docinfo_vercode_bindphone: function (path, query, body) {
        var queryParams = '';
        if (query.phone !== undefined) {
            queryParams += "phone=" + query.phone;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/docinfo/vercode/bindphone" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 自主排班 type为2
     * @method
     */
    post_v1_dutyonline: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/dutyonline" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * flipDetails
     * @method
     */
    put_v1_dutyonline_details_flip: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/dutyonline/details/flip" + queryParams,
            method: 'put',
            body: body
        };
    },
    /**
     * getDetails
     * @method
     */
    get_v1_dutyonline_dutywithdetails_by_deptCode_date: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/dutyonline/dutywithdetails/" + path.deptCode + "/" + path.date + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * getDateByDateRange
     * @method
     */
    get_v1_dutyonline_by_deptCode_startDate_endDate: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/dutyonline/" + path.deptCode + "/" + path.startDate + "/" + path.endDate + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * downLoad
     * @method
     */
    get_v1_oss_file: function (path, query, body) {
        var queryParams = '';
        if (query.fileName !== undefined) {
            queryParams += "fileName=" + query.fileName;
        }
        if (query.name !== undefined) {
            queryParams += "name=" + query.name;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/oss/file" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 往OSS中上传文件, 返回格式: 原图_缩略图
     * @method
     */
    post_v1_oss_file: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/oss/file" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * 根据文件名删除OSS中文件
     * @method
     */
    delete_v1_oss_file: function (path, query, body) {
        var queryParams = '';
        if (query.fileName !== undefined) {
            queryParams += "fileName=" + query.fileName;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/oss/file" + queryParams,
            method: 'delete',
            body: body
        };
    },
    /**
     * 小程序上传图片
     * @method
     */
    post_v1_oss_file_mini_upload: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/oss/file/mini-upload" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * 查询oss前半段地址
     * @method
     */
    get_v1_oss_file_query: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/oss/file/query" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 手动认证接口
     * @method
     */
    post_v1_realname: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/realname" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * 获取权限信息
     * @method
     */
    get_v1_realname_authinfo: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/realname/authinfo" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * checkAndSaveRealName
     * @method
     */
    post_v1_realname_checkandsave: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/realname/checkandsave" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * 获取认证科室信息 医生端授权(authTypes)类型包括 func_net_clinic(视频问诊)func_consult( 在线咨询) func_hos_clinic(医院门诊) func_inpat_query( 住院查询),多个用都好隔开
     * @method
     */
    get_v1_realname_dept: function (path, query, body) {
        var queryParams = '';
        if (query.authTypes !== undefined) {
            queryParams += "authTypes=" + query.authTypes;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/realname/dept" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * realName
     * @method
     */
    post_v1_realname_realname: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/realname/realname" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * 获取医生在当前医院的实名认证状态，返回值为:1未认证2认证中3已认证,4认证失败
     * @method
     */
    get_v1_realname_status: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v1/realname/status" + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * sendMsg
     * @method
     */
    post_v2_msg_send: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v2/msg/send" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * 测试创建用户
     * @method
     */
    post_v2_usermanage: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v2/usermanage" + queryParams,
            method: 'post',
            body: body
        };
    },
    /**
     * 测试更新用户信息
     * @method
     */
    put_v2_usermanage: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v2/usermanage" + queryParams,
            method: 'put',
            body: body
        };
    },
    /**
     * 获取用户token
     * @method
     */
    get_v2_usermanage_token_by_accid: function (path, query, body) {
        var queryParams = '';
        if (query.appKey !== undefined) {
            queryParams += "appKey=" + query.appKey;
        }
        if (query.appSecret !== undefined) {
            queryParams += "appSecret=" + query.appSecret;
        }
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v2/usermanage/token/" + path.accid + queryParams,
            method: 'get',
            body: body
        };
    },
    /**
     * 测试更新用户信息,多个用逗号隔开
     * @method
     */
    get_v2_usermanage_by_accids: function (path, query, body) {
        var queryParams = '';
        if (queryParams) {
            queryParams = '?' + queryParams;
        }
        return {
            url: "v2/usermanage/" + path.accids + queryParams,
            method: 'get',
            body: body
        };
    }
};
