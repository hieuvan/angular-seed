'use strict';

define(function() {

  require('shared/helpers/string');

  var Item = function(key) {
    this.key = key;
    this.title = key.capitalizeFirstLetter();
  };

  return Item;
});
