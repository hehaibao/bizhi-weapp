function t(t, a, e) {
    return a in t ? Object.defineProperty(t, a, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[a] = e, t;
}
var a = getApp(), e = require("../../utils/down"), i = require("../../utils/imgurl"), n = require("../../utils/api/index.js"), r = require("../../utils/api/search.js");

Page({
    data: {
        isIPX: a.isIPX,
        Android: a.Android,
        state: {
            loading: !0
        },
        tagData: {
            active: 0,
            item: [ {
                name: "精选",
                list: []
            }, {
                name: "星空",
                tag: "星空"
            }, {
                name: "风景",
                tag: "风景"
            }, {
                name: "爱情",
                tag: "爱情"
            }, {
                name: "二次元",
                tag: "二次元"
            }, {
                name: "游戏",
                tag: "游戏"
            }, {
                name: "插画",
                tag: "插画"
            }, {
                name: "科技",
                tag: "科技"
            }, {
                name: "创意",
                tag: "创意"
            }, {
                name: "汽车",
                tag: "汽车"
            }, {
                name: "美食",
                tag: "美食"
            }, {
                name: "潮流",
                tag: "潮流"
            } ]
        },
        cardCount: 20
    },
    onLoad: function() {
        var t = this, a = t.data.tagData;
        for (var e in a.item) a.item[e].list = [], a.item[e].cardStart = 0, a.item[e].load = !0;
        t.setData({
            tagData: a
        }), 0 == a.active ? t.inGetList() : t.inGetCategory();
    },
    inScrollTolower: function() {
        0 == this.data.tagData.active ? this.inGetList() : this.inGetCategory();
    },
    inGetList: function(a) {
        var e = this, i = e.data.tagData;
        i.item[i.active].load && n.get({
            load: !1,
            data: {
                device: "weChat",
                system: "weChat",
                devicePixel: 480,
                homeOpenCount: -1,
                type: "WALLPAPER_INDEX",
                region: "CN"
            },
            success: function(a) {
                var n = "tagData.item[" + i.active + "].load", r = a.apiData.cards[0].belowSubjectProducts;
                if (r.length) {
                    for (var s in r) i.item[0].list.push(r[s]);
                    e.setData({
                        "tagData.item[0].list": i.item[0].list
                    });
                } else e.setData(t({}, n, !1));
            }
        });
    },
    inGetCategory: function(a) {
        var e = this, i = e.data, n = i.tagData, s = i.cardCount, g = n.item[n.active];
        g.load && r.get({
            load: !1,
            data: {
                tag: g.tag,
                cardStart: g.cardStart,
                cardCount: s,
                devicePixel: 480,
                type: "WALLPAPER",
                region: "cn"
            },
            success: function(a) {
                var i = "tagData.item[" + n.active + "].load", r = "tagData.item[" + n.active + "].list", g = n.item[n.active].list, c = "tagData.item[" + n.active + "].cardStart", d = n.item[n.active].cardStart, o = a.apiData.cards[0].products;
                if (o.length) {
                    var l;
                    for (var u in o) g.push(o[u]), u + 1 == o.length && u + 1 < s && e.setData(t({}, i, !1));
                    e.setData((l = {}, t(l, c, d + 1), t(l, r, g), l));
                } else e.setData(t({}, i, !1));
            }
        });
    },
    inToggleTag: function(t) {
        var a = this;
        a.setData({
            "tagData.active": t.detail.index
        });
        var e = a.data.tagData;
        !e.item[e.active].list.length && t.detail.index > 0 ? a.inGetCategory() : e.item[e.active].list.length || 0 != t.detail.index || a.inGetList();
    },
    inToSeeImg: function(t) {
        var a = this.data.tagData, e = t.currentTarget.dataset;
        0 == a.active ? wx.navigateTo({
            url: "/pages/see-img/see-img?src=" + e.src + "&title=" + (e.title ? e.title : "")
        }) : wx.navigateTo({
            url: "/pages/see-img/see-img?uuid=" + e.uuid
        });
    },
    inDownImg: function(t) {
        var a = t.currentTarget.dataset, n = i.Replace(a.src);
        e.inDownImg(n.replace("mi-img", "xiaomi"));
    },
    onShareAppMessage: function(t) {
        var a = "总有一张手机壁纸适合你，快来挑选吧";
        if ("button" == t.from) {
            var e = t.target.dataset;
            return e.name && (a = e.name), {
                title: a,
                imageUrl: e.src,
                path: "/pages/see-img/see-img?" + (e.uuid ? "uuid=" + e.uuid : "src=" + e.src + "&title=" + e.title)
            };
        }
        return {
            title: a,
            path: "pages/index/index"
        };
    }
});