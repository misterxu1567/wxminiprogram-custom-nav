/*
* @module 自定义顶部状态栏导航
* @params navbarData {type: Object}
* {
*   showLeftIco: false, //是否显示左上角图标，true表示显示，false表示不显示 
*   title: '登录', //导航栏 中间的标题
*   url: '' // 跳转连接（若无则返回上一页）
* }      
*/ 
const app = getApp();

Component({
  properties: {
    navbarData: {
      type: Object,
      value: {}
    }
  },
  data: {
    iphoneX: app.globalData.iphoneX,
    height: ''
  },
  attached: function () {
    // 定义导航栏的高度,方便对齐
    this.setData({
      height: app.globalData.height
    })
  },
  methods: {
    // 跳转到某页
    navigateToFn () {
      wx.navigateBack();
      if (this.data.navbarData.url) {
        wx.navigateTo({
          url: this.data.navbarData.url
        });
      } else {
        wx.navigateBack();
      }
    }
  }
}) 