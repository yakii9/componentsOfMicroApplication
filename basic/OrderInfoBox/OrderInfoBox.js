// components/OrderInfoBox/OrderInfoBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    detailInfo: {
      type: Object,
      value: ''
    },
    bgColor:{
      type: String,
      value: '#fff'
    }
    
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    gotoGoodsPage: function (e) {
      let id = this.data.detailInfo.goods_id;
      wx: wx.navigateTo({
        url: '../../goods/goods?id=' + id,
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  }
})
