'use strict';

describe('UserSettingController', function() {

  var $controller;
  var ctrl;

  beforeEach(module('angularUserSettings'));

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    ctrl = $controller('angularUserSettings.UserSettingController', {
      $attrs: {}
    });
  }));

  it('should exist', function() {
    expect(ctrl).to.be.an('object');
  });

  describe('#get', function(){
    it('should be a function', function() {
      expect(ctrl.get).to.be.a('function');
    });
  });

  describe('#set', function(){
    it('should be a function', function() {
      expect(ctrl.set).to.be.a('function');
    });
  });

  describe('#enable', function(){
    it('should be a function', function() {
      expect(ctrl.enable).to.be.a('function');
    });
  });

  describe('#disable', function(){
    it('should be a function', function() {
      expect(ctrl.disable).to.be.a('function');
    });
  });

  describe('#enabled', function(){
    it('should be a function', function() {
      expect(ctrl.enabled).to.be.a('function');
    });
  });

  describe('#disabled', function(){
    it('should be a function', function() {
      expect(ctrl.disabled).to.be.a('function');
    });
  });

});
