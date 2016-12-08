"use strict";
var OilService = (function () {
    function OilService(service) {
        this.service = service;
    }
    OilService.prototype["do"] = function () {
        return this.service["do"]() + ' ' + ' oiling';
    };
    OilService.prototype.cost = function () {
        return this.service.cost() + 30;
    };
    return OilService;
}());
exports.OilService = OilService;
