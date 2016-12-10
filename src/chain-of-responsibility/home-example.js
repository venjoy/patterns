"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var HomeStatus = (function () {
    function HomeStatus() {
        this.locked = false;
        this.lightsOff = true;
        this.alarmOn = true;
    }
    return HomeStatus;
}());
exports.HomeStatus = HomeStatus;
var HomeSecurity = (function () {
    function HomeSecurity() {
    }
    HomeSecurity.prototype.succeedWith = function (successor) {
        this.successor = successor;
    };
    HomeSecurity.prototype.next = function (status) {
        if (this.successor) {
            this.successor.check(status);
        }
    };
    return HomeSecurity;
}());
exports.HomeSecurity = HomeSecurity;
var LockSecurity = (function (_super) {
    __extends(LockSecurity, _super);
    function LockSecurity() {
        return _super.apply(this, arguments) || this;
    }
    LockSecurity.prototype.check = function (status) {
        if (!status.locked) {
            console.log('alert door not locked exit now');
            process.exit();
        }
        this.next(status);
    };
    return LockSecurity;
}(HomeSecurity));
exports.LockSecurity = LockSecurity;
var LightSecurity = (function (_super) {
    __extends(LightSecurity, _super);
    function LightSecurity() {
        return _super.apply(this, arguments) || this;
    }
    LightSecurity.prototype.check = function (status) {
        if (!status.lightsOff) {
            console.log('alert light not off exit now');
            process.exit();
        }
        this.next(status);
    };
    return LightSecurity;
}(HomeSecurity));
exports.LightSecurity = LightSecurity;
var AlarmSecurity = (function (_super) {
    __extends(AlarmSecurity, _super);
    function AlarmSecurity() {
        return _super.apply(this, arguments) || this;
    }
    AlarmSecurity.prototype.check = function (status) {
        if (!status.alarmOn) {
            console.log('alert alarm not on exit now');
            process.exit();
        }
    };
    return AlarmSecurity;
}(HomeSecurity));
exports.AlarmSecurity = AlarmSecurity;
