"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShowContactAction = (function () {
    function ShowContactAction() {
    }
    ShowContactAction.prototype.invoke = function (req, res, next) {
        res.render('contact', { pageTitle: 'Contact', errors: '', value: '' });
    };
    return ShowContactAction;
}());
exports.ShowContactAction = ShowContactAction;
exports.default = new ShowContactAction;
