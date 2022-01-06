var t = getApp(), a = require("../../utils/wcache.js"), e = require("../../utils/down"), i = require("../../utils/imgurl"), s = require("../../utils/api/search.js");
Page({
    data: {
        isIPX: t.isIPX,
        Android: t.Android,
        state: {
            loading: !0
        },
        pageJson: {
            tag: "",
            cardStart: 0,
            cardCount: 20,
            devicePixel: 480,
            type: "WALLPAPER",
            region: "cn"
        },
        listData: [],
        SearchHistory: null
    },
    onLoad: function(t) {
        var a = this, e = a.inGetSearchHistory();
        e && a.setData({
            SearchHistory: e
        }), t.tag && (a.setData({
            "pageJson.tag": t.tag
        }), a.inGetList());
    },
    inReset: function() {
        this.setData({
            listData: [],
            "pageJson.cardStart": 0,
            "state.loading": !0
        });
    },
    inGetSearchHistory: function() {
        return a.get("bzk_search_history");
    },
    inSetSearchHistory: function(t) {
        var e = this;
        if (t) {
            var i = a.get("bzk_search_history") ? a.get("bzk_search_history") : [];
            if (i.length) for (var s = i.length - 1; s >= 0; s--) i[s].keyword === t && i.splice(s, 1);
            i.unshift({
                keyword: t
            }), i.length > 50 && i.splice(i.length - 1, 1), e.setData({
                SearchHistory: i
            }), a.put("bzk_search_history", i);
        }
    },
    inQuickSearch: function(t) {
        var a = this, e = t.currentTarget.dataset.keyword;
        a.setData({
            "pageJson.tag": e
        }), a.inSetSearchHistory(e), a.inReset(), a.inGetList();
    },
    inConfirm: function(t) {
        var a = this, e = t.detail.value;
        a.setData({
            "pageJson.tag": e
        }), e.length ? (a.inSetSearchHistory(e), a.inReset(), a.inGetList()) : a.setData({
            listData: []
        });
    },
    inClear: function() {
        this.setData({
            listData: [],
            "pageJson.tag": ""
        });
    },
    inGetList: function(t) {
        var a = this, e = a.data, i = e.state, r = e.pageJson, n = e.listData;
        i.loading && s.get({
            load: !1,
            data: r,
            success: function(t) {
                var e = t.apiData.cards[0].products;
                if (e.length) {
                    e.forEach(function(t, i) {
                        n.push(e[i]), i + 1 == e.length && i + 1 < r.cardCount && a.setData({
                            "state.loading": !1
                        });
                    });
                    for (var i in e) ;
                    a.setData({
                        "pageJson.cardStart": r.cardStart + 1,
                        listData: n
                    });
                } else a.setData({
                    listData: [],
                    "state.loading": !1
                });
            }
        });
    },
    inDownImg: function(t) {
        var a = t.currentTarget.dataset, s = i.Replace(a.src);
        e.inDownImg(s.replace("mi-img", "xiaomi"));
    },
    inToSeeImg: function(t) {
        var a = t.currentTarget.dataset;
        wx.navigateTo({
            url: "/pages/see-img/see-img?src=" + a.src
        });
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