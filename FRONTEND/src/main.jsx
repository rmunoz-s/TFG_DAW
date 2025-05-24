import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Login from './features/auth/login';
import Register from './features/auth/Register';
import ProductsPage from './pages/ProductsPage'; 
import CarPage from './pages/CarPage';
import AboutUsPage from './pages/AboutUsPage';
import ProductoFinal from './pages/ProductoFinal';

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
  },
  {
    path: '/pages/products',
    element: <ProductsPage />,
  },  {
    path: '/products/:id',
    element: <ProductoFinal/>
  },
  {
    path: '/pages/car',
    element: <CarPage />,
  },{
    path: '/pages/about',
    element: <AboutUsPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);