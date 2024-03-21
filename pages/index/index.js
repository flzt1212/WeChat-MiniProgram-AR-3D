Page({
  data: {},
  onLoad: function() {},

    redirectToPage: function() {
      console.log("into redirectToPage")
      wx.navigateTo({
        url: '/find_shoes/pages/index/index'
      });
    }
})
