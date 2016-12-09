"use strict";
var eBookReaderAdapter_1 = require("../src/adapter/eBookReaderAdapter");
var client_1 = require("../src/adapter/client");
var eBookReader_1 = require("../src/adapter/eBookReader");
describe('adapter', function () {
    it('should act as adapter', function () {
        (new client_1.Client).read(new eBookReaderAdapter_1.eBookReaderAdapter(new eBookReader_1.eBookReader));
    });
});
