/**
    Module: uptime
      Test: smoke-test
    Author: Mitch Allen
*/

"use strict";

const { describe, it, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert/strict');

const modulePath = "../src/index";

describe('deployment smoke test', () => {

    var _factory = null;

    const realUptime = process.uptime;

    beforeEach(() => {
        delete require.cache[require.resolve(modulePath)];
        _factory = require(modulePath)
    });

    afterEach(() => {
        process.uptime = realUptime;
    });

    it('toHHMMSS should return uptime as HH:MM:SS', () => {
        assert.match(_factory.toHHMMSS(), /^[0-9][0-9]:[0-9][0-9]:[0-9][0-9]$/);
    });

    it('toHHMMSS should zero-pad single-digit values', () => {
        process.uptime = () => 3661.5; // 1h 1m 1.5s
        assert.equal(_factory.toHHMMSS(), '01:01:01');
    });

    it('toHHMMSS should not pad two-digit values', () => {
        process.uptime = () => 12 * 3600 + 34 * 60 + 56;
        assert.equal(_factory.toHHMMSS(), '12:34:56');
    });

    it('toHHMMSS should return 00:00:00 at zero uptime', () => {
        process.uptime = () => 0;
        assert.equal(_factory.toHHMMSS(), '00:00:00');
    });
});
