import React, { useEffect, useState } from "react";

function CarContainer() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [loading, setLoading] = useState(true);

  // Variables en quemado
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MTM2ZDdiM2Y4ZTRkMDFmZjI1YTliZCIsImlhdCI6MTc0NzQxNjYzNywiZXhwIjoxNzQ3NDIwMjM3fQ.Nnu7dhPJSDHHc4raR28KgWP5ulIWZ6aSYx8NsOkUwHs";

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch("http://localhost:3000/carrito", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, 
          },
        });

        if (!response.ok) {
          throw new Error("Error al cargar el carrito");
        }

        const data = await response.json();
        const items = data.items || [];
        setCartItems(items);
        
        const initialSelected = {};
        items.forEach(item => {
          initialSelected[item.producto._id] = true;
        });
        setSelectedItems(initialSelected);
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  // Manejar cambio en checkbox
  const handleCheckboxChange = (productId) => {
    setSelectedItems(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  // Incrementar cantidad
  const handleIncrement = async (productId, currentQuantity) => {
    if (currentQuantity >= 10) return;
    
    try {
      const response = await fetch(`http://localhost:3000/carrito/incrementar/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al actualizar cantidad");
      }
      
      const responseData = await response.json();
      
      // Buscar el producto actualizado en la respuesta
      const updatedItem = responseData.data.items.find(
        item => item.producto._id === productId || 
               (typeof item.producto === 'string' && item.producto === productId)
      );
      
      if (updatedItem) {
        setCartItems(prevItems => 
          prevItems.map(item => 
            item.producto._id === productId 
              ? { ...item, cantidad: updatedItem.cantidad } 
              : item
          )
        );
      }
    } catch (error) {
      console.error("Error incrementando cantidad:", error);
      alert(error.message || "Error al aumentar la cantidad");
    }
  };

  // Decrementar cantidad
  const handleDecrement = async (productId, currentQuantity) => {
    if (currentQuantity <= 1) return;
    
    try {
      const response = await fetch(`http://localhost:3000/carrito/decrementar/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al actualizar cantidad");
      }
      
      const responseData = await response.json();
      
      // Buscar el producto actualizado en la respuesta
      const updatedItem = responseData.data.items.find(
        item => item.producto._id === productId || 
               (typeof item.producto === 'string' && item.producto === productId)
      );
      
      if (updatedItem) {
        // Actualizar estado local con la cantidad desde el servidor
        setCartItems(prevItems => 
          prevItems.map(item => 
            item.producto._id === productId 
              ? { ...item, cantidad: updatedItem.cantidad } 
              : item
          )
        );
      }
    } catch (error) {
      console.error("Error decrementando cantidad:", error);
      alert(error.message || "Error al disminuir la cantidad");
    }
  };

  // Eliminar producto
  const handleRemove = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/carrito/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        throw new Error("Error al eliminar producto");
      }
      
      // Actualizar estado local
      setCartItems(prevItems => prevItems.filter(item => item.producto._id !== productId));
      
      // Actualizar seleccionados
      const newSelected = { ...selectedItems };
      delete newSelected[productId];
      setSelectedItems(newSelected);
    } catch (error) {
      console.error("Error eliminando producto:", error);
      alert("Error al eliminar el producto del carrito");
    }
  };

  // Calcular subtotal de items seleccionados
  const calculateSubtotal = () => {
    return cartItems
      .filter(item => selectedItems[item.producto._id])
      .reduce((total, item) => total + item.producto.price * item.cantidad, 0)
      .toFixed(2);
  };

  // Contar items seleccionados
  const countSelectedItems = () => {
    return cartItems.filter(item => selectedItems[item.producto._id]).length;
  };

  if (loading) {
    return <p className="text-center text-white">Cargando carrito...</p>;
  }

  return (
    <div className="bg-[#1d1d1d] text-white p-6 rounded-lg shadow-md w-4/5 mx-auto mt-10 mb-10">
      <h1 className="text-3xl font-bold mb-6 border-b border-lime-500 pb-2">Cesta</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl">Tu carrito está vacío</p>
          <a href="/pages/products" className="text-lime-500 hover:underline mt-4 inline-block">
            Ver productos
          </a>
        </div>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.producto._id}
            className="flex items-center justify-between border-b border-gray-600 py-4"
          >
            {/* Imagen del producto */}
            <div className="flex items-center gap-4">
              <input 
                type="checkbox" 
                className="w-5 h-5" 
                checked={selectedItems[item.producto._id] || false}
                onChange={() => handleCheckboxChange(item.producto._id)}
              />
              <img
                src={`http://localhost:3000${item.producto.imageUrl}`}
                alt={item.producto.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>

            {/* Detalles del producto */}
            <div className="flex-1 ml-4">
              <h2 className="text-xl font-bold">{item.producto.name}</h2>
              <p className="text-sm text-lime-500">En stock</p>
              <p className="text-sm text-gray-400 flex items-center gap-2">
                Entrega en 5 días
                <img
                  src="/src/assets/icons8-carrito-de-compras-64.png"
                  alt="Delivery"
                  className="w-5 h-5"
                />
              </p>
            </div>

            {/* Controles de cantidad */}
            <div className="flex items-center gap-2">
              <button 
                className={`${item.cantidad > 1 ? 'bg-lime-500' : 'bg-gray-500'} text-black px-2 py-1 rounded`}
                onClick={() => handleDecrement(item.producto._id, item.cantidad)}
                disabled={item.cantidad <= 1}
              >
                -
              </button>
              <span className="text-lg font-bold">{item.cantidad}</span>
              <button 
                className={`${item.cantidad < 10 ? 'bg-lime-500' : 'bg-gray-500'} text-black px-2 py-1 rounded`}
                onClick={() => handleIncrement(item.producto._id, item.cantidad)}
                disabled={item.cantidad >= 10}
              >
                +
              </button>
            </div>

            {/* Precio */}
            <div className="text-xl font-bold">${(item.producto.price * item.cantidad).toFixed(2)}</div>

            {/* Acciones */}
            <div className="flex flex-col items-center gap-2">
              <button 
                className="text-red-500 hover:underline"
                onClick={() => handleRemove(item.producto._id)}
              >
                Eliminar
              </button>
              <a 
                href={`/products/${item.producto._id}`} 
                className="text-blue-500 hover:underline"
              >
                Ver más
              </a>
            </div>
          </div>
        ))
      )}

      {/* Subtotal */}
      {cartItems.length > 0 && (
        <div className="mt-6 border-t border-lime-500 pt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Subtotal ({countSelectedItems()} productos):</h2>
            <span className="text-2xl font-bold">${calculateSubtotal()}</span>
          </div>
          
          <div className="mt-6 flex justify-end">
            <button className="bg-lime-500 text-black px-6 py-2 rounded-md hover:bg-lime-600 transition-colors">
              Proceder al pago
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarContainer;