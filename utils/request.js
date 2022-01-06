function e(e, o, n) {
    a = new Date().valueOf(), n.data = n.data || {}, void 0 == n.load && (n.load = !0), 
    void 0 == n.loadmsg && (n.loadmsg = "加载中..."), n.load && wx.showLoading({
        title: n.loadmsg,
        mask: !0
    }), wx.request({
        url: t.Server + o,
        data: n.data,
        method: e,
        header: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        success: function(e) {
            var o = e.data;
            0 == o.apiCode ? n.success && n.success(o) : n.error ? n.error(o) : wx.showToast({
                title: o.apiMessage,
                icon: "none",
                duration: 2e3
            });
        },
        fail: function(e) {
            n.fail && n.fail(e);
        },
        complete: function(e) {
            n.load && wx.hideLoading(), n.complete && n.complete(e.data), console.log("请求接口：" + o + "，耗时：" + (new Date().valueOf() - a) + "ms");
        }
    });
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var o = require("wcache.js"), t = require("config.js"), a = void 0;

exports.GET = function(o, t) {
    e("GET", o, t);
}, exports.POST = function(o, t) {
    e("POST", o, t);
}, exports.INLOGIN = function(t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    a = new Date().valueOf(), wx.login({
        success: function(a) {
            e("POST", t, {
                data: {
                    code: a.code
                },
                success: function(e) {
                    o.put("zhuci_access_token", e.data.access_token, e.data.expires_in - 20), n.success && n.success(e.data);
                },
                error: function(e) {
                    n.error ? n.error(e) : wx.showToast({
                        title: e.msg,
                        icon: "none"
                    });
                },
                complete: function(e) {
                    function o(o) {
                        return e.apply(this, arguments);
                    }
                    return o.toString = function() {
                        return e.toString();
                    }, o;
                }(function(e) {
                    n.complete && n.error(complete);
                })
            });
        }
    });
};