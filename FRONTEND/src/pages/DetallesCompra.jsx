import React, { useRef, useState} from "react";
import Navigator from "../components/Navigator";
import './DetallesCompra.css';
import Footer from "../components/Footer";
import { useCarrito } from "../hooks/carritoHooks";
import { useNavigate } from "react-router-dom";

function DetallesCompra() {

   
  const navigate = useNavigate();

  const {
    vaciarHandler,
    selectedItems,
    loading,
    calculateSubtotal,
    cartItems,
  } = useCarrito();

  // State for messages
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  // Refs for the forms
  const datosPersonalesRef = useRef(null);
  const formdePagoRef = useRef(null);

  if (loading) {
    return <p className="text-center text-white">Cargando carrito...</p>;
  }

  

  const realizarCompra = (event) => {
    event.preventDefault();
    const cardNumber = formdePagoRef.current["creditCardNumber"].value;

    if (cardNumber === "7290123900000000") {
      setSuccess(true);
      setError(false);

     
      datosPersonalesRef.current.reset();
      formdePagoRef.current.reset();
        
      setTimeout(() => {
        setSuccess(false);
        navigate('/');
      }, 2000);

    } else {
      
      setSuccess(false);
      setError(true);

      setTimeout(() => setError(false), 4000);
    }
  };

  return (
    <div className="payment_form">
      <Navigator />
      <div className="mainContainerForms">
        <form ref={datosPersonalesRef} id="datosPersonales">
          <h1 className="datosPersonalesTitle">Datos de compra</h1>
          <p>Introduzca los siguientes datos para poder llevar acabo el proceso de compra.</p>
          <label htmlFor="fullName">Nombre completo:</label>
          <input type="text" name="fullName" id="fullName" placeholder="Nombre, Apellidos..." required />
          <label htmlFor="email">Correo electronico:</label>
          <input type="email" name="email" id="email" placeholder="xxx@gmail.com..." required />
          <label htmlFor="phoneNumber">Número de teléfono:</label>
          <input type="tel" name="phoneNumber" id="phoneNumber" required />
          <label htmlFor="direccion">Dirección:</label>
          <input type="text" name="direccion" id="direccion" placeholder="Pais/Provincia/Ciudad/Calle/Piso" required />
        </form>
        <form ref={formdePagoRef} id="formdePago" onSubmit={realizarCompra}>
          <h1 className="formdePagoTitle">Datos Bancarios</h1>
          <p>Introduzca el numero de tarjeta bancaria escrito bajo este texto:</p>
          <p>7290-1239-0000-0000</p>
          <label htmlFor="creditCardNumber">Numero de cuenta:</label>
          <input type="text" name="creditCardNumber" id="creditCardNumber" required />

          <hr />
          <div className="subTotal">
            <h2>Subtotal</h2>
            <span id="subTotal" className="text-2xl font-bold">${calculateSubtotal()}</span>
          </div>
        
          <button className="realizarCompra" type="submit" onClick={() => vaciarHandler()}>
            Realizar compra
          </button>

          {success && <p id="successPayment" className="success">Compra realizada con exito :D</p>}
          {error && <p id="incorrectPayment" className="error">Numero de tarjeta no valido...</p>}
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default DetallesCompra;