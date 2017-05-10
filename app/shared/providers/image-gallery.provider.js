'use strict';

define(function(require) {

    return [function() {
        this.$get = [
            function() {
                var photos = [], _Index = 0;

                var show = function(photos) {
                    this.photos = photos;
                };

                var isActive = function (index) {
                    return this._Index === index;
                };

                var showPrev = function () {
                    this._Index = (this._Index > 0) ? --this._Index : this.photos.length - 1;
                };
                // show next image
                var showNext = function () {
                    this._Index = (this._Index < this.photos.length - 1) ? ++this._Index : 0;
                };
                // show a certain image
                var showPhoto = function (index) {
                    this._Index = index;
                };



                // public methods
                return {
                    show: show,
                    isActive: isActive,
                    showPrev: showPrev,
                    showNext: showNext,
                    showPhoto: showPhoto

                };
            }];

    }];
});
