Page({
  data: {
    bgImg:'',
    shoeImg:'',
    current:'',
  },
  onShoeLook:function(e){
    wx.navigateTo({
      url: `/package_3d_viewer/pages/camera/camera?current=${this.data.current}`,
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