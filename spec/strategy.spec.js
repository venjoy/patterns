"use strict";
var app_1 = require("../src/strategy/app");
var db_logger_1 = require("../src/strategy/db-logger");
describe('strategy', function () {
    it('should log to database', function () {
        var app = new app_1.App();
        app.log('app', new db_logger_1.DbLogger);
    });
});
