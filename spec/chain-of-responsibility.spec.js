"use strict";
var l = require("../src/chain-of-responsibility/home-example");
describe('chain of responsibility', function () {
    it('should send responsibility up the chain', function () {
        var status = new l.HomeStatus, lock = new l.LockSecurity, light = new l.LightSecurity, alarm = new l.AlarmSecurity;
        lock.succeedWith(light);
        light.succeedWith(alarm);
        lock.check(status);
    });
});
