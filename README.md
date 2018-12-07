@mitchallen/uptime
==
Returns process uptime as a string
--

<p align="left">
  <a href="https://travis-ci.org/mitchallen/uptime">
    <img src="https://img.shields.io/travis/mitchallen/uptime.svg?style=flat-square" alt="Continuous Integration">
  </a>
  <a href="https://codecov.io/gh/mitchallen/uptime">
    <img src="https://codecov.io/gh/mitchallen/uptime/branch/master/graph/badge.svg" alt="Coverage Status">
  </a>
  <a href="https://npmjs.org/package/uptime">
    <img src="http://img.shields.io/npm/dt/uptime.svg?style=flat-square" alt="Downloads">
  </a>
  <a href="https://npmjs.org/package/uptime">
    <img src="http://img.shields.io/npm/v/uptime.svg?style=flat-square" alt="Version">
  </a>
  <a href="https://npmjs.com/package/uptime">
    <img src="https://img.shields.io/github/license/mitchallen/uptime.svg" alt="License"></a>
  </a>
</p>

## Installation

    $ npm init
    $ npm install @mitchallen/marchio-lambda-delete --save
  
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

* * *

## Version History

#### Version 0.0.1

* added toHHMMSS function to return uptime as a string in the form of HH:MM:SS
