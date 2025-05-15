import { useParams, Link } from 'react-router-dom'; // Para capturar el id desde la URL
import { useState, useEffect } from 'react';
import './ProductoFinal.css';

function ProductoFinal() {
  const { id } = useParams(); // Obtiene el ID del producto de la URL
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/productos/${id}`);
        if (!response.ok) {
          throw new Error('Producto no encontrado');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  // Preparar la URL de la imagen
  const imageUrl = product.imageUrl && product.imageUrl.startsWith('/uploads')
    ? `http://localhost:3000${product.imageUrl}`
    : product.imageUrl;

  return (
    <div className="producto-final-container">
      {loading ? (
        <div className="loading">Cargando producto...</div>
      ) : !product._id ? (
        <div className="error">
          <h2>Producto no encontrado</h2>
          <Link to="/products" className="back-button">← Volver a la lista de productos</Link>
        </div>
      ) : (
        <div className="product-detail">
          <div className="product-image">
            <img 
              src={imageUrl || "default-pot.jpg"} 
              alt={product.name || product.nombre} 
              className="product-img"
            />
          </div>
          <div className="product-info">
            <h1 className="product-title">{product.name || product.nombre}</h1>
            <p className="product-description">{product.description || product.descripcion || "Sin descripción"}</p>

            {product.features && product.features.length > 0 && (
              <>
                <h2 className="features-title">Características</h2>
                <ul className="features-list">
                  {product.features.map((feature, index) => (
                    <li key={index} className="feature-item">{feature}</li>
                  ))}
                </ul>
              </>
            )}

            <p className="product-price">
              <strong>Precio:</strong> ${product.price || product.precio}
            </p>

            <button className="add-to-cart-btn bg-lime-600">
              Añadir al carrito
            </button>

            <Link to="/products" className="back-button">
              ← Volver a la lista de productos
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductoFinal;
