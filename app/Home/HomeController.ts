import {Router, Request, Response, NextFunction} from 'express';

import ShowAction from './Actions/ShowAction';
import ShowPricesAction from './Actions/ShowPricesAction';

export class HomeController {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes;
    }

    public routes() {
        this.router.get('/', (req, res, next) => ShowAction.invoke(req, res, next));
        this.router.get('/tarifs', (req, res, next) => ShowPricesAction.invoke(req, res, next));
    }

}

const HomeRoutes = new HomeController();
HomeRoutes.routes();

export default HomeRoutes.router;