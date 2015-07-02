'use strict';

define(function(require) {
  return [function() {

    var filter = function(items, model) {

      return items.filter(function(item) {
        var searchString = item.name;

        return (!model || searchString.toLowerCase().indexOf(model.toLowerCase()) > -1);
      });
    };

    return filter;
  }];
});
