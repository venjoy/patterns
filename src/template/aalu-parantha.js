"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var parantha_1 = require("./parantha");
var AaluParantha = (function (_super) {
    __extends(AaluParantha, _super);
    function AaluParantha() {
        return _super.apply(this, arguments) || this;
    }
    AaluParantha.prototype.makeStuffing = function () {
        console.log('adding aalu');
        return this;
    };
    return AaluParantha;
}(parantha_1.Parantha));
exports.AaluParantha = AaluParantha;
