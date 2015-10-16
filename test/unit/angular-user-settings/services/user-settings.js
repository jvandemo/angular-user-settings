'use strict';

describe('$userSettings service', function() {

  var $userSettingsProvider;
  var $userSettings;
  var customProviderOptions = {};

  beforeEach(function(){

    // Define a fake module so we can configure the provider
    // before injecting the service
    var fakeModule = angular.module('fakeModule', []);

    fakeModule.config(function (_$userSettingsProvider_) {
      $userSettingsProvider = _$userSettingsProvider_;
      $userSettingsProvider.setOptions(customProviderOptions);
    });

    // Load the module
    module('angularUserSettings', 'fakeModule');
  });

  beforeEach(inject(function(_$userSettings_){
    $userSettings = _$userSettings_;
  }));

  it('should exist', function() {
    expect($userSettings).to.be.an('object');
  });

  describe('#get(key)', function(){

    it('should return correct value for key', function(){
      var key = 'test';
      var stringValue = 'some string';
      var objectValue = { test: 'content' };
      $userSettings.set(key, false);
      expect($userSettings.get(key)).to.equal(false);
      $userSettings.set(key, true);
      expect($userSettings.get(key)).to.equal(true);
      $userSettings.set(key, stringValue);
      expect($userSettings.get(key)).to.equal(stringValue);
      $userSettings.set(key, objectValue);
      expect($userSettings.get(key)).to.deep.equal(objectValue);
    });

  });

});
