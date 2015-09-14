'use strict';

define(function(require) {
  var Item = require('shared/libs/sf-form/item');

  var RadioButtonItem = function(key) {
    this.style = {
      selected: 'btn-success',
      unselected: 'btn-default'
    };

    this.type = 'radiobuttons';

    Item.call(this, key);
  };

  RadioButtonItem.prototype = Object.create(Item.prototype);

  return RadioButtonItem;
});
