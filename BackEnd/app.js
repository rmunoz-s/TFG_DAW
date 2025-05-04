import express from 'express';
import routeProductos from './routes/productoRoute.js';
import routeUsuarios from './routes/usuarioRoute.js';
import routeCarrito from './routes/carritoRoute.js';
import 'dotenv/config';


import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/productos', routeProductos);
app.use('/usuarios', routeUsuarios);
app.use('/carrito', routeCarrito);


try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log("Servidor Activo, puerto: " + PORT));
} catch (e) {
    console.log("error: "+e)
}