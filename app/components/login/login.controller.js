'use strict';

define(function() {
  return ['config', '$Auth', '$state', '$crypto', function(config, $Auth, $state, CryptoJS) {
    var vm = this;

    vm.siteTitle = config.siteTitle;
    vm.loggedInUser = null;
    vm.errorLoggedIn = false;

    vm.login = function() {
      var salt = "hfhsgvrnckhbDhwj";
      var password = CryptoJS.SHA1(vm.password + vm.username.toLowerCase() + salt);
      var formData = {username: vm.username, password: password};
      $Auth.login(formData).then(function (val) {
        if (!val) {
          vm.errorLoggedIn = true;
        } else {
          vm.loggedInUser = val;

          if (!_.isEmpty(vm.loggedInUser)) {
            $state.go('root.home');
          }
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
