module.exports = {
    Replace: function(e) {
        var i = e.split("q70")[0].slice(-4), c = decodeURIComponent(e.replace(i, "w1080"));
        return -1 != c.indexOf("mi-img") && (c = c.replace("mi-img", "xiaomi")), c;
    }
};