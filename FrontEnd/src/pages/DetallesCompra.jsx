import { Link, useParams } from "react-router-dom";
import Navigator from "../components/Navigator";
import { useState, useEffect } from "react";

import './DetallesCompra.css'


function DetallesCompra(){
    const { id } = useParams(); // Obtiene el ID del producto de la URL
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3000/productos/${id}/`);
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

  

  return(
    <div className="payment_form">
        <Navigator/>
            {loading ? (
        <div className="loading">Cargando producto...</div>
      ) : !product._id ? (
        <div className="error">
          <h2>Producto no encontrado</h2>
          <Link to="/products" className="back-button">← Volver a la lista de productos</Link>
        </div>
      ) : (

        <div className="mainContainerForms">
            
            <form action="" method="POST" id="datosPersonales">
              <div>
                <h1>{product.name}</h1>
                <h2 id="productoPrecio">{product.price}</h2>
                </div>
                <label htmlFor="fullName">Nombre completo:</label>
                <input type="text" name="fullName" id="fullName" />
                <label htmlFor="email">Correo electronico:</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="phoneNumber">Número de teléfono:</label>
                <input type="tel" name="phoneNumber" id="phoneNumber" />
                <label htmlFor="direccion">Dirección:</label>
                <input type="text" name="direccion" id="direccion" placeholder="Pais/Provincia/Ciudad/Calle/Piso" />

            </form>
            <form action="" id="formdePago" onSubmit={realizarCompra}>
              <p>Introduzca el numero de cuenta bancaria escrito bajo este texto:</p>
              <p>7290-1239-0000-0000</p>
              <label htmlFor="creditCardNumber">Numero de cuenta:</label>
              <input type="text" name="creditCardNumber" id="creditCardNumber"/>
              <button type="submit" >Realizar compra</button>
            </form>
        </div>
    
    
      )}
        
        
    </div>
)
};

export default DetallesCompra;