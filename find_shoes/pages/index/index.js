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
    ],
    canSwipe:false,
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
  // 阻止swiper组件的滑动操作
  catchTouchMove: function (e) {
    if (!this.data.canSwipe) {
      return false;
    }
  },
  swiperChange: function (e) {
    let idx = e.detail.current;
    // 获取当前轮播图的索引
    if (this.data.canSwipe) {
      this.setData({
        current: idx
      });
    }
  },
  // 点击“选我查看详情”按钮
  onChooseShoe: function () {
    let current = this.data.current;
    console.log("current:", current)
    if (!current) return;
    // 跳转到商品详情页
    wx.navigateTo({
      url: `/look_shoes/pages/index/index?current=${current}`,
    })
  },
  selectImage: function (e) {
    // console.log(e)
    const index = e.currentTarget.dataset.index;
    this.setData({
      current: index
    });
  }
})