'use strict';

define(function(require) {
    return ['localStorageService', '$jwt', function(localStorageService, $jwt) {
        var token = localStorageService.get('_token');
        var payload = $jwt.getPayload(token);
        var id = payload.id;

        var getIdFromPayload = function() {
            var token = localStorageService.get('_token');
            var payload = $jwt.getPayload(token);
            return payload.id;
        };

        var getFullName = function() {
            var id = getIdFromPayload();
            var name = localStorageService.get(id+'.firstName') + ' ' + localStorageService.get(id+'.lastName');
            return name;
        };

        // public api
        return {
            getIdFromPayload: getIdFromPayload,
            getFullName: getFullName
        };
    }];
});
