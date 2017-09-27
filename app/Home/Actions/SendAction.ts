import { Request, Response, NextFunction } from 'express';
import * as nodemailer from 'nodemailer';

export class SendAction {

    public invoke(req: Request, res: Response, next: NextFunction) {

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'digitalstack.contact@gmail.com',
                pass: 'chevraux15'
            }
        });

        req.checkBody('lastname', 'Prénom vide').notEmpty();
        req.checkBody('firstname', 'Nom vide').notEmpty();
        req.checkBody('email', 'Adresse mail vide').notEmpty();
        req.checkBody('phonenumber', 'Numéro de téléphone vide').notEmpty();
        req.checkBody('description', 'Champs description vide').notEmpty();
        req.checkBody('features', ' Champs fonctionnalités vide').notEmpty();
        req.checkBody('lastname', 'Prénom invalide').isAlpha();
        req.checkBody('firstname', 'Nom invalide').isAlpha();
        req.checkBody('email', 'Adresse mail invalide').isEmail();
        req.checkBody('phonenumber', 'Numéro de téléphone invalide').isInt();

        let errors = req.validationErrors();

        if(errors) {

            res.render('contact', { pageTitle: 'Contact', errors: errors, value: req.body });

        } else {

            let mailOptions = {
                from: req.body.email,
                to: 'digitalstack.contact@gmail.com',
                subject: '[DigitalStack] Message de '+ req.body.firstname + ' ' + req.body.lastname,
                html: '<html>' +
                '<body>' +
                ' <div>'+ req.body.email +'</div> ' +
                '<br>' +
                ' <div>'+ req.body.phonenumber +'</div> ' +
                '<br>' +
                ' <div>'+ req.body.service +'</div> ' +
                '<br>' +
                ' <div>'+ req.body.description +'</div> ' +
                '<br>' +
                ' <div>'+ req.body.features +'</div> ' +
                '</body>' +
                '</html>'
            };

            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                    console.log(error);
                } else {
                    res.redirect('/');
                }
            });

        }

    }

}

export default new SendAction;