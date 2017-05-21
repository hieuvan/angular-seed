'use strict';

define(function(require) {
    return ['$q', '$http', '$resource', function($q, $http, $resourceProvider) {
        var getNews = function() {
            var deferred = $q.defer();
            $http.get($resourceProvider.apiUrl + 'news', {'cache': true})
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
