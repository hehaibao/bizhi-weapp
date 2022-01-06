Component({
    behaviors: [ "wx://form-field" ],
    externalClasses: [ "g-class", "h-class", "b-class", "i-class" ],
    properties: {
        title: {
            type: String,
            value: ""
        },
        type: {
            type: String,
            value: "text"
        },
        value: {
            type: String,
            value: ""
        },
        mode: {
            type: String,
            value: ""
        },
        isborder: {
            type: Boolean,
            value: !0
        },
        placeholder: {
            type: String,
            value: ""
        },
        placeholderstyle: {
            type: String,
            value: "color:#b3b7ba;"
        },
        disabled: {
            type: Boolean,
            value: !1
        },
        focus: {
            type: Boolean,
            value: !1
        },
        maxlength: {
            type: Number,
            value: -1
        },
        error: {
            type: Boolean,
            value: !1
        },
        align: {
            type: String,
            value: ""
        },
        confirmtype: {
            type: String,
            value: "done"
        }
    },
    methods: {
        inFocus: function(e) {
            this.triggerEvent("focus", e);
        },
        inChange: function(e) {
            var t = e.detail, i = (void 0 === t ? {} : t).value, l = void 0 === i ? "" : i;
            this.setData({
                value: l
            }), this.triggerEvent("change", e);
        },
        inBlue: function(e) {
            this.triggerEvent("blur", e);
        },
        inConfirm: function(e) {
            this.triggerEvent("confirm", e);
        }
    }
});