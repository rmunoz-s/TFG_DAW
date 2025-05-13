import { useParams } from 'react-router-dom'; // Para capturar el id desde la URL
import { useState, useEffect } from 'react';

function ProductoFinal() {

  const id = '681cf86a522822f7109c984a';

  
  
    useEffect(() => {

      const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:3000/productos"); // Ruta del backend
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
        };

        fetchProducts();
    }, []);


  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.imageUrl} alt={product.name} width="200" />
      <p>{product.description}</p>

      <h2>Características</h2>
      <ul>
        {product.features && product.features.length > 0 ? (
          product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))
        ) : (
          <li>No tiene características disponibles.</li>
        )}
      </ul>

      <p>
        <strong>Precio:</strong> ${product.price}
      </p>

      {/* Botón para volver a la lista de productos */}
      <Link to="/products">← Volver a la lista de productos</Link>
    </div>
  );
}

export default ProductoFinal;
