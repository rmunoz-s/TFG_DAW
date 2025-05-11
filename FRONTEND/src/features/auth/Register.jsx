import React, { useState } from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
		email: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
    }

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
            navigate('/Login');
        } catch (error) {
            setError(error.message);
        }
    };

    return (<div>
		<form id="loginSquare">
		  <h1>Register</h1>
		  <p>Bienvenido a un nuevo mundo por conocer</p>
		  <div id='userBox'>
			<br />
			<input 
				type="text" 
				id="username" 
				name="username" 
				placeholder='Nombre de usuario' 
				value={formData.username} 
				required 
				onChange={handleChange}
				/>
		  </div>
		  <div id='emailBox'>
		  </div>
		  <div id='passwordBox'>
			<br />
			<input type="email" id="email" name="email" placeholder='Pon tu correo electrónico' value={formData.email} onChange={handleChange} required />
		  </div>
		  <div id='passwordBox'>
			<br />
			<input type="password" id="password" name="password" placeholder='Contraseña' value={formData.password} onChange={handleChange} required />
		  </div>
		  <button id='buttonSubmit' type="submit">Registrarse</button>
		</form>
	  </div>)
};

export default Register;