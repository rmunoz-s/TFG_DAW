// middlewares/authMiddleware.js
import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = { id: decoded.userId };
    next();
  } catch (error) {
    res.status(401).json({ error: 'Autenticación fallida' });
  }
};