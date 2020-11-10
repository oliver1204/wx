//app.js
App({
  onLaunch: function () {
    // 导航
    this.getDeviceSize().then(res => {
      const {bottomLift} = res
      this.globalData.bottomLift = bottomLift
    })
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
		if (capsule) {
		 	this.globalData.Custom = capsule;
			this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
		} else {
			this.globalData.CustomBar = e.statusBarHeight + 50;
		}
      }
    })
  },
  // 获取设备信息
  getDeviceSize: function() {
    return new Promise((resolve, reject) => {
      wx.getSystemInfo({
        success: function(res) {
          const {screenHeight, safeArea} = res
          const {bottom} = safeArea
          const bottomLift = screenHeight - bottom
          resolve({bottomLift})
        }
      })
    })
  },
  globalData: {
    bottomLift: 0,
  }
})