Component({
    properties: {
        active: {
            type: Number,
            value: 0
        },
        list: {
            type: Object,
            value: []
        }
    },
    data: {},
    ready: function() {},
    methods: {
        inTap: function(t) {
            var e = this, a = t.currentTarget.dataset, i = e.data.list;
            e.setData({
                active: a.index
            }), e.triggerEvent("intap", {
                index: a.index,
                data: i[a.index]
            });
        }
    }
});