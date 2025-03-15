import express from 'express';
import routeProductos from './routes/productos.js';
const app = express();

app.use('/productos', routeProductos);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log("Servidor Activo, puerto: " + PORT));
} catch (e) {
    console.log("error: "+e)
}