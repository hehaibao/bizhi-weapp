Component({
    properties: {
        title: {
            type: String,
            value: ""
        },
        types: {
            type: Number,
            value: 0
        },
        align: {
            type: String,
            value: "tc"
        },
        customStyle: {
            type: String,
            value: ""
        },
        isprev: {
            type: Boolean,
            value: !0
        },
        icon: {
            type: String,
            value: "ico-arrow arrow-left"
        }
    },
    data: {
        searchIcon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABYCAMAAABGS8AGAAAAolBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgESU6AAAANXRSTlMA+Qr05zjep7jDr3Eb1bRhTzEsJBIOBuvi2Y53bVQoFs6TRh7vybuIhIF+emVcAryiPpxIAZQ6DrkAAAH0SURBVFjD7ZbZbqswEIYx+5JANiAsARKyL03Snv/9X+3Eao+UkxZXGqc3lb87ZqTPw3hs0BQKhUKhUCh+BZNhlDth6OTRaPJEbRV4Bj4wzuX4Sdp2Y+M/sm39DO+gwQ3b2UezWbRzprixepPWvhS8Cd6pp78/6+1xBWBZynq3vNpIv4/pJa+6eJESFwDC6jE6WgNMquYZAy7x53jtA8aC7h1nQBh/OddroOmRxTmQ9TrWnAIHqndogg26kifAHBMnYgf4nVndBQqauO6DXQUHh6HRSeIF4MWCdVdgFkm8A/ai/JzaCx8YiPJH4EISr5AOha1awvtDEdvoC+fJmqJP2j3zG/HQhj0hVywWZzFF3MAcifJXE01CEbvA4purz6deQYEovwU2tMsYCAW7Hrt8zim0JgxBky2DOBRa8grkwhM912gsGJYjQcHMIop1B3D1jpwHvCYakWsKbDsbYY80MnuAfTlyBwBHjU7iANh/6ka8wQ1nImGeuNzw8M6WD3D8WsJc85qnm+GdNjcBzA8McHsS5njHuNovBlZVWYNDyLXLINECBpxvZjpvHjhGapqpAY5r8Tg3r6XM+mmd4h/MDGcf8xtIdoNjBY7Xz7K+dynv2l1Kmzl6W1Vt8vChNgQ/S1JEBlLtRzidI02hUCgUCoXinb/NDj8YP5RdlAAAAABJRU5ErkJggg=="
    },
    ready: function() {
        var A = this, e = A.data, a = e.types, t = e.icon;
        2 == a && A.setData({
            searchIcon: t
        });
    },
    methods: {
        inTap: function() {
            var A = this, e = A.data.types;
            switch (Number(e)) {
              case 0:
                getCurrentPages().length > 1 ? wx.navigateBack({
                    delta: 1
                }) : wx.reLaunch({
                    url: "/pages/index/index"
                });
                break;

              case 1:
                wx.navigateTo({
                    url: "/pages/search/search"
                });
            }
            A.triggerEvent("intap");
        }
    }
});