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
