"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ShowAction_1 = require("./Actions/ShowAction");
var ShowCompetencyAction_1 = require("./Actions/ShowCompetencyAction");
var ShowContactAction_1 = require("./Actions/ShowContactAction");
var SendAction_1 = require("./Actions/SendAction");
var HomeController = (function () {
    function HomeController() {
        this.router = express_1.Router();
        this.routes;
    }
    HomeController.prototype.routes = function () {
        this.router.get('/', function (req, res, next) { return ShowAction_1.default.invoke(req, res, next); });
        this.router.get('/services', function (req, res, next) { return ShowCompetencyAction_1.default.invoke(req, res, next); });
        this.router.get('/contact', function (req, res, next) { return ShowContactAction_1.default.invoke(req, res, next); });
        this.router.post('/contact', function (req, res, next) { return SendAction_1.default.invoke(req, res, next); });
    };
    return HomeController;
}());
exports.HomeController = HomeController;
var HomeRoutes = new HomeController();
HomeRoutes.routes();
exports.default = HomeRoutes.router;
