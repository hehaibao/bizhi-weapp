Component({
    behaviors: [ "wx://form-field" ],
    externalClasses: [ "g-class" ],
    properties: {
        size: {
            type: String,
            value: "normal"
        },
        type: {
            type: String,
            value: "default"
        },
        radius: {
            type: Boolean,
            value: !1
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        plain: {
            type: Boolean,
            value: !1
        },
        opentype: {
            type: String,
            value: ""
        }
    },
    methods: {
        inGetUserInfo: function(e) {
            this.triggerEvent("getuserinfo", e);
        },
        inGerPhoneNumber: function(e) {
            this.triggerEvent("getphonenumber", e);
        },
        inOpenSetting: function(e) {
            this.triggerEvent("opensetting", e);
        },
        inTap: function(e) {
            this.triggerEvent("intap", e);
        }
    }
});