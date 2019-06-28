/*
* @module 自定义顶部状态栏导航
* @params navbarData {type: Object}
* {
*   title: '列表' //导航栏 中间的标题
* }      
*/
import Api from '../../api/index.js';
const app = getApp();

Component({
  properties: {
    navbarData: {
      type: Object,
      value: {}
    }
  },
  data: {
    iphoneX: null,
    height: '',
  },
  methods: {
   
  },
  attached: function () {
    // 定义导航栏的高度   方便对齐
    this.setData({
      iphoneX: app.globalData.iphoneX,
      height: app.globalData.height
    });
  }
}) 