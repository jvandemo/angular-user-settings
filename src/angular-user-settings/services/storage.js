(function (angular) {

  var localStoragePrefix = 'angularUserSettings';

  angular
    .module('angularUserSettings.services')
    .factory('angularUserSettings.storage', storageFactory);

  function storageFactory($window, $log){
    if(!$window.localStorage){
      $log.debug('angular-user-settings: localStorage not available');
    }
    return new StorageService($window.localStorage);
  }

  storageFactory.$inject = ['$window', '$log'];

  function StorageService(localStorage){

    /**
     * Placeholder for internal data
     *
     * @type {{}}
     * @private
     */
    this._settings = {};

    this._getLocalStorageKey = function(key){
      return localStoragePrefix + ':' + key;
    };

    this.setItem = function(key, value){
      this._settings[key] = value;
      if(localStorage && localStorage.setItem){
        localStorage.setItem(this._getLocalStorageKey(key), JSON.stringify(value));
      }
      return this;
    };

    this.getItem = function(key){
      if(localStorage && localStorage.getItem){
        this._settings[key] = JSON.parse(localStorage.getItem(this._getLocalStorageKey(key)));
      }
      return this._settings[key];
    };

  }

})(angular);
