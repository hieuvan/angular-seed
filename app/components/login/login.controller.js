'use strict';

define(function() {
  return ['config', '$Auth', '$state', function(config, $Auth, $state) {
    var vm = this;

    vm.siteTitle = config.siteTitle;
    vm.loggedInUser = null;

    vm.login = function() {
      var formData = {username: vm.username, password: vm.password};
      $Auth.login(formData).then(function (val) {
        vm.loggedInUser = val;

        if (!_.isEmpty(vm.loggedInUser)) {
          $state.go('root.sites');
        }
      });


    };

    /*var login = function(formdata) {

      return $http.post(self.loginUrl, formdata)
          .then(function(response) {
            var token = response.data;

            setToken(token);

            return getUser();
          });
    };*/
  }];
});
