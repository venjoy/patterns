"use strict";
var Parantha = (function () {
    function Parantha() {
    }
    Parantha.prototype.kneadDough = function () {
        console.log('kneading dough');
        return this;
    };
    Parantha.prototype.stuff = function () {
        console.log('stuffing Parantha');
        return this;
    };
    Parantha.prototype.fry = function () {
        console.log('frying');
        return this;
    };
    Parantha.prototype.serve = function () {
        console.log('serveing');
        return this;
    };
    Parantha.prototype.make = function () {
        this.kneadDough().makeStuffing().stuff().fry().serve();
    };
    return Parantha;
}());
exports.Parantha = Parantha;
