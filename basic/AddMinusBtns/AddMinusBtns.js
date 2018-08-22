// components/addMinusBtns/addMinusBtns.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    num:{
      type: Number,
      value: 0
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
    minusEventListener: function(){
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('minusevent', myEventDetail, myEventOption)
    },
    addEventListener: function() {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('addevent', myEventDetail, myEventOption)
    }
  }
})
