"use strict";
var DbLogger = (function () {
    function DbLogger() {
    }
    DbLogger.prototype.log = function (msg) {
        console.log('logging to database : ' + msg);
    };
    return DbLogger;
}());
exports.DbLogger = DbLogger;
