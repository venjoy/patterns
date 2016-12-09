"use strict";
var eBookReader = (function () {
    function eBookReader() {
    }
    eBookReader.prototype.clickNext = function () {
        console.log('turning next page');
    };
    return eBookReader;
}());
exports.eBookReader = eBookReader;
