"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShowContactAction = (function () {
    function ShowContactAction() {
    }
    ShowContactAction.prototype.invoke = function (req, res, next) {
        var serviceOptions = '<option value="ecm">Boutique en ligne</option>\
        <option value="snd">Réseau social</option>\
        <option value="wp">Portail web</option>\
        <option value="pb">Blog personnel</option>';
        var options = ['ecm', 'snd', 'wp', 'pb'];
        for (var i in options) {
            if (req.query.service) {
                if (req.query.service == i) {
                }
            }
        }
        res.render('contact', { pageTitle: 'Contact', serviceOptions: serviceOptions });
    };
    return ShowContactAction;
}());
exports.ShowContactAction = ShowContactAction;
exports.default = new ShowContactAction;
