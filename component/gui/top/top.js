Component({
    externalClasses: [ "g-class" ],
    properties: {
        isback: {
            type: Boolean,
            value: !0
        },
        title: {
            type: String,
            value: ""
        },
        align: {
            type: String,
            value: "center"
        },
        background: {
            type: String,
            value: "#2ca9e1"
        },
        color: {
            type: String,
            value: "white"
        },
        defaultPage: {
            type: String,
            value: "/pages/index/index"
        }
    },
    data: {
        system: wx.getSystemInfoSync()
    },
    methods: {
        inGoBack: function() {
            getCurrentPages().length > 1 ? wx.navigateBack({
                delta: 1
            }) : wx.reLaunch({
                url: this.data.defaultPage
            }), this.triggerEvent("inback");
        }
    }
});