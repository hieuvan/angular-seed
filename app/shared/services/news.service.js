'use strict';

define(function(require) {
    return ['$q', '$http', '$resource', '$state', function($q, $http, $resourceProvider, $state) {
        var getNews = function() {
            var deferred = $q.defer();

            $http.get($resourceProvider.apiUrl + 'news', {cache: true, timeout: 10000})
                .then(function(response) {
                    deferred.resolve(response.data);
                }, function errorCallback(response) {
                    //@todo: show error message
                });
            return deferred.promise;
        };

        // public api
        return {
            getNews: getNews
        };
    }];
});
