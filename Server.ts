///<reference path="node_modules/@types/ejs/index.d.ts"/>
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as logger from 'morgan';
import * as helmet from 'helmet';
import * as cors from 'cors';
import * as path from 'path';
import * as expressValidator from 'express-validator';
import * as sassMiddleware from 'node-sass-middleware';

// Core/App
import DB from "./core/DataAccess";
import View from "./core/View";
import Routes from "./app/Routes";

// Process ENV
process.env.BASE = __dirname + '/';

class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    public config(): any {

        // MySQL Database initialization
        DB.initialize();

        // View initialization
        View.initialize(this.app, path);

        // Middleware
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(expressValidator());
        this.app.use(sassMiddleware({
            src: path.join(__dirname, 'assets'),
            dest: path.join(__dirname, 'assets'),
            indentedSyntax: false, // true = .sass and false = .scss
            sourceMap: true
        }));
        this.app.use(express.static(path.join(__dirname, 'assets')));
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());


        // Cors
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'http://localhost:4000');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });

    }

    public routes(): void {

        // All Routes
        Routes.initialize(this.app);

    }

}

export default new Server().app;