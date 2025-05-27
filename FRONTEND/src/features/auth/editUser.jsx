import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './editUser.module.css';

function EditUser() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    currentPassword: '',
    confirmPassword: ''
  });
  const [editingField, setEditingField] = useState(null);
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const isLoggedIn = !!token && !!userId;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/features/auth/Login');
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/usuarios/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Error al obtener los datos del usuario');
        }
        
        const data = await response.json();
        setUserData(data);
        setFormData({
          username: data.username,
          email: data.email,
          password: ''
        });
      } catch (error) {
        console.error('Error:', error);
        setError('Error al cargar los datos del perfil. Por favor, intenta de nuevo.');
      }
    };

    fetchUserData();
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  if (error) {
    return (
      <>
        <div className={styles.background}></div>
        <div className={styles.overlay}></div>
        <div className={styles.wrapper}>
          <div className={styles['edit-user-container']}>
            <h1 className={styles['edit-user-title']}>Error</h1>
            <p className={styles['error-message']}>{error}</p>
            <button 
              className={styles['retry-button']}
              onClick={() => setError(null)}
            >
              Intentar de nuevo
            </button>
          </div>
        </div>
      </>
    );
  }

  if (!userData) {
    return (
      <>
        <div className={styles.background}></div>
        <div className={styles.overlay}></div>
        <div className={styles.wrapper}>
          <div className={styles['edit-user-container']}>
            <h1 className={styles['edit-user-title']}>Cargando perfil...</h1>
          </div>
        </div>
      </>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
	e.preventDefault();
	
	if (formData.password || formData.confirmPassword) {
	  if (!formData.currentPassword) {
		setPasswordError('Debes introducir tu contraseña actual para cambiarla');
		return;
	  }
	  if (formData.password !== formData.confirmPassword) {
		setPasswordError('Las contraseñas no coinciden');
		return;
	  }
	}
  
	try {
	  if (!userId) {
		throw new Error('No se encontró el ID del usuario');
	  }
  
	  const response = await fetch(`http://localhost:3000/usuarios/${userId}`, {
		method: 'PUT',
		headers: {
		  'Content-Type': 'application/json',
		  'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify(formData)
	  });
  
	  const data = await response.json();
	  
	  if (response.status === 404) {
		throw new Error(data.error || 'Usuario no encontrado');
	  }
	  
	  if (!response.ok) {
		throw new Error(data.error || 'Error al actualizar los datos');
	  }
  
	  setSuccess(true);
	  setTimeout(() => {
		navigate('/features/auth/viewUser');
	  }, 1500);
	} catch (error) {
	  setError(error.message || 'Error al actualizar los datos. Por favor, intenta de nuevo.');
	}
  };

  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.overlay}></div>
      <div className={styles.wrapper}>
        <div className={styles['edit-user-container']}>
          <div className={styles['back-button']}>
            <a href="/" className={styles['back-link']}>&larr; Volver al inicio</a>
          </div>
          <h1 className={styles['edit-user-title']}>Editar Perfil</h1>
          
          {success && (
            <div className={styles['success-message']}>
              ¡Datos actualizados correctamente!
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles['form-container']}>
            <div className={styles['form-group']}>
              <label className={styles['form-label']} htmlFor="username">Nombre de Usuario:</label>
              <div className={`${styles.editable} ${editingField === 'username' ? styles.editing : ''}`} 
                   onClick={() => setEditingField('username')}>
                {editingField === 'username' ? (
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    onBlur={() => setEditingField(null)}
                    autoFocus
                  />
                ) : (
                  <span>{formData.username}</span>
                )}
              </div>
            </div>
            <div className={styles['form-group']}>
              <label className={styles['form-label']} htmlFor="email">Email:</label>
              <div className={`${styles.editable} ${editingField === 'email' ? styles.editing : ''}`} 
                   onClick={() => setEditingField('email')}>
                {editingField === 'email' ? (
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => setEditingField(null)}
                    autoFocus
                  />
                ) : (
                  <span>{formData.email}</span>
                )}
              </div>
            </div>
            <div className={styles['form-group']}>
              <label className={styles['form-label']} htmlFor="currentPassword">Contraseña Actual:</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                required
                className={styles['form-input']}
                placeholder="Introduce tu contraseña actual"
              />
            </div>
            <div className={styles['form-group']}>
              <label className={styles['form-label']} htmlFor="password">Nueva Contraseña:</label>
              <div className={styles['password-input']}>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={styles['form-input']}
                  placeholder="Introduce tu nueva contraseña"
                />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={styles['form-input']}
                  placeholder="Confirma tu nueva contraseña"
                />
              </div>
              {passwordError && <p className={styles['error-message']}>{passwordError}</p>}
            </div>
            <button type="submit" className={styles['submit-button']}>
              Guardar Cambios
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default EditUser;
