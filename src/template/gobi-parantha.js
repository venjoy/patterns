"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var parantha_1 = require("./parantha");
var GobiParantha = (function (_super) {
    __extends(GobiParantha, _super);
    function GobiParantha() {
        return _super.apply(this, arguments) || this;
    }
    GobiParantha.prototype.makeStuffing = function () {
        console.log('adding gobi');
        return this;
    };
    return GobiParantha;
}(parantha_1.Parantha));
exports.GobiParantha = GobiParantha;
