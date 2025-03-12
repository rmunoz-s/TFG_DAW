import express from 'express';

const app = express();

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log("Servidor Activo, puerto: " + PORT));
} catch (e) {
    console.log("error: "+e)
}