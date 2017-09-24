import { Request, Response, NextFunction } from 'express';

export class ShowPricesAction {

    public invoke(req: Request, res: Response, next: NextFunction) {
        res.render('tarifs', { pageTitle: 'Tarifs' });
    }

}

export default new ShowPricesAction;