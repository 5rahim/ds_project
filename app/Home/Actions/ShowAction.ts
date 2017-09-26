import { Request, Response, NextFunction } from 'express';

export class ShowAction {

    public invoke(req: Request, res: Response, next: NextFunction) {
        res.render('home', { pageTitle: 'Agence de création de sites mordernes' });
    }

}

export default new ShowAction;