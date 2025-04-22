import {MongoClient} from "mongodb";
import 'dotenv/config';
import mongoose from "mongoose";

class dbClient {
    constructor(){
        this.conectarBD();
    }

    async conectarBD(){
        //usuario, clave y server en .env
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PSS_DB}@${process.env.SERVER_DB}/smartFlora?retryWrites=true&w=majority&appName=Cluster0`; 
        await mongoose.connect(queryString);
    }

    // async conectarBD(){
    //     try {
    //         await this.client.connect();
    //         this.db = this.client.db('smartFlora');
    //         console.log("Conectado al servidor de base de datos");
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
    async cerrarConexion(){
        try {
            await mongoose.disconnect();
            console.log("conexion cerrada");
        } catch (error) {
            console.log(e);
        }
    }
}

export default new dbClient();