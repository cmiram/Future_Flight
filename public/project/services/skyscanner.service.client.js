(function() {
    angular
        .module('Future_Flight')
        .factory('SkyscannerService', SkyscannerService);

    function SkyscannerService($http) {
        var baseUrl = '/api/skyscanner';

        var api = {
            browseQuotes: browseQuotes,
            browseRates: browseRates,
            browseDates: browseDates,
            browseGrid: browseGrid
        };
        return api;

        function browseQuotes(country, currency, locale, origin, destination, outboundDate, inboundDate) {
            var url = baseUrl + '/browseQuotes/' + country + '/' + currency + '/' + locale + '/' + origin + '/' +
                    destination + '/' + outboundDate;
            if(inboundDate !== undefined) {
                url += ('/' + inboundDate);
            }
            return $http.get(url);
        }

        function browseRates(country, currency, locale, origin, destination, outboundDate, inboundDate) {
            var url = baseUrl + '/browseRates/' + country + '/' + currency + '/' + locale + '/' + origin + '/' +
                destination + '/' + outboundDate;
            if(inboundDate !== undefined) {
                url += ('/' + inboundDate);
            }
            return $http.get(url);
        }

        function browseDates(country, currency, locale, origin, destination, outboundDate, inboundDate) {
            var url = baseUrl + '/browseDates/' + country + '/' + currency + '/' + locale + '/' + origin + '/' +
                destination + '/' + outboundDate;
            if(inboundDate !== undefined) {
                url += ('/' + inboundDate);
            }
            return $http.get(url);
        }

        function browseGrid(country, currency, locale, origin, destination, outboundDate, inboundDate) {
            var url = baseUrl + '/browseGrid/' + country + '/' + currency + '/' + locale + '/' + origin + '/' +
                destination + '/' + outboundDate;
            if(inboundDate !== undefined) {
                url += ('/' + inboundDate);
            }
            return $http.get(url);
        }
    }
});