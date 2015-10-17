# Angular User Settings

[![Build Status](https://travis-ci.org/jvandemo/angular-user-settings.png?branch=master)](https://travis-ci.org/jvandemo/angular-user-settings)

Easily manage persistent user-specific settings in your AngularJS application:

- very lightweight (~2KB)
- no external dependencies
- no database or backend required
- works out-of-the-box, no configuration required
- settings are automatically persisted across browser sessions using localStorage
- gracefully falls back to non-persistent settings when [localStorage is not available](http://caniuse.com/#search=localstorage)

From both your scripts and views!

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
  
  $userSettings.set('foo', true);
  $userSettings.get('foo'); // => true
  
  $userSettings.set('foo', 'bar');
  $userSettings.get('foo'); // => 'bar'
  
  $userSettings.set('foo', { foo: 'bar' });
  $userSettings.get('foo'); // => { foo: 'bar' }
  
});
```

or using the `user-settings` directive in your views:

```xml
<!-- adding the user-settings attribute to an element -->
<!-- conveniently exposes the $userSettings service in your view -->
<section user-settings>

  <a ng-click="$userSettings.set('foo', 'bar')">Set foo to bar</a>
  
  <p>Foo: {{ $userSettings.get('foo') }}</p>
  
</section>
```

To keep the markup as DRY as possible, there is a `user-setting` attribute available to grab an individual setting and expose it using `$userSetting` to the child elements:

```xml
<!-- instead of exposing all settings, we grab an individual setting -->
<!-- that is exposed as $userSetting -->
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

- **key** - {string} - key to identify setting, required

##### Returns

{any} - setting value

### $userSettings.set(key, value)

Set value for key.

##### Arguments

- **key** - {string} - key to identify setting, required
- **value** - {any} - value to assign to setting, required

##### Returns

`$userSettings`

### $userSettings.enable(key)

Set value for key to true.

##### Arguments

- **key** - {string} - key to identify setting, required

##### Returns

`$userSettings`

### $userSettings.disable(key)

Set value for key to false.

##### Arguments

- **key** - {string} - key to identify setting, required

##### Returns

`$userSettings`

### $userSettings.enabled(key)

Check if setting is truthy or not.

##### Arguments

- **key** - {string} - key to identify setting, required

##### Returns

Boolean

### $userSettings.disabled(key)

Check if setting is falsy or not.

##### Arguments

- **key** - {string} - key to identify setting, required

##### Returns

Boolean

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

### v0.2.0

- Added $userSetting directive
- Added unit tests
- Added initial documentation

### v0.1.0

- Added $userSettings service
- Added storage service
- Added userSettings directive
- Added unit tests
- Added initial documentation
