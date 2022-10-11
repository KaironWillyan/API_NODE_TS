import * as express from 'express';
import database from './db';
import controller from './controller';
import bodyParser = require('body-parser');

class App{
    public app: express.Application;
    private database: database;
    private controller: controller;

    constructor(){
        this.app = express();
        this.middleware();
        this.database = new database;
        this.database.createConnection();
        this.controller = new controller();
        this.routes();
    }
    //para a função de insert e update funcionarem corretamente
    //faz a conversão do tudo que entra e do que sai em JSON
    middleware(){  
        this.app.use(bodyParser.json()); 
        this.app.use(bodyParser.urlencoded({ extended: true })); 
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