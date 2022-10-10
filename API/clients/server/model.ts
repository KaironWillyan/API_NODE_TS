import * as mongoose from 'mongoose';

const ClienteSchema = new mongoose.Schema({
    nome: {type: String, required: true}, 
    telefone: {type: String, unique: true, required: true}, 
    email: {type: String, unique: true, required: true}, 
    observacoes: {type: String, required: true}, 
    createdAt: {type: Date, default: Date.now} 
})

export default mongoose.model(Clientes, ClienteSchema);