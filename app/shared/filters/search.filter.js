'use strict';

define(function(require) {
  return [function() {

    /**
     * Search Filter
     *
     * @param  array  items  Items to search from
     * @model  string model  Query string
     * @fields string fields Comma seperated fields to search
     *
     * @return array Filtered items
     */
    var filter = function(items, model, fields) {
      if (!items) return false;

      return items.filter(function(item) {
        var searchString = getSearchString(item, fields);

        return (!model || searchString.toLowerCase().indexOf(model.toLowerCase()) > -1);
      });
    };

    /**
     * Get the search string for search
     *
     * @param object item
     * @param string fields Comma seperated fields to be searched
     *
     * @return string
     */
    var getSearchString = function(item, fields) {
      var keys = fields.split(','),
          string = '';

      if (_.isFunction(item.get)) {
        item = item.get();
      }

      _.each(keys, function(key) {
        key = key.trim();

        if (!_.has(item, key)) {
          throw new Error('Unknown key [' + key + '] passed in textSearch filter.');
        }

        if (item[key]) string += item[key] + ' ';
      });

      return string.trim();
    };

    return filter;
  }];
});
