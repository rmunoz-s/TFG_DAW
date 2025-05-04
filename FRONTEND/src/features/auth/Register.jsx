import React from 'react';
import "./Register.css";

function Register() {
  return <div>
	  <form id="loginSquare">
		<h1>Register</h1>
		<p>Bienvenido a un nuevo mundo por conocer</p>
		<div id='userBox'>
		  <br />
		  <input type="text" id="username" name="username" placeholder='Nombre de usuario' required />
		</div>
		<div id='passwordBox'>
		  <br />
		  <input type="password" id="password" name="password" placeholder='Contraseña' required />
		</div><div id='passwordBox'>
		  <br />
		  <input type="password" id="password" name="password" placeholder='Contraseña' required />
		</div>
		<button id='buttonSubmit' type="submit">Registrarse</button>
	  </form>
	</div>
}

export default Register;