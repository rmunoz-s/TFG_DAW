import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './features/auth/Login';
import Register from './features/auth/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/features/auth/Login',
    element: <Login />,
  },
  {
    path: '/features/auth/Register',
    element: <Register />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);