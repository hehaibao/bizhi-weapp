module.exports = {
    inDownImg: function(o) {
        wx.showLoading({
            title: "保存中...",
            mask: !0
        }), o.includes("/webp/") && (o = o.replace("/webp/", "/jpeg/")), wx.getImageInfo({
            src: "https://" + o.replace(o.split(".market")[0], "t1"),
            success: function(o) {
                wx.hideLoading(), wx.saveImageToPhotosAlbum({
                    filePath: o.path,
                    success: function(o) {
                        wx.showToast({
                            title: "保存成功"
                        });
                    },
                    fail: function(o) {
                        wx.hideLoading();
                    }
                });
            },
            complete: function(o) {
                wx.hideLoading();
            }
        });
    },
    video: function() {
        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        wx.showLoading({
            title: "保存中...",
            mask: !0
        });
        var e = function(e) {
            wx.hideLoading(), wx.saveVideoToPhotosAlbum({
                filePath: e,
                success: function(s) {
                    wx.showToast({
                        title: "保存成功"
                    }), o.success && o.success(e);
                },
                fail: function(s) {
                    wx.hideLoading(), wx.showModal({
                        content: "授权后才能下载到本地，是否重新授权？",
                        success: function(s) {
                            s.confirm && wx.openSetting({
                                success: function(s) {
                                    s.authSetting["scope.writePhotosAlbum"] && wx.saveImageToPhotosAlbum({
                                        filePath: e,
                                        success: function(s) {
                                            wx.showToast({
                                                title: "保存成功"
                                            }), o.success && o.success(e);
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        };
        o.down ? e(o.url) : wx.downloadFile({
            url: o.url,
            success: function(o) {
                e(o.tempFilePath);
            },
            complete: function(o) {
                console.log(o);
            }
        });
    }
};