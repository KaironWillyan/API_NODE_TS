import * as mongoose from 'mongoose';

class DataBase{
    private DB_URI = 'mongodb://127.0.0.1/clients';
    private DB_CONNECTION;

    constructor(){}

    createConnection(){
        mongoose.connect(this.DB_URI);
        this.logger(this.DB_URI);
    }

    closeConnection(message, callback){
        this.DB_CONNECTION.close(()=>{
            console.log(`Mongoose foi desconectado pelo: ${message}`);
            callback();
        })
    }

    logger(uri){
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on('connected', ()=> console.log("Mongoose está conectado"));
        this.DB_CONNECTION.on('error', error => console.error.bind(console, `Erro na conexão: ${error}`));
        this.DB_CONNECTION.on('disconected', ()=>console.log("Mongoose está desconectado"));
    }
}

export default DataBase;