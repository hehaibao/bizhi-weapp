Component({
    externalClasses: [ "g-class", "top-class", "bom-class" ],
    options: {
        multipleSlots: !0
    },
    properties: {
        autoX: {
            type: Boolean,
            value: !0
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
        isIPX: -1 == wx.getSystemInfoSync().model.indexOf("iPhone X") ? "" : "isIPX"
    },
    ready: function() {
        var e = wx.getSystemInfoSync().model;
        e.includes("iPhone") && e.match(/\s../) > 10 && this.setData({
            isIPX: "isIPX"
        });
    },
    methods: {}
});