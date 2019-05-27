interface Result {
  url: string;
  method: string;
  body: any;
}

/**
 * manage服务
 * 接口文档
 * 接口数量:3
 */
export default {
  /**
   * 域名
   */
  domain: 'http://192.168.1.16:8080/manage',

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
      url: `v1/reset-password/${path.userId}` + queryParams,
      method: 'put',
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
      url: `v1/usermanage` + queryParams,
      method: 'put',
      body
    }
  }

}
