"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShowAction = (function () {
    function ShowAction() {
    }
    ShowAction.prototype.invoke = function (req, res, next) {
        res.render('home', { pageTitle: 'Bienvenue' });
    };
    return ShowAction;
}());
exports.ShowAction = ShowAction;
exports.default = new ShowAction;
