import { useParams, Link } from 'react-router-dom'; // Para capturar el id desde la URL
import { useState, useEffect } from 'react';
import './ProductoFinal.css';
import Navigator from '../components/Navigator';
import CestaSlider from '../components/CestaSlider';
import Footer from '../components/Footer';

function ProductoFinal() {
  const { id } = useParams(); // Obtiene el ID del producto de la URL
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' o 'error'
  
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
  const cardImage = product.images?.find(img => img.id === "Card");
  const bannerImageOne = product.images?.find(img => img.id === "Banner");
  const bannerImageTwo = product.images?.find(img => img.id === "Banner2");


  // Si la imagen existe, construir el URL
    const imageUrl = cardImage?.url?.startsWith("/uploads/")
      ? `http://localhost:3000${cardImage.url}`
      : cardImage?.url || "default-pot.jpg";
      const bannerUrl = bannerImageOne?.url?.startsWith("/uploads/")
      ? `http://localhost:3000${bannerImageOne.url}`
      : bannerImageOne?.url || "default-pot.jpg";
      const bannerUrl2 = bannerImageTwo?.url?.startsWith("/uploads/")
      ? `http://localhost:3000${bannerImageTwo.url}`
      : bannerImageTwo?.url || "default-pot.jpg";

  // Función para agregar al carrito
  const handleAddToCart = async () => {
    const token = localStorage.getItem("token");
    
    if (!token) {
      setMessage('Debes iniciar sesión para añadir productos al carrito');
      setMessageType('error');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/carrito/agregar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ productoId: id })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al añadir al carrito");
      }
      
      setMessage('¡Producto añadido al carrito!');
      setMessageType('success');
      
      setTimeout(() => {
        setMessage('');
      }, 3000);
      
    } catch (error) {
      console.error("Error añadiendo al carrito:", error);
      setMessage(error.message || "Error al añadir al carrito");
      setMessageType('error');
    }
  };
    

  return (
    <div className="producto-final-container">
      <Navigator/>
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
           
            {product.features && product.features.length > 0 && (
              
              <>
              <img src="https://img.icons8.com/?size=100&id=Eh9Rhi3YSOY1&format=png&color=a5fc03" alt="" className='product-title-icon' />
              <h1 className="product-title">{product.name || product.nombre} 
              </h1>
              
              <p className="product-description">{product.description || product.descripcion || "Sin descripción"}</p>
              <ul className="product-sections">
              {product.sections.map((section, index) => (
                <li key = {index} >✦  {section.content}</li>
              ))}
            </ul>
                
              </>
            )}

            <p className="product-price">
              <strong>Precio:</strong> ${product.price || product.precio}
            </p>
            <p className="product-stock">
              <strong>Cantidad en stock:</strong> {product.stock || product.stock}
            </p>
            <Link to={{
              pathname: `/products/${id}/DetallesCompra`
              
            }}>
            <button id='buy-button'>
              Comprar
            </button>
            </Link>
            <button className="add-to-cart-btn bg-lime-600">
              Añadir al carrito
            </button>
            {message && (
              <div className={`message mt-2 text-center p-2 rounded-md ${messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {message}
              </div>
            )}
            {message && (
              <div className={`message ${messageType}`}>
                {message}
              </div>
            )}

          </div>

            <div className="producto-final-section2">
              
                <img src={bannerUrl} alt="" className='section2-bannerImg' />
                <p className='section2-desc'>{product.longDescription}</p>

                <div className="section2-arrow">
                  <img src="/src/assets/vector.png" alt="" className='section2-arrow-Img'/>
                </div>
                <h2 className="features-title">Características</h2>
                <ul className="features-list">
                  {product.features.map((feature, index) => (
                    <li key={index} className="feature-item">{feature}</li>
                  ))}
                 
                </ul>

                <img src={bannerUrl2} alt="" className='section2-bannerImg' />

                  <h2 className='features-title'>Especificaciones</h2>
                <ul className='specifications-list'>
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="feature-item">{spec}</li>
                  ))}
                </ul>

                <CestaSlider/>
                <Footer/>
            </div>
            
        </div>
        
      )}
      
       
    </div>
  );
}

export default ProductoFinal;
