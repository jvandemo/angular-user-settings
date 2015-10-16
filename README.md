# Angular Settings

[![Build Status](https://travis-ci.org/jvandemo/angular-user-settings.png?branch=master)](https://travis-ci.org/jvandemo/angular-user-settings)

Easily manage persistent user settings in your AngularJS application:

- very lightweight (~2KB)
- settings are automatically persisted across browser sessions using local storage
- easily access user settings from your script using the `$userSettings` service
- easily access user settings from your views using `user-settings` and `user-setting` attributes

## Usage

First install the module using bower:
 
```bash
$ bower install angular-user-settings
```

and add the library to your application:

```xml
<script src="angular-user-settings.min.js"></script>
```

Then add the `angularUserSettings` module to the dependencies of your AngularJS application module:

```javascript
angular.module('yourApp', ['angularUserSettings']);
```

Now you can access the user's settings using the `$userSettings` service in script:

```javascript
ngModule.controller('YourController', function($userSettings){
  
});
```

To keep the markup as DRY as possible, there is a `user-setting` attribute available to grab an individual setting and expose it using `$userSetting` to the child elements:

```xml
<!-- grab a handle to a setting with key "debug-mode" -->
<section user-setting="debug-mode">

  <!-- if the setting is enabled -->
  <div ng-if="$userSetting.enabled">
    <p>Debug mode is enabled<p>
    <a href="$userSetting.disable()">Disable debug mode</a>
  </div>
  
  <!-- if the setting is disabled -->
  <div ng-if="$userSetting.disabled">
    <p>Debug mode is enabled<p>
    <a href="$userSetting.enable()">Enable debug mode</a>
  </div>
  
</section>
```

## The $userSettings service

The following methods are available on the `$userSettings` service:

### $userSettings.get(key)

Get setting for key.

##### Arguments

None.

##### Returns

Any.

### $userSettings.set(key, value)

Set value for key.

##### Arguments

None.

##### Returns

`$userSettings`

### $userSettings.enable(key)

Set value for key to true.

##### Arguments

None.

##### Returns

`$userSettings`

### $userSettings.disable(key)

Set value for key to false.

##### Arguments

None.

##### Returns

`$userSettings`

### $userSettings.enabled(key)

Check if setting is truthy or not.

##### Arguments

None.

##### Returns

boolean.

### $userSettings.disabled(key)

Check if setting is falsy or not.

##### Arguments

None.

##### Returns

boolean.

## Contribute

To update the build in the `dist` directory:

```bash
$ gulp
```

To run the unit tests using the src files:

```bash
$ gulp test-src
```

To run the unit tests using the unminified library:

```bash
$ gulp test-dist-concatenated
```

To run the unit tests using the minified library:

```bash
$ gulp test-dist-minified
```

## Change log

### v0.1.0

- Added $userSettings service
- Added storage service
- Added setting directive
- Added unit tests
- Added initial documentation
