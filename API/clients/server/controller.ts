import model from "./model";

class Controller{
    constructor(){};
    //select
    getClientes(){
        return model.find({});
    }
    select(req,res){
        this.getClientes()
        .then(clientes=> res.status(200).json({'result': clientes}))
        .catch(err => res.status(400).json({'result': err}));
    }
    //selectOne
    getClientByID(id){
        return model.find(id);
    }
    selectOne(req, res){
        const id = {_id: req.params.id}
        this.getClientByID(id)
        .then(clientes=> res.status(200).json({'result': clientes}))
        .catch(err => res.status(400).json({'result': err}));
    }
    //delete
    deleteByID(id){
        return model.deleteOne(id);
    }
    delete(req, res){
        const id = {_id: req.params.id}
        this.deleteByID(id)
        .then(clientes=> res.status(200).json({'result': clientes}))
        .catch(err => res.status(400).json({'result': err}));
    }
    //update
    updateClient(id, data){
        return model.findByIdAndUpdate(id, data);
    }
    update(req, res){
        const id = {_id: res.params.id}
        const cliente = req.body;
        this.updateClient(id, cliente)
        .then(clientes=> res.status(200).json({'result': clientes}))
        .catch(err => res.status(400).json({'result': err}));
    }
    //insert
    createCliente(data){
        return model.create(data);
    }
    insert(req,res){
        const cliente = req.body;
        this.createCliente(cliente)
        .then(clientes=> res.status(200).json({'result': clientes}))
        .catch(err => res.status(400).json({'result': err}));
    }
}

export default Controller;