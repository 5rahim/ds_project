"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShowPricesAction = (function () {
    function ShowPricesAction() {
    }
    ShowPricesAction.prototype.invoke = function (req, res, next) {
        res.render('tarifs', { pageTitle: 'Tarifs' });
    };
    return ShowPricesAction;
}());
exports.ShowPricesAction = ShowPricesAction;
exports.default = new ShowPricesAction;
