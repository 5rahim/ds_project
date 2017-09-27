"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nodemailer = require("nodemailer");
var SendAction = (function () {
    function SendAction() {
    }
    SendAction.prototype.invoke = function (req, res, next) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'digitalstack.contact@gmail.com',
                pass: 'chevraux14'
            }
        });
        req.checkBody('lastname', 'Prénom vide').notEmpty();
        req.checkBody('firstname', 'Nom vide').notEmpty();
        req.checkBody('email', 'Adresse mail vide').notEmpty();
        req.checkBody('phonenumber', 'Numéro de téléphone vide').notEmpty();
        req.checkBody('description', 'Champs description vide').notEmpty();
        req.checkBody('features', ' Champs fonctionnalités vide').notEmpty();
        req.checkBody('email', 'Adresse mail invalide').isEmail();
        req.checkBody('phonenumber', 'Numéro de téléphone invalide').isInt();
        var errors = req.validationErrors();
        if (errors) {
            res.render('contact', { pageTitle: 'Contact', errors: errors, value: req.body });
        }
        else {
            var mailOptions = {
                from: req.body.email,
                to: 'digitalstack.contact@gmail.com',
                subject: '[DigitalStack] Message de ' + req.body.firstname + ' ' + req.body.lastname,
                html: '<html>' +
                    '<body>' +
                    ' <div>' + req.body.email + '</div> ' +
                    '<br>' +
                    ' <div>' + req.body.phonenumber + '</div> ' +
                    '<br>' +
                    ' <div>' + req.body.service + '</div> ' +
                    '<br>' +
                    ' <div>' + req.body.description + '</div> ' +
                    '<br>' +
                    ' <div>' + req.body.features + '</div> ' +
                    '</body>' +
                    '</html>'
            };
            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                }
                else {
                    res.redirect('/');
                }
            });
        }
    };
    return SendAction;
}());
exports.SendAction = SendAction;
exports.default = new SendAction;
