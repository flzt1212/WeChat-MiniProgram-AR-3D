Page({
  data: {
    bgImg:'',
    shoeImg:'',
    current:'',
    ar_url:[
      'https://tryon.kivisense.com/viewer/?user=9dae4a936b7c&sku=001&action=view&lang=zh-CN&token=',
      'https://tryon.kivisense.com/viewer/?user=9dae4a936b7c&sku=002&action=view&lang=zh-CN&token=',
      'https://tryon.kivisense.com/viewer/?user=2f537b21d320&sku=001&action=view&lang=zh-CN&token=',
      'https://tryon.kivisense.com/viewer/?user=2f537b21d320&sku=004&action=view&lang=zh-CN&token='
    ],
  },
  onShoeLook:function(e){
    wx.navigateTo({
      url: '/pages/webview/webview?url=' + this.data.ar_url[this.data.current-1]
    })
  },
  previewImage: function (e) {
    var url = e.currentTarget.dataset.src;
    wx.previewImage({
      current: url, // 当前显示图片的链接，可不填
      urls: [url] // 需要预览的图片链接列表
    })
  },
  onLoad: function (options) {
    // 获取页面跳转携带的参数
    console.log(options.current); 
    let bg_url = `http://saoo0jsrv.hd-bkt.clouddn.com/bg-shoe${options.current}.jpg`
    let shoe_url = `http://saoo0jsrv.hd-bkt.clouddn.com/shoe${options.current}.png`
    this.setData({
      bgImg:bg_url,
      shoeImg:shoe_url,
      current:options.current,
    })
  }

});