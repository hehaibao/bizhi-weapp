var e = require("../request");

module.exports = {
    get: function(r) {
        return e.GET("/app/v9/uipages/search/tag", r);
    }
};