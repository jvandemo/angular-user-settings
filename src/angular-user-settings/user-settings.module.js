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
