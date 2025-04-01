import {MongoClient} from "mongodb";
import 'dotenv/config';

class dbClient {
    constructor(){
        //Recordar de cambiar el user y psswd por una variable 
        //que se denominara en el archivo .env que se encuentra en 
        //la carpeta principal, el enlace de aqui ya no sirve por lo mismo
        const queryString = 'mongodb+srv://smartFlora:KX7XAf9L6ahDgJAx@cluster0.xvhmbng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
        this.client = new MongoClient(queryString);
        this.conectarBD();
    }

    async conectarBD(){
        try {
            await this.client.connect();
            this.db = this.client.db('smartFlora');
            console.log("Conectado al servidor de base de datos");
        } catch (e) {
            console.log(e);
        }
    }
}

export default new dbClient;