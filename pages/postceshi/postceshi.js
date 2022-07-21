// pages/postceshi/postceshi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  postData:function(){
    wx.request({
      url:'http://localhost/iLove/api2/WxUserApi/Bind',
      method: "POST",
      data: {
        weixinId:'!!oE1uG5UsIxWkifnDd3KPyYSQRV6Q',
        libId:'62d0d1abd81a9fadd7949722',
        bindLibraryCode:'',
        prefix:'NB',
        word:'阿三',
        password:'1234569'
      },
      
      header: {
        "Content-Type": "application/x-www-form-urlencoded"

      },
      success: (res) => {
        console.log(res.data);
        // this.setData({
        //   testpaper: res.data.testpaper,
        //   teacher : res.data.teacher
        // });
        if(res.data.errorInfo==""){
          wx.showToast({
          title: '请求成功',
          icon: 'success',
          duration: 2000//持续的时间
        })
      }else{ wx.showToast({
          title: '错误',
          icon: 'success',
          duration: 2000//持续的时间
        })}
      
          // wx.showToast({
          //   title: '错误',
          //   icon: 'success',
          //   duration: 2000//持续的时间
          // })

      },
     
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   this.postData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
this.postData()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})