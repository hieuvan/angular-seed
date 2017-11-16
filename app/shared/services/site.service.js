'use strict';

define(function(require) {
    return ['$q', '$http', '$resource', '$timeout', 'Upload', function($q, $http, $resourceProvider, $timeout, Upload) {
        var hotelsUrl = 'hotelList';
        var hotelUrl = 'hotels';

        var getHotels = function() {
            var deferred = $q.defer();

            $http.get($resourceProvider.apiUrl + hotelsUrl, {cache: true, timeout: 10000})
                .then(function(response) {
                    deferred.resolve(response.data);
                }, function errorCallback(response) {
                    //@todo: show error message
                    deferred.reject(response);
                });

            return deferred.promise;
        };

        var getHotel = function(hotelId) {
            var deferred = $q.defer();

            $http.get($resourceProvider.apiUrl + hotelUrl + '/' + hotelId, {cache: true, timeout: 10000})
                .then(function(response) {
                    deferred.resolve(response.data);
                }, function errorCallback(response) {
                    //@todo: show error message
                    deferred.reject(response);
                });

            return deferred.promise;
        };

        var submitInspection = function(data) {
            var deferred = $q.defer();

            $http.post($resourceProvider.apiUrl + 'inspections', data, {timeout: 10000})
                .then(function(response) {
                    deferred.resolve(response.data);
                }, function errorCallback(response) {
                    //@todo: show error message
                    deferred.reject(response);
                });
            return deferred.promise;
        };

        var submitSafetyDocuments = function(data) {
            var deferred = $q.defer();
            Upload.upload({
                url: $resourceProvider.apiUrl + 'safetyDocuments',
                data: data
            }).then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                //@todo: show error message
                deferred.reject(response);
            }, function (evt) {

            });

            return deferred.promise;
        };

        var emailPhoto = function(data) {
            var deferred = $q.defer();
            Upload.upload({
                url: $resourceProvider.apiUrl + 'emailInspectionPhoto',
                data: data
            }).then(function (response) {
                deferred.resolve(response.data);
            }, function (response) {
                //@todo: show error message
                deferred.reject(response);
            }, function (evt) {

            });

            return deferred.promise;
        };

        var getInspections = function(data) {
            var deferred = $q.defer();
            $timeout(function() {
                $http.post($resourceProvider.apiUrl + 'getInspections', data, {timeout: 10000})
                    .then(function(response) {
                        deferred.resolve(response.data);
                    }, function errorCallback(response) {
                        //@todo: show error message
                        deferred.reject(response);
                    });
            }, 1000);
            return deferred.promise;
        };
        // public api
        return {
            getHotels: getHotels,
            getHotel: getHotel,
            submitInspection: submitInspection,
            getInspections: getInspections,
            submitSafetyDocuments: submitSafetyDocuments,
            emailPhoto: emailPhoto
        };
    }];
});
