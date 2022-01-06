App({
    isIPX: -1 == wx.getSystemInfoSync().model.indexOf("iPhone X") ? "" : "isIPX",
    Android: -1 == wx.getSystemInfoSync().system.indexOf("Android") ? "" : "Android",
    onLaunch: function() {
        var e = wx.getSystemInfoSync().model;
        e.includes("iPhone") && e.match(/\s../) > 10 && (this.isIPX = "isIPX");
    },
    ToPage: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        (e = "/pages" + e + e || t.path) && (t.data && (e += "?" + t.data), t.switch ? wx.switchTab({
            url: e
        }) : t.reLaunch ? wx.reLaunch({
            url: e
        }) : t.redirectTo ? wx.redirectTo({
            url: e
        }) : wx.navigateTo({
            url: e
        }));
    },
    ToBack: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = getCurrentPages(), a = e.delta ? e.delta + 1 : 2, n = t[t.length - a < 1 ? 0 : t.length - a];
        e.updatepage && n.setData({
            updatepage: !0
        }), e.data && n.setData(e.data), t.length > 1 ? wx.navigateBack({
            delta: e.delta ? e.delta : 1
        }) : wx.reLaunch({
            url: "/pages/index/index"
        });
    }
});