const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 顶部状态组件参数
    navBarData: {
      showLeftIco: true,
      title: '详情',
     // url: '/pages/inviterList/inviterList' （可选，若无则返回上页）
    },
    iphoneX: app.globalData.iphoneX,
    height: app.globalData.height,
    pageHeight: app.globalData.windowHeight - app.globalData.height * 2 - 20 - 12 - 12,
    
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (opts) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (opts) {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  }
})