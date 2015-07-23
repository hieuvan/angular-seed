'use strict';

define(function(require) {

  return ['PermissionService', function(PermissionService) {
    var directive = {};

    directive.scope = {
      permissionCheck: "@",
      method: "@nopermission",
    };
    directive.restrict = 'A';

    var permissionMethods = {
      hide: function($elem, hasPermission){
        if(hasPermission){
          $elem.show();
        } else {
          $elem.hide();
        }
      },
      disable: function($elem, hasPermission){
        if(hasPermission){
          $elem.removeAttr('disabled');
          $elem.removeClass('disabled');
        } else {
          $elem.prop['disabled'] == 'disabled';
          $elem.addClass('disabled');
        }
      }
    }

    directive.link = function(scope, $elem, attr) {
      //set defaults
      if (!scope.method) {scope.method = 'hide';}
      if (!scope.permissionCheck) {
        return;
      }
      //set element enabled or disabled
      PermissionService.hasPermission(scope.permissionCheck).then( function(hasPermission){
        permissionMethods[scope.method]($elem, hasPermission);
      });
    };

    return directive;

  }];

});
