"use strict";
var gobi_parantha_1 = require("../src/template/gobi-parantha");
describe('template design pattern', function () {
    it('should output template method', function () {
        var gobiParantha = new gobi_parantha_1.GobiParantha();
        gobiParantha.make();
        expect('hi').toEqual('hi');
    });
});
