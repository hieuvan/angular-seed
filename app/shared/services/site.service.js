'use strict';

define(function(require) {
    return ['$q', '$http', '$resource', function($q, $http, $resourceProvider) {
        var hotelsUrl = 'hotelList';
        var hotelUrl = 'hotels';

        var getHotels = function() {
            var deferred = $q.defer();
            $http.get($resourceProvider.apiUrl + hotelsUrl, {'cache': true})
                .then(function(response) {
                    deferred.resolve(response.data);
                    //return response;
                }, function errorCallback(response) {
                    //@todo: show error message
                });
            return deferred.promise;
        };

        var getHotel = function(hotelId) {
            var deferred = $q.defer();
            $http.get($resourceProvider.apiUrl + hotelUrl + '/' + hotelId, {'cache': true})
                .then(function(response) {
                    deferred.resolve(response.data);
                }, function errorCallback(response) {
                    //@todo: show error message
                });
            return deferred.promise;
        };

        var submitInspection = function(data) {
            var deferred = $q.defer();

            $http.post($resourceProvider.apiUrl + 'inspections', data)
                .then(function(response) {
                    deferred.resolve(response.data);
                }, function errorCallback(response) {
                    //@todo: show error message
                });
            return deferred.promise;
        };
        // public api
        return {
            getHotels: getHotels,
            getHotel: getHotel,
            submitInspection: submitInspection
        };
    }];
});
