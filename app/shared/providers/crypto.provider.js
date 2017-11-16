'use strict';

define(function(require) {

    return [function() {
        this.$get = [
            function() {

                var CryptoJS = require("crypto-js");

                var SHA1 = function(message) {
                    return CryptoJS.enc.Hex.stringify(CryptoJS.SHA1(message));
                };

                // public methods
                return {
                    SHA1: SHA1
                };
            }];

    }];
});
