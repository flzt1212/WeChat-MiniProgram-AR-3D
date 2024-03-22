Page({
  data: {},
  onLoad: function () {},
  downloadFile1: function () {
    wx.downloadFile({
      url: 'https://hcqc-1258619350.cos.ap-shanghai.myqcloud.com/robot.glb', // 替换成你要下载的文件地址
      success: function (res) {
        // 下载成功后弹出消息
        wx.showToast({
          title: '文件下载成功',
          icon: 'success',
          duration: 2000
        })
      },
    })
  },
  downloadFile2: function () {
    wx.downloadFile({
      url: 'https://sanyuered.github.io/gltf/robot.glb', // 替换成你要下载的文件地址
      success: function (res) {
        wx.showToast({
          title: '文件下载成功',
          icon: 'success',
          duration: 2000
        })
      },
    })
  },
  redirectToPage: function () {
    console.log("into redirectToPage")
    wx.navigateTo({
      url: '/find_shoes/pages/index/index'
    });
  }
})