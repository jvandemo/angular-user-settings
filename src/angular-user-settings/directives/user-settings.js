(function (angular) {

  angular
    .module('angularUserSettings.directives')
    .directive('userSettings', createDirectiveDDO);

  function createDirectiveDDO(){
    return {
      restrict: 'A',
      controller: 'angularUserSettings.UserSettingsController'
    };
  }

})(angular);
