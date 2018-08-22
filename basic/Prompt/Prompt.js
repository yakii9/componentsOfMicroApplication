// components/Prompt/Prompt.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    shadeShow: {
      type: Boolean,
      value: true
    },
    isHide: {
      type: Boolean,
      value: false
    },
    showbtn:{
      type: String,
      value: 'show'
    },
    width:{
      type: Number,
      value: 610
    },
    height: {
      type: Number,
      value: 639
    },
    btnStyle:{
      type: Object,
      value: {
        width: 520,
        height: 78
      }
    },
    title: {
      type: String,
      value: '提示框'
    },
    showTitle:{
      type: String,
      value: 'show'
    },
    titleStyle:{
      type: String,
      value: 'center'
    },
    btnText: {
      type: String,
      value: '我知道了'
    },
    closeShow: {
      type: String,
      value: 'show'

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
    close: function(e) {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('change', myEventDetail, myEventOption)
    }
  }
})
