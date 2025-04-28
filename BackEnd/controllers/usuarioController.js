import Usuario from '../models/usuarioModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registrarUsuario = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const nuevoUsuario = new Usuario({
      ...req.body,
      password: hashedPassword
    });
    await nuevoUsuario.save();
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const loginUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findOne({ email: req.body.email });
    if (!usuario) return res.status(404).json({ error: 'Usuario no encontrado' });
    
    const validPassword = await bcrypt.compare(req.body.password, usuario.password);
    if (!validPassword) return res.status(401).json({ error: 'Contraseña incorrecta' });
    
    const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });
    
    res.json({ token, userId: usuario._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};