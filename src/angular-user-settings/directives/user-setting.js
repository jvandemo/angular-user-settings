(function (angular) {

  angular
    .module('angularUserSettings.directives')
    .directive('userSetting', createDirectiveDDO);

  function createDirectiveDDO(){
    return {
      restrict: 'A',
      scope: true,
      controller: 'angularUserSettings.UserSettingController',
      controllerAs: '$userSetting'
    };
  }

})(angular);
