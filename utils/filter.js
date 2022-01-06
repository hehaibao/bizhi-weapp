var r = [ "-", "——", "拍信图库", "拍信", "视觉中国", "锐景创意" ];

module.exports = {
    keyword: function(e) {
        return e = String(e), r.forEach(function(n, t) {
            -1 != e.indexOf(n) && (e = e.replace(r[t], ""));
        }), e;
    }
};