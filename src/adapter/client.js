"use strict";
var Client = (function () {
    function Client() {
    }
    Client.prototype.read = function (book) {
        book.turnPage();
    };
    return Client;
}());
exports.Client = Client;
