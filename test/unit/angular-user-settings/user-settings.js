'use strict';

describe('angularUserSettings module', function() {

  var module;
  var dependencies;
  dependencies = [];

  var hasModule = function(module) {
  return dependencies.indexOf(module) >= 0;
  };

  beforeEach(function() {

  // Get module
  module = angular.module('angularUserSettings');
  dependencies = module.requires;
  });

  it('should load config module', function() {
    expect(hasModule('angularUserSettings.config')).to.be.ok;
  });

  it('should load directives module', function() {
    expect(hasModule('angularUserSettings.directives')).to.be.ok;
  });

  it('should load services module', function() {
    expect(hasModule('angularUserSettings.services')).to.be.ok;
  });

  it('should load controllers module', function() {
    expect(hasModule('angularUserSettings.controllers')).to.be.ok;
  });

});
