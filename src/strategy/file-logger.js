"use strict";
var FileLogger = (function () {
    function FileLogger() {
    }
    FileLogger.prototype.log = function (msg) {
        console.log('Logging to file : ' + msg);
    };
    return FileLogger;
}());
exports.FileLogger = FileLogger;
