// components/WorksList/WorksList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    works:{
      type: Array,
      value: []
    },
    showType:{
      type: String,
      value: 'normal'
    },
    recommend: {
      type: String,
      value: 'normal'
    },
    tags:{
      type: Array,
      value: ['测试标签1', '测试标签2', '测试标签3','测试标签14']
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
    imgHandler: function(e) {
      wx.navigateTo({
        url: '/pages/goods/goods?id=' + e.currentTarget.dataset.id,
      })
    },
    starHandler: function(e) {
      let item = e.currentTarget.dataset.item;
      var myEventDetail = {
        id: item.id,
        index: item.index,
        isStar: item.isStar
      }
      var myEventOption = {}
      this.triggerEvent('starHandler', myEventDetail, myEventOption)
     
    }
  },
  ready: function () {
    let works = this.properties.works
    let stars = this.properties.stars
    works.forEach( o => {
    })
  }
})
