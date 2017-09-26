import { Request, Response, NextFunction } from 'express';

export class ShowContactAction {

    public invoke(req: Request, res: Response, next: NextFunction) {

        let serviceOptions = '<option value="ecm">Boutique en ligne</option>\
        <option value="snd">Réseau social</option>\
        <option value="wp">Portail web</option>\
        <option value="pb">Blog personnel</option>';

        let options: string[] = ['ecm','snd','wp','pb'];

        for(var i in options) {

            if(req.query.service) {
                if(req.query.service == i) {

                }
            }

        }

        res.render('contact', { pageTitle: 'Contact', serviceOptions: serviceOptions });

    }

}

export default new ShowContactAction;