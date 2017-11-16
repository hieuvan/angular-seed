'use strict';

define(function(require) {

  require('angular');

  var NewsController = require('components/news/news.controller');

  return angular.module('app.news', [])

  .controller('NewsController', NewsController);
});
