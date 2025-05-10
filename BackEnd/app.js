import express from 'express';
import routeProductos from './routes/productoRoute.js';
import routeUsuarios from './routes/usuarioRoute.js';
import routeCarrito from './routes/carritoRoute.js';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';

const app = express();

app.use(cors({
    origin: "http://localhost:5173" 
  }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/productos', routeProductos);
app.use('/usuarios', routeUsuarios);
app.use('/carrito', routeCarrito);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log("Servidor Activo, puerto: " + PORT));
} catch (e) {
    console.log("error: " + e);
}