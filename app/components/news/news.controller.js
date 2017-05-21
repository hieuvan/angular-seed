'use strict';

define(function() {
  return ['config', 'news', function(config, news) {
    var vm = this;

    vm.title = config.siteTitle;
    vm.news = _.map(news, function(eachNews) {
      eachNews.sortedDate = new Date(eachNews.published_date);
      return eachNews;
    });

  }];
});
