module.exports = function(app) {
    //var models = require("./models/models.server.js");

    var skyscannerService = require('./services/skyscanner.service.server')(app);
}