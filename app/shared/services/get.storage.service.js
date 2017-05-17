'use strict';

define(function(require) {
    return ['localStorageService', '$jwt', function(localStorageService, $jwt) {
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

        var getCurrentInspection = function(prefixKey) {
            var inspection = localStorageService.get(prefixKey+'.inspection');
            if (inspection) {
                return JSON.parse(inspection);
            }
            return inspection;
        };

        var setCurrentInspection = function(prefixKey, value) {
            localStorageService.set(prefixKey+'.inspection', JSON.stringify(value));
        };

        var deleteCurrentInspection = function(prefixKey) {
            localStorageService.remove(prefixKey+'.inspection');
        };

        // public api
        return {
            getIdFromPayload: getIdFromPayload,
            getFullName: getFullName,
            getCurrentInspection: getCurrentInspection,
            setCurrentInspection: setCurrentInspection,
            deleteCurrentInspection: deleteCurrentInspection
        };
    }];
});
