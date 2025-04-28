import productoModel from '../models/productoModel.js';
class productosController{
    constructor(){

    }

    async create(req, res){
        const{name, description, price, stock } = req.body;
        try {
            const data = await productoModel.create({ name, description, price, stock});
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
    async update(req, res){
        const{name, description, price, stock } = req.body;
        try {
            const {id} = req.params;
            const data =await productoModel.update(id, {name, description, price, stock});
            res.status(200).json(data);

        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }
    }
    async delete(req, res){
        try {
            const {id} = req.params;
            const data = await productoModel.delete(id);
            res.status(206).json(data);

        } catch (e) {
            res.status(500).send(e);
        }
    }
    async getAll(req, res){
        try {
            const data = await productoModel.getAll();
            res.status(201).json(data);

        } catch (e) {
            res.status(500).send(e);
        }
    }

    async getOne(req, res){
        try {
            const {id} = req.params;
            const data = await productoModel.getOne(id);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }
}

export default new productosController();