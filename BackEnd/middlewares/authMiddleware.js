import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = { id: decoded.id }; // Asegúrate de que el campo sea `id`
    next();
  } catch (error) {
    res.status(401).json({ error: 'Autenticación fallida' });
  }
};