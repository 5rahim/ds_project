"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SendAction = (function () {
    function SendAction() {
    }
    SendAction.prototype.invoke = function (req, res, next) {
        if (req.body.lastname == '' || req.body.firstname == '' || req.body.email == '' || req.body.phonenumber == '' || req.body.description == '' || req.body.features == '') {
            res.location('back');
        }
        else {
        }
    };
    return SendAction;
}());
exports.SendAction = SendAction;
exports.default = new SendAction;
