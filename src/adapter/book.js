"use strict";
var Book = (function () {
    function Book() {
    }
    Book.prototype.turnPage = function () {
        console.log('turning book page');
    };
    return Book;
}());
exports.Book = Book;
