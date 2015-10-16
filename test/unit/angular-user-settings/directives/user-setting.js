'use strict';

describe('userSetting directive', function() {

  var $compile;
  var $rootScope;
  var $userSettings;

  beforeEach(module('angularUserSettings'));

  beforeEach(inject(function(_$rootScope_, _$compile_, _$userSettings_){
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $userSettings = _$userSettings_;
  }));

  it('should show items correctly', function() {
    $userSettings.set('test', 'dummy content');
    var markup = '<div user-setting="test">';
    markup += '<h1>{{ $userSetting.get() }}</h1>';
    markup += '</div>';
    var $scope = $rootScope.$new();
    var element = $compile(markup)($scope);
    $rootScope.$digest();
    expect(element.html()).to.contain('dummy content');
  });

});
