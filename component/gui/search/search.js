Component({
    externalClasses: [ "g-class" ],
    properties: {
        keyword: {
            type: String,
            value: ""
        },
        maxlen: {
            type: String,
            value: 10
        },
        placeholder: {
            type: String,
            value: "请输入关键词"
        }
    },
    data: {},
    methods: {
        inChange: function(e) {
            this.setData({
                keyword: e.detail.value
            }), this.triggerEvent("inchange", {
                value: e.detail.value
            });
        },
        inClear: function(e) {
            this.setData({
                keyword: ""
            }), this.triggerEvent("inclear");
        },
        inSubmit: function(e) {
            var t = this, a = t.data.maxlen;
            e.detail.value.length && (e.detail.value.length <= a ? (this.setData({
                keyword: e.detail.value
            }), t.triggerEvent("insubmit", {
                value: e.detail.value
            })) : wx.showToast({
                title: "关键词不能超过" + a + "个字符",
                icon: "none"
            }));
        }
    }
});