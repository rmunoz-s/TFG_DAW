import React from 'react';
import "./Login.css";

function Login() {
	
	  return (
	<div>
	  <form id="loginSquare">
		<h1>LOGIN</h1>
		<p>Continúa la aventura en tu mundo de la planta</p>
		<div id='userBox'>
		  <br />
		  <input type="text" id="username" name="username" placeholder='Nombre de usuario' required />
		</div>
		<div id='passwordBox'>
		  <br />
		  <input type="password" id="password" name="password" placeholder='Contraseña' required />
		</div>
		<button id='buttonSubmit' type="submit">Entrar</button>
	  </form>
	</div>
  );
}

export default Login;