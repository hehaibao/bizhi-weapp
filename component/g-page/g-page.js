var e = getApp();
Component({
    externalClasses: [ "g-class", "cus-class", "top-class", "bom-class" ],
    options: {
        multipleSlots: !0
    },
    properties: {
        autoX: {
            type: Boolean,
            value: !1
        },
        customtop: {
            type: Boolean,
            value: !1
        },
        title: {
            type: String,
            value: ""
        },
        titlecolor: {
            type: String,
            value: "black"
        },
        titleplain: {
            type: Boolean,
            value: !1
        },
        top: {
            type: Boolean,
            value: !1
        },
        bom: {
            type: Boolean,
            value: !1
        }
    },
    data: {
        isIPX: e.isIPX,
        system: wx.getSystemInfoSync()
    },
    methods: {
        inGoBack: function() {
            getCurrentPages().length > 1 ? wx.navigateBack({
                delta: 1
            }) : wx.reLaunch({
                url: "/pages/index/index"
            }), this.triggerEvent("inback");
        }
    }
});