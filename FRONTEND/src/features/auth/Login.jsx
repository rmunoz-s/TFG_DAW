import React , {useState} from 'react';
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () =>{
	const [formData, setFormData] = useState({
		username: '',
		password: ''
	});
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({...formData, [name]: value});
	}
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
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ username, password })
			});
			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || 'Error en el registro, verifica tus credenciales');
			}
			const data = await response.json();
			localStorage.setItem('token', data.token);
			navigate('/Home');
		}
		catch (error) {
			setError(error.message);
		}
	}


	  return (
	<div>
	  <form id="loginSquare" onSubmit={handleSubmit}>
		<h1>LOGIN</h1>
		<p>Continúa la aventura en tu mundo de la planta</p>
		{error && <p style={{ color: 'red' }}>{error}</p>}
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
		<div id='passwordBox'>
		  <br />
		  <input 
			type="password" 
			id="password" 
			name="password" 
			placeholder='Contraseña' 
			value={formData.password}
			required 
			onChange={handleChange}
		  />
		</div>
		<button
		id='buttonSubmit' 
		type="submit"
		>Entrar</button>
	  </form>
	</div>
  );
}

export default Login;