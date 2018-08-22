// components/TabButton/TabButton.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    handleTap: {
      type: Function,
      value: () => {}
    },
    text: {
      type: String,
      value: ''
    },
    isFocus: {
      type: Boolean,
      value: false
    },
    textArrays: {
      type: Array,
      value: ['作品','喜欢','关注','粉丝']
    },
    height: {
      type: String,
      value: '70rpx'
    },
    nowIndex: {
      type: Number,
      value: 0
    },
    color: {
      type: String,
      value: '#222222'
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
    checkBtn: function (e) {
      console.log(this.data.nowIndex,"nowIndex")
      let checkedIndex = this.data.checkedIndex
      let tabIndex = e.currentTarget.dataset.index
      var myEventDetail = {
        tabIndex: tabIndex
      } // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('tabListener', myEventDetail, myEventOption)
      this.setData({
        nowIndex: tabIndex
      })
    }
  }
})
