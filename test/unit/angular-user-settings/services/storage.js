'use strict';

describe('angularUserSettings.storage service', function() {

  var storage;

  beforeEach(module('angularUserSettings'));

  beforeEach(inject(function(_$injector_){
    storage = _$injector_.get('angularUserSettings.storage');
  }));

  it('should exist', function() {
    expect(storage).to.be.an('object');
  });

});
