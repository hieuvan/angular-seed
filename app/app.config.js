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
  var development = {
    url: 'http://localhost/ahs/web/index.php/api/v1/'
  };
  var production = {
    url: 'http://ahs.hieuvan.net/web/api.php/api/v1/'
  };

  return {
    defaultUrl: '/home',
    siteTitle: 'AHS Inspection App',
    development: development,
    production: production
  };
});
