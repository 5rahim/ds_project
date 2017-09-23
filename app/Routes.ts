import { Router } from 'express';

import HomeController from "./Home/HomeController";

export class Routes {

    public initialize(app) {

        let router: Router;
        router = Router();

        // Routes
        app.use('/', HomeController);

    }

}

function isAuth(req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}

export default new Routes;