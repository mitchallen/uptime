/**
    Module: uptime
      Test: smoke-test
    Author: Mitch Allen
*/

/*jshint node: true */
/*jshint mocha: true */
/*jshint esversion: 6 */

"use strict";

var chai = require('chai');

var expect = require('chai').expect

chai.use(require('chai-match'))

const modulePath = "../src/index";

describe('deployment smoke test', () => {

    var _factory = null;

    before(done => {
        done();
    });

    after(done => {
        // Call after all tests
        done();
    });

    beforeEach(done => {
        // Call before all tests
        delete require.cache[require.resolve(modulePath)];
        _factory = require(modulePath)
        done();
    });

    afterEach(done => {
        // Call after each test
        done();
    });

    it('toHHMMSS should return uptime as HH:MM:SS', done => {
        var result = _factory.toHHMMSS();
        // console.log(result);
        expect(result).to.match(/[0-9][0-9]:[0-9][0-9]:[0-9][0-9]/)
        done();
    });
});