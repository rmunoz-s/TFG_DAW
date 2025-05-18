import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    if (!username || !password) {
      setError('Por favor, completa todos los campos');
      return;
    }
    try {
      const response = await fetch('http://localhost:3000/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Error en el registro, verifica tus credenciales');
      }
      const data = await response.json();
      localStorage.setItem('token', data.token);
	  localStorage.setItem('username', data.username);
      navigate('/Home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>
      <div className={styles.wrapper}>
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          <h1 className={styles.title}>LOGIN</h1>
          <p className={styles.subtitle}>Continúa la aventura en tu mundo de la planta</p>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <input
            type="text"
            name="username"
            placeholder="Nombre de usuario"
            className={styles.inputField}
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className={styles.inputField}
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className={styles.submitButton}>
            Entrar
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
