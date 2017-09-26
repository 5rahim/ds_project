import { Request, Response, NextFunction } from 'express';
import * as nodemailer from 'nodemailer';

export class SendAction {

    public invoke(req: Request, res: Response, next: NextFunction) {

        if(req.body.lastname == '' || req.body.firstname == '' || req.body.email == '' || req.body.phonenumber == '' || req.body.description == '' || req.body.features == '') {
            res.location('back');
        } else {

        }

    }

}

export default new SendAction;