const comUrl = ''; // 请求域名

// 封装请求
const wxRequest = (params, url) => {
  params.data = params.data || {};
  var reqData = params.data;
  wx.request({
    url,
    method: params.method || 'GET',
    data: reqData,
    header: {
      'Content-Type': 'application/json'
    },
    success(res) {
      if (params.success) {
        params.success(res);
      }
    },
    fail(res) {
      if (params.fail) {
        params.fail(res);
      }
    },
    complete(res) {
      if (params.complete) {
        params.complete(res);
      }
    }
  });
};
// 接口列表 
const getOpenid = (params) => {
  wxRequest(params, `${comUrl}/openid`);
};

module.exports = {
    getOpenid
};
