import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DropDownProfile.css';


function DropDownProfile() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
  const isLoggedIn = !!token && !!userId;

  useEffect(() => {
    if (isLoggedIn) {
      fetch(`http://localhost:3000/usuarios/${userId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => setUsername(data.username))
      .catch(error => console.error('Error fetching username:', error));
    }
  }, [isLoggedIn, userId, token]);

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/');
  };

  return (
    <div className="flex flex-col dropDownProfile">
      <ul className="flex flex-col gap-4">
        {isLoggedIn ? (
          <>
            <li>Hola {username}</li>
            <li>
              <Link to="/features/auth/viewUser">Ver Perfil</Link>
            </li>
            <li>
              <Link to="/features/auth/editUser">Editar Perfil</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/features/auth/Login">Login</Link>
            </li>
            <li>
              <Link to="/features/auth/Register">Registrarse</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}

export default DropDownProfile;
