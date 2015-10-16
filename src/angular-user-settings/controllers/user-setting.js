(function (angular) {

  angular
    .module('angularUserSettings.controllers')
    .controller('angularUserSettings.UserSettingController', UserSettingController);

  function UserSettingController($attrs, $userSettings){

    this._key = null;

    this.getKey = function(){
      if(!this._key){
        this._key = ($attrs.userSetting || 'global');
      }
      return this._key;
    };

    this.get = function(){
      return $userSettings.get(this.getKey());
    };

    this.set = function(value){
      return $userSettings.set(this.getKey(), value);
    };

    this.enable = function(){
      return $userSettings.enable(this.getKey());
    };

    this.disable = function(){
      return $userSettings.disable(this.getKey());
    };

    this.enabled = function(){
      return $userSettings.enabled(this.getKey());
    };

    this.disabled = function(){
      return $userSettings.disabled(this.getKey());
    };

  }

  UserSettingController.$inject = ['$attrs', '$userSettings'];

})(angular);
