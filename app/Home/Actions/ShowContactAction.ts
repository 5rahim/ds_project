import { Request, Response, NextFunction } from 'express';

export class ShowContactAction {

    public invoke(req: Request, res: Response, next: NextFunction) {

        res.render('contact', { pageTitle: 'Contact', errors: '', value: '' });

    }

}

export default new ShowContactAction;