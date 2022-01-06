var e = "_deadtime";

module.exports = {
    put: function(t, r, a) {
        wx.setStorageSync(t, r);
        var n = parseInt(a);
        if (n > 0) {
            var o = Date.parse(new Date());
            o = o / 1e3 + n, wx.setStorageSync(t + e, o + "");
        } else wx.removeStorageSync(t + e);
    },
    get: function(t, r) {
        var a = parseInt(wx.getStorageSync(t + e));
        if (a && parseInt(a) < Date.parse(new Date()) / 1e3) return r || void 0;
        var n = wx.getStorageSync(t);
        return n || r;
    },
    remove: function(t) {
        wx.removeStorageSync(t), wx.removeStorageSync(t + e);
    },
    clear: function() {
        wx.clearStorageSync();
    }
};