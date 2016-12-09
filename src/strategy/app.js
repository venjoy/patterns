"use strict";
var App = (function () {
    function App() {
    }
    App.prototype.log = function (msg, logger) {
        logger.log(msg);
    };
    return App;
}());
exports.App = App;
