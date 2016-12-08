"use strict";
var TyreService = (function () {
    function TyreService(service) {
        this.service = service;
    }
    TyreService.prototype["do"] = function () {
        return this.service["do"]() + ' ' + ' tyring';
    };
    TyreService.prototype.cost = function () {
        return this.service.cost() + 40;
    };
    return TyreService;
}());
exports.TyreService = TyreService;
