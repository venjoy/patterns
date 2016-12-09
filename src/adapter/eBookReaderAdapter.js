"use strict";
var eBookReaderAdapter = (function () {
    function eBookReaderAdapter(eBookReader) {
        this.eBookReader = eBookReader;
    }
    eBookReaderAdapter.prototype.turnPage = function () {
        this.eBookReader.clickNext();
    };
    return eBookReaderAdapter;
}());
exports.eBookReaderAdapter = eBookReaderAdapter;
