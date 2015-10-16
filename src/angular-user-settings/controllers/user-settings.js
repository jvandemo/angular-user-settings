(function (angular) {

  angular
    .module('angularUserSettings.controllers')
    .controller('angularUserSettings.UserSettingsController', UserSettingsController);

  function UserSettingsController($attrs, $scope, $userSettings){
    this._name = ($attrs.settings || '$userSettings');
    $scope[this._name] = $userSettings;
  }

  UserSettingsController.$inject = ['$attrs', '$scope', '$userSettings'];

})(angular);
