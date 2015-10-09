'use strict';

/**
 * Stores all the applicaton application configurations
 *
 * @return {undefined}
 */
define(function() {
  // these are environment specific configurations
  // once `config` and `ENV` is injected
  // it can be used like config[ENV].something
  var development = {};
  var production = {};

  return {
    defaultUrl: '/',
    siteTitle: 'Angular Requirejs Seed',
    development: development,
    production: production
  };
});
