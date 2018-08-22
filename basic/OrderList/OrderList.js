// components/OrderList/OrderList.js
const APIs = require('../../config.js').APIs
const client = require('../../utils/apiClient.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderList:{
      type: Array,
      value: []
    },
    hideFlag:{
      type: Boolean,
      value: false
    },
    btnTextIndex: {
      type: Number,
      value: 0
    },
    min: {
      type: Number,
      value: 30
    },
    bgColor: {
      type: String,
      value: '#F6F6F6'
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
    navigateToDetail: function (e) {
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/order/detail/detail?orderId=' +id
      })
    },
    preBtnHandler: function (e) {
      let self = this;
      let dataset = e.currentTarget.dataset
      let btnstatus = dataset.btnstatus
      let orderId = e.currentTarget.dataset.id;
      let data = {
        order_id: orderId,
        order_status: 5,
        user_note: '',
        receiving_address: '123',
        order_money: 0,
        close_note: '',
        handset_material: 1,
        evaluate: '',
        goods_num: 1
      }
      var myEventDetail = {      // detail对象，提供给事件监听函数
        data: data,
        btnstatus: btnstatus,
        orderId: orderId
      }
      var myEventOption = {}     // 触发事件的选项
      self.triggerEvent('prevListener', myEventDetail, myEventOption)
      
    },
    confirmBtnHandler: function (e) {
      let orderId = e.currentTarget.dataset.id;
      let fee = e.currentTarget.dataset.fee
      let btnstatus = e.currentTarget.dataset.btnstatus
      let item = e.currentTarget.dataset.item
      var myEventDetail = {      // detail对象，提供给事件监听函数
        orderId: orderId,
        fee,
        btnstatus,
        item
      }             
      var myEventOption = {}     // 触发事件的选项
      this.triggerEvent('comfirmListener', myEventDetail, myEventOption)
    }
  }
})
