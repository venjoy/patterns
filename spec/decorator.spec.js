"use strict";
var basic_service_1 = require("../src/decorator/basic-service");
var oil_service_1 = require("../src/decorator/oil-service");
describe('decorator', function () {
    it('should display correct cost', function () {
        var oilService = new oil_service_1.OilService(new basic_service_1.BasicService);
        console.log(oilService["do"]());
        expect(oilService.cost()).toEqual(45);
    });
});
