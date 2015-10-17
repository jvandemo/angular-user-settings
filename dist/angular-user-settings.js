(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angularUserSettings.config', [])
      .value('angularUserSettings.config', {
          debug: true
      });

  // Modules
  angular.module('angularUserSettings.directives', []);
  angular.module('angularUserSettings.controllers', []);
  angular.module('angularUserSettings.services', []);
  angular.module('angularUserSettings',
      [
          'angularUserSettings.config',
          'angularUserSettings.controllers',
          'angularUserSettings.directives',
          'angularUserSettings.services'
      ]);

})(angular);

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

(function (angular) {

  var localStoragePrefix = 'angularUserSettings:';

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
      return localStoragePrefix + key;
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

(function (angular) {

  angular
    .module('angularUserSettings.services')
    .provider('$userSettings', userSettingsServiceProvider);

  /**
   * Default options
   */
  var options = {
    storageServiceName: 'angularUserSettings.storage'
  };

  function userSettingsServiceProvider(){

    /**
     * Set options
     *
     * @param opts
     */
    this.setOptions = function(opts){
      angular.merge(options, opts);
    };

    /**
     * Get options
     *
     * @returns {{showWhenUnknown: boolean}}
     */
    this.getOptions = function(){
      return options;
    };

    this.$get = userSettingsServiceFactory;
  }

  /**
   * Settings service factory
   *
   * @returns {SettingsService}
   */
  function userSettingsServiceFactory(storage){
    return new SettingsService(storage);
  }

  // Inject dependencies
  userSettingsServiceFactory.$inject = [options.storageServiceName];

  /**
   * Settings service constructor
   *
   * @param storage
   * @constructor
   */
  function SettingsService(storage){

    /**
     * Get value for key
     *
     * @param key
     * @returns {*}
     */
    this.get = function(key){
      return storage.getItem(key);
    };

    /**
     * Set value for key
     *
     * @param key
     * @param value
     */
    this.set = function(key, value){
      storage.setItem(key, value);
      return this;
    };

    /**
     * Set value for key to true
     *
     * @param key
     */
    this.enable = function(key){
      return this.set(key, true);
    };

    /**
     * Set value for key to false
     *
     * @param key
     */
    this.disable = function(key){
      return this.set(key, false);
    };

    /**
     * Return whether value for key is truthy
     *
     * @param key
     * @returns {boolean}
     */
    this.enabled = function(key){
      return !!this.get(key);
    };

    /**
     * Return whether value for key is falsy
     *
     * @param key
     * @returns {boolean}
     */
    this.disabled = function(key){
      return !this.enabled(key);
    };

  }



})(angular);

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
