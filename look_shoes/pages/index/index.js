Page({
  data: {
    qrcode: '../../assets/hello.png'
  },
  previewImage: function (e) {
    var url = e.currentTarget.dataset.src;
    wx.previewImage({
      current: url, // 当前显示图片的链接，可不填
      urls: [url] // 需要预览的图片链接列表
    })
  },
  onLoad: function () {
  }
});