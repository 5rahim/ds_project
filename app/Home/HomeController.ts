import {Router, Request, Response, NextFunction} from 'express';

import ShowAction from './Actions/ShowAction';
import ShowCompetencyAction from './Actions/ShowCompetencyAction';
import ShowContactAction from './Actions/ShowContactAction';
import SendAction from './Actions/SendAction';

export class HomeController {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes;
    }

    public routes() {
        this.router.get('/', (req, res, next) => ShowAction.invoke(req, res, next));
        this.router.get('/services', (req, res, next) => ShowCompetencyAction.invoke(req, res, next));
        this.router.get('/contact', (req, res, next) => ShowContactAction.invoke(req, res, next));
        this.router.post('/send', (req, res, next) => SendAction.invoke(req, res, next));
    }

}

const HomeRoutes = new HomeController();
HomeRoutes.routes();

export default HomeRoutes.router;