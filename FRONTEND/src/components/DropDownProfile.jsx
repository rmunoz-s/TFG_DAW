import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './DropDownProfile.css';

function DropDownProfile() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/features/auth/Login');
  };

  return (
    <div className="flex flex-col dropDownProfile">
      <ul className="flex flex-col gap-4">
        {isLoggedIn ? (
          <>
            <li>Hola {username}</li>
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
