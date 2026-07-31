@mitchallen/uptime
==
Returns process uptime as a string
--

<p align="left">
  <a href="https://github.com/mitchallen/uptime/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/mitchallen/uptime/ci.yml?branch=master" alt="CI">
  </a>
  <a href="https://codecov.io/gh/mitchallen/uptime">
    <img src="https://codecov.io/gh/mitchallen/uptime/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://github.com/mitchallen/uptime/pkgs/npm/uptime">
    <img src="https://img.shields.io/badge/GitHub%20Packages-uptime-blue" alt="GitHub Packages">
  </a>
  <a href="https://github.com/mitchallen/uptime/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green" alt="License">
  </a>

</p>

## Installation

This package publishes to __GitHub Packages__, not the public npm registry. Versions
__0.0.8__ and earlier remain on npmjs.org and are no longer updated there.

Add an `.npmrc` next to your `package.json`:

    @mitchallen:registry=https://npm.pkg.github.com

GitHub Packages requires authentication even for public packages, so you also need a
personal access token with the `read:packages` scope. Keep it in an environment
variable rather than committing it:

    //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}

Then:

    $ npm init
    $ npm install @mitchallen/uptime

* * *

## Testing

To test, go to the root folder and type (sans __$__):

    $ npm test
   
* * * 

<a name="module_uptime"></a>

## uptime
Module

<a name="module_uptime.toHHMMSS"></a>

### uptime.toHHMMSS() ⇒ <code>string</code>
Factory method

**Kind**: static method of <code>[uptime](#module_uptime)</code>  
**Returns**: <code>string</code> - that returns uptime as a string in the form of HH:MM:SS  
**Example** *(Usage example)*  
```js
    var uptime = require("@mitchallen/uptime");
 
    console.log(uptime.toHHMMSS())
```

* * *
 
## Repo(s)

* [github.com/mitchallen/uptime.git](https://github.com/mitchallen/uptime.git)

* * *

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

