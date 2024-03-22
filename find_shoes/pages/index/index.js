//index.js
Page({
  data: {
    current: 0, // 当前显示的图片索引
    imageUrls: [
      'http://saoo0jsrv.hd-bkt.clouddn.com/choose_init.png',
      'http://saoo0jsrv.hd-bkt.clouddn.com/choose1.png',
      'http://saoo0jsrv.hd-bkt.clouddn.com/choose2.png',
      'http://saoo0jsrv.hd-bkt.clouddn.com/choose3.png',
      'http://saoo0jsrv.hd-bkt.clouddn.com/choose4.png',
    ],
    styleImage: [
      'http://saoo0jsrv.hd-bkt.clouddn.com/style1.png',
      'http://saoo0jsrv.hd-bkt.clouddn.com/style2.png',
      'http://saoo0jsrv.hd-bkt.clouddn.com/style3.png',
      'http://saoo0jsrv.hd-bkt.clouddn.com/style4.png',
    ]
  },
  swiperButtonLeftTap: function () {
    console.log("click left")
    let current = this.data.current > 0 ? this.data.current - 1 : this.data.imageUrls.length - 1;
    this.setData({
      current: current
    });
  },
  swiperButtonRightTap: function () {
    console.log("click right")
    let current = this.data.current < this.data.imageUrls.length - 1 ? this.data.current + 1 : 0;
    this.setData({
      current: current
    });
  },
  swiperChange: function (e) {
    // 获取当前轮播图的索引
    let idx = e.detail.current;
    // console.log('当前轮播图索引：', e.detail.current);
    this.setData({
      current:idx
    })
  },
  // 点击“选我查看详情”按钮
  onChooseShoe: function() {
    let current = this.data.current;
    console.log("current:",current)
    if(!current)return;
    // 跳转到商品详情页
    wx.navigateTo({
      url: `/look_shoes/pages/index/index?current=${current}`,
    })
  },
  selectImage: function(e) {
    // console.log(e)
    const index = e.currentTarget.dataset.index;
    this.setData({
      current: index
    });
  }
})