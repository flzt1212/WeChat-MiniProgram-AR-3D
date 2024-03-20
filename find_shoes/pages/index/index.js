//index.js
Page({
  data: {
    imageUrls: [
      'https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2286895/pexels-photo-2286895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
  // 点击“选我查看详情”按钮
  onChooseShoe: function() {
    console.log("click into look shoes")
    // 跳转到商品详情页
    wx.navigateTo({
      url: '/look_shoes/pages/index/index',
    })
  },
  // 加减商品数量
  onCountChange: function(e) {
    // 获取当前商品数量
    var count = this.data.shoeCount
    // 加减商品数量
    if (e.target.dataset.action === 'add') {
      count++
    } else if (e.target.dataset.action === 'minus') {
      count--
    }
    // 更新商品数量
    this.setData({
      shoeCount: count
    })
  }
})