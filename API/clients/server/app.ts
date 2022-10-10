import * as express from 'express';
import DataBase from './db';
import Controller from './controller';

class App{
    public app: express.Application;
    private database: DataBase;
    private controller: Controller;

    constructor(){
        this.app = express();
        this.routes();
        this.database = new DataBase;
        this.database.createConnection();
        this.controller = new Controller();
    }

    routes(){
        this.app.route("/api/clientes").get( (req,res)=> this.controller.select(req, res) ); 
        this.app.route("/api/clientes/:id").get( (req,res)=> this.controller.selectOne(req, res) ); 
        this.app.route("/api/clientes/:id").delete( (req,res)=> this.controller.delete(req, res) ); 
        this.app.route("/api/clientes/:id").put( (req,res)=> this.controller.update(req, res) ); 
        this.app.route("/api/clientes").post( (req,res)=> this.controller.insert(req, res) ); 
    }
}
export default new App();