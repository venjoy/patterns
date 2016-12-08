"use strict";
var BasicService = (function () {
    function BasicService() {
    }
    BasicService.prototype["do"] = function () {
        return 'basic service';
    };
    BasicService.prototype.cost = function () {
        return 15;
    };
    return BasicService;
}());
exports.BasicService = BasicService;
