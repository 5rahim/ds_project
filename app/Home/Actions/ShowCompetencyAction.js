"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ShowCompetencyAction = (function () {
    function ShowCompetencyAction() {
    }
    ShowCompetencyAction.prototype.invoke = function (req, res, next) {
        res.render('competency', { pageTitle: 'Expertise' });
    };
    return ShowCompetencyAction;
}());
exports.ShowCompetencyAction = ShowCompetencyAction;
exports.default = new ShowCompetencyAction;
