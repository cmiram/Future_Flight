module.exports = function(app) {
    var request = require('request');
    var apiKey = process.env.SKYCANNER_API_KEY;

    var baseurl = 'http://partners.api.skyscanner.net/apiservices';
    var version = '/v1.0';
    var endUrl = '?api_key=' + apiKey;

    app.get('/api/skyscanner/browseQuotes/:country/:currency/:locale/:origin/:destination/:outboundDate/:inboundDate', browseQuotes);
    app.get('/api/skyscanner/browseQuotes/:country/:currency/:locale/:origin/:destination/:outboundDate', browseQuotes);
    app.get('/api/skyscanner/browseRoutes/:country/:currency/:locale/:origin/:destination/:outboundDate/:inboundDate', browseRoutes);
    app.get('/api/skyscanner/browseRoutes/:country/:currency/:locale/:origin/:destination/:outboundDate', browseRoutes);
    app.get('/api/skyscanner/browseDates/:country/:currency/:locale/:origin/:destination/:outboundDate/:inboundDate', browseDates);
    app.get('/api/skyscanner/browseDates/:country/:currency/:locale/:origin/:destination/:outboundDate', browseDates);
    app.get('/api/skyscanner/browseGrid/:country/:currency/:locale/:origin/:destination/:outboundDate/:inboundDate', browseGrid);
    app.get('/api/skyscanner/browseGrid/:country/:currency/:locale/:origin/:destination/:outboundDate', browseGrid);

    function browseQuotes(req, res) {
        var country = '/' + req.params.country;
        var currency = '/' + req.params.currency;
        var locale = '/' + req.params.locale;
        var origin = '/' + req.params.origin;
        var destination = '/' + req.params.destination;
        var outboundDate = '/' + req.params.outboundDate;
        var inboundDate = (req.params.inboundDate === null) ? null : '/' + req.params.inboundDate;

        var url = baseurl + '/browsequotes' + version + country + currency + locale + origin + destination + outboundDate;
        if(inboundDate) {
            url += inboundDate;
        }

        request(url, function(err, response, body) {
            if(!err && response.statusCode === 200) {
                res.json(body);
            }
            else {
                res.status(400).send('error with browse quotes');
            }
        });
    }

    function browseRoutes(req, res) {
        var country = '/' + req.params.country;
        var currency = '/' + req.params.currency;
        var locale = '/' + req.params.locale;
        var origin = '/' + req.params.origin;
        var destination = '/' + req.params.destination;
        var outboundDate = '/' + req.params.outboundDate;
        var inboundDate = (req.params.inboundDate === null) ? null : '/' + req.params.inboundDate;

        var url = baseurl + '/browseroutes' + version + country + currency + locale + origin + destination + outboundDate;
        if(inboundDate) {
            url += inboundDate;
        }

        request(url, function(err, response, body) {
            if(!err && response.statusCode === 200) {
                res.json(body);
            }
            else {
                res.status(400).send('error with browse quotes');
            }
        });
    }

    function browseDates(req, res) {
        var country = '/' + req.params.country;
        var currency = '/' + req.params.currency;
        var locale = '/' + req.params.locale;
        var origin = '/' + req.params.origin;
        var destination = '/' + req.params.destination;
        var outboundDate = '/' + req.params.outboundDate;
        var inboundDate = (req.params.inboundDate === null) ? null : '/' + req.params.inboundDate;

        var url = baseurl + '/browsedates' + version + country + currency + locale + origin + destination + outboundDate;
        if(inboundDate) {
            url += inboundDate;
        }

        request(url, function(err, response, body) {
            if(!err && response.statusCode === 200) {
                res.json(body);
            }
            else {
                res.status(400).send('error with browse quotes');
            }
        });
    }

    function browseGrid(req, res) {
        var country = '/' + req.params.country;
        var currency = '/' + req.params.currency;
        var locale = '/' + req.params.locale;
        var origin = '/' + req.params.origin;
        var destination = '/' + req.params.destination;
        var outboundDate = '/' + req.params.outboundDate;
        var inboundDate = (req.params.inboundDate === null) ? null : '/' + req.params.inboundDate;

        var url = baseurl + '/browsegrid' + version + country + currency + locale + origin + destination + outboundDate;
        if(inboundDate) {
            url += inboundDate;
        }

        request(url, function(err, response, body) {
            if(!err && response.statusCode === 200) {
                res.json(body);
            }
            else {
                res.status(400).send('error with browse quotes');
            }
        });
    }
}