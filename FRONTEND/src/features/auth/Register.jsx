import React, { useState } from 'react';
import styles from './Register.module.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
		email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }
    console.log(formData);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { username, email, password } = formData;
        
        if (!username || !password || !email) {
            setError('Por favor, completa todos los campos');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/usuarios/registro', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Error en el registro');
            }
            navigate('/features/auth/Login');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
		<div className={styles.container}>
		  <h1 className={styles.title}>Registro</h1>
		  {error && <p style={{ color: 'red' }}>{error}</p>}
		  <form onSubmit={handleSubmit}>
			<div className={styles.box}>
			  <input
				type="text"
				name="username"
				placeholder="Usuario"
				value={formData.username}
				onChange={handleChange}
				className={styles.input}
			  />
			</div>
			<div className={styles.box}>
			  <input
				type="email"
				name="email"
				placeholder="Correo electrónico"
				value={formData.email}
				onChange={handleChange}
				className={styles.input}
			  />
			</div>
			<div className={styles.box}>
			  <input
				type="password"
				name="password"
				placeholder="Contraseña"
				value={formData.password}
				onChange={handleChange}
				className={styles.input}
			  />
			</div>
			<div>
			  <button type="submit" className={styles.button}>Registrarse</button>
			</div>
		  </form>
		</div>
	  );
	};

export default Register;