
App({
  onLaunch: function (options) {
    // 判断是否由分享进入小程序
    if (options.scene == 1007 || options.scene == 1008) {
      this.globalData.share = true;
    } else {
      this.globalData.share = false;
    };
    // 获取设备高度
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.height = res.statusBarHeight;
        this.globalData.windowHeight = res.windowHeight;
        this.globalData.iphoneX = res.model.toLowerCase().match(/iPhone X/i);
      }
    });
  },

  onShow: function () {

  },

  globalData: {
    share: false,  // 分享默认为false
    height: 0,
    iphoneX: false, // 因为 iphoneX 有刘海，所以会单独控制下
    windowHeight: 0
  }
})