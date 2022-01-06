var e = getApp(), i = require("../../utils/api/index.js"), t = require("../../utils/down"), a = require("../../utils/filter");

Page({
    data: {
        isIPX: e.isIPX,
        uuid: "",
        posterTitle: "",
        imgAct: 0,
        imgData: null
    },
    onLoad: function(e) {
        var i = this;
        if (e.src) {
            var t = e.src.split("q70")[0].slice(-4), a = void 0, r = void 0;
            (a = r = decodeURIComponent(e.src)).includes("/webp/") && (a = a.replace("/webp/", "/jpeg/")), 
            a = a.replace(t, "w1080"), r = r.replace(t, "w1080"), -1 != a.indexOf("mi-img") && (a = a.replace("mi-img", "xiaomi")), 
            i.setData({
                posterTitle: e.title ? decodeURIComponent(e.title) : "",
                imgData: [ {
                    originalImageUrl: a,
                    imageUrl: r.replace("w1080", "w720")
                } ]
            });
        } else e.uuid && (i.setData({
            uuid: e.uuid
        }), i.inGetInfo());
    },
    inGetInfo: function() {
        var e = this;
        i.get({
            data: {
                uuid: e.data.uuid,
                type: "WALLPAPER_DETAIL_RIGHT",
                devicePixel: 1080,
                isSubject: !1,
                cardStart: 0
            },
            success: function(i) {
                var t = i.apiData.cards[0].subject, r = t.subjectTitle, n = t.products;
                n.forEach(function(i, t) {
                    i.imageUrl = i.imageUrl.replace("w999q70", "w720q70"), i.uuid == e.data.uuid && e.setData({
                        imgAct: t
                    });
                }), e.setData({
                    imgData: n,
                    posterTitle: a.keyword(r)
                });
            }
        });
    },
    inSwiperChange: function(e) {
        this.setData({
            imgAct: e.detail.current
        });
    },
    inDownLoadImg: function() {
        var e = this.data, i = e.imgData[e.imgAct].originalImageUrl;
        t.inDownImg(i.replace("mi-img", "xiaomi"));
    },
    inTabImg: function(e) {
        var i = e.currentTarget.dataset;
        this.setData({
            imgAct: i.index
        });
    },
    onShareAppMessage: function() {
        var e = this.data, i = e.imgsrc, t = e.uuid, a = e.posterTitle;
        return i ? {
            title: "总有一张手机壁纸适合你，快来挑选吧",
            imageUrl: i,
            path: "'pages/see-img/see-img?src=" + encodeURIComponent(i) + "&title=" + a
        } : t ? {
            title: a || "壁纸",
            path: "pages/see-img/see-img?uuid=" + t
        } : void 0;
    }
});