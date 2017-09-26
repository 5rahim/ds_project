import { Request, Response, NextFunction } from 'express';

export class ShowCompetencyAction {

    public invoke(req: Request, res: Response, next: NextFunction) {
        res.render('competency', { pageTitle: 'Expertise' });
    }

}

export default new ShowCompetencyAction;