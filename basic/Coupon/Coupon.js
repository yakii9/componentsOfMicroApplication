// components/Coupon/Coupon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    id:{
      type: String,
      value: ''
    },
    receive_time:{
      type: String,
      value: ''
    },
    couponinfo:{
      type: Object,
      value: {}
    },
    width:{
      type: Number,
      value: '567'
    },
    height: {
      type: Number,
      value: 167
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
    useHandler: function (e) {
      let couponId = e.currentTarget.dataset.id
      let threshold = this.data.couponinfo.threshold
      var myEventDetail = {
        couponId: couponId,
        threshold: threshold,
        couponinfo: this.data.couponinfo
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('uselistener', myEventDetail, myEventOption)
    }
  }
})
