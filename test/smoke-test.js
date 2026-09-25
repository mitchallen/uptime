/**
    Module: uptime
      Test: smoke-test
    Author: Mitch Allen
*/

"use strict";

var chai = require('chai');

var expect = require('chai').expect

chai.use(require('chai-match'))

const modulePath = "../src/index";

describe('deployment smoke test', () => {

    var _factory = null;

    const realUptime = process.uptime;

    beforeEach(done => {
        delete require.cache[require.resolve(modulePath)];
        _factory = require(modulePath)
        done();
    });

    afterEach(done => {
        process.uptime = realUptime;
        done();
    });

    it('toHHMMSS should return uptime as HH:MM:SS', done => {
        var result = _factory.toHHMMSS();
        expect(result).to.match(/^[0-9][0-9]:[0-9][0-9]:[0-9][0-9]$/)
        done();
    });

    it('toHHMMSS should zero-pad single-digit values', done => {
        process.uptime = () => 3661.5; // 1h 1m 1.5s
        expect(_factory.toHHMMSS()).to.equal('01:01:01');
        done();
    });

    it('toHHMMSS should not pad two-digit values', done => {
        process.uptime = () => 12 * 3600 + 34 * 60 + 56;
        expect(_factory.toHHMMSS()).to.equal('12:34:56');
        done();
    });

    it('toHHMMSS should return 00:00:00 at zero uptime', done => {
        process.uptime = () => 0;
        expect(_factory.toHHMMSS()).to.equal('00:00:00');
        done();
    });
});
