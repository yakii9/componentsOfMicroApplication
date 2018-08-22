// components/Grant/Grant.js
const APIs = require('../../config.js').APIs
const client = require('../../utils/apiClient.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isGrant: {
      type: Boolean,
      value: true
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
    handleAcquireUserInfo: function (res) {
      let userInfo = res.detail.userInfo
      wx.setStorage({
        key: 'userInfo',
        data: userInfo
      })
      console.log(userInfo, "用户信息")
      let myEventDetail = {
        isGrant: true
      }
      let myEventOption = {}
      this.triggerEvent('grantListener', myEventDetail, myEventOption)
    }
  }
})
