import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './viewUser.module.css';

function ViewUser() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');
  const isLoggedIn = !!token && !!userId;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/features/auth/Login');
      return;
    }

    // Obtener datos del usuario usando el token
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (!userId) {
          throw new Error('No se encontró el ID del usuario');
        }

        const response = await fetch(`http://localhost:3000/usuarios/${userId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        const data = await response.json();
        
        if (response.status === 404) {
          throw new Error(data.error || 'Usuario no encontrado');
        }
        
        if (!response.ok) {
          throw new Error(data.error || 'Error al obtener los datos del usuario');
        }
        
        setUserData(data);
      } catch (error) {
        console.error('Error:', error);
        setError(error.message || 'Error al cargar los datos del perfil. Por favor, intenta de nuevo.');
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
          <div className={styles['view-user-container']}>
            <h1 className={styles['view-user-title']}>Error</h1>
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
          <div className={styles['view-user-container']}>
            <h1 className={styles['view-user-title']}>Cargando perfil...</h1>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className={styles.background} style={{backgroundColor: '#f0f0f0'}}></div>
      <div className={styles.overlay}></div>
      <div className={styles.wrapper}>
        <div className={styles['view-user-container']}>
          <div className={styles['back-button']}>
            <a href="/" className={styles['back-link']}>&larr; Volver al inicio</a>
          </div>
          <h1 className={styles['view-user-title']}>Ver Perfil de Usuario</h1>
          <div className={styles['user-info']}>
            <div className={styles['user-info-item']}>
              <span className={styles['user-info-label']}>Nombre de Usuario:</span>
              <span className={styles['user-info-value']}>{userData.username}</span>
            </div>
            <div className={styles['user-info-item']}>
              <span className={styles['user-info-label']}>Email:</span>
              <span className={styles['user-info-value']}>{userData.email}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewUser;
