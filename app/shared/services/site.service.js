'use strict';

define(function(require) {
    return ['$q', '$http', '$resource', '$timeout', 'Upload', function($q, $http, $resourceProvider, $timeout, Upload) {
        var hotelsUrl = 'hotelList';
        var hotelUrl = 'hotels';

        var getHotels = function() {
            var deferred = $q.defer();
            $timeout(function() {
                $http.get($resourceProvider.apiUrl + hotelsUrl, {'cache': true})
                    .then(function(response) {
                        deferred.resolve(response.data);
                    }, function errorCallback(response) {
                        //@todo: show error message
                        deferred.reject(response);
                    });
            }, 2000);
            return deferred.promise;
        };

        var getHotel = function(hotelId) {
            var deferred = $q.defer();
            $timeout(function() {
                $http.get($resourceProvider.apiUrl + hotelUrl + '/' + hotelId, {'cache': true})
                    .then(function(response) {
                        deferred.resolve(response.data);
                    }, function errorCallback(response) {
                        //@todo: show error message
                        deferred.reject(response);
                    });
            }, 2000);
            return deferred.promise;
        };

        var submitInspection = function(data) {
            var deferred = $q.defer();

            $http.post($resourceProvider.apiUrl + 'inspections', data)
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
                //console.log('Success ' + response.config.data.file.name + 'uploaded. Response: ' + response.data);
                deferred.resolve(response.data);
            }, function (response) {
                //console.log('Error status: ' + response.status);
                //@todo: show error message
                deferred.reject(response);
            }, function (evt) {
                //var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                //console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });

            return deferred.promise;
        };

        var getInspections = function(data) {
            var deferred = $q.defer();
            $timeout(function() {
                $http.post($resourceProvider.apiUrl + 'getInspections', data)
                    .then(function(response) {
                        deferred.resolve(response.data);
                    }, function errorCallback(response) {
                        //@todo: show error message
                        deferred.reject(response);
                    });
            }, 2000);
            return deferred.promise;
        };
        // public api
        return {
            getHotels: getHotels,
            getHotel: getHotel,
            submitInspection: submitInspection,
            getInspections: getInspections,
            submitSafetyDocuments: submitSafetyDocuments
        };
    }];
});
