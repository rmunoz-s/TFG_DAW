import React from "react";
import { useCarrito } from "../hooks/carritoHooks";
import { Link } from "react-router-dom";

function CarContainer() {
  const {
    cartItems,
    selectedItems,
    loading,
    handleCheckboxChange,
    handleIncrement,
    handleDecrement,
    handleRemove,
    calculateSubtotal,
    countSelectedItems,
  } = useCarrito();

  if (loading) {
    return <p className="text-center text-white">Cargando carrito...</p>;
  }

  return (
    <div className="bg-[#1d1d1d] text-white p-6 rounded-lg shadow-md w-4/5 mx-auto mt-10 mb-10">
      <h1 className="text-3xl font-bold mb-6 border-b border-lime-500 pb-2">
        Cesta
      </h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xl">Tu carrito está vacío</p>
          <a
            href="/pages/products"
            className="text-lime-500 hover:underline mt-4 inline-block"
          >
            Ver productos
          </a>
        </div>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.producto._id}
            className="flex items-center justify-between border-b border-gray-600 py-4"
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                className="w-5 h-5"
                checked={selectedItems[item.producto._id] || false}
                onChange={() => handleCheckboxChange(item.producto._id)}
              />
              <img
                src={`http://localhost:3000${item.producto.images[0].url}`}
                alt={item.producto.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
            </div>

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

            <div className="flex items-center gap-2">
              <button
                className={`${
                  item.cantidad > 1 ? "bg-lime-500" : "bg-gray-500"
                } text-black px-2 py-1 rounded`}
                onClick={() => handleDecrement(item.producto._id, item.cantidad)}
                disabled={item.cantidad <= 1}
              >
                -
              </button>
              <span className="text-lg font-bold">{item.cantidad}</span>
              <button
                className={`${
                  item.cantidad < 10 ? "bg-lime-500" : "bg-gray-500"
                } text-black px-2 py-1 rounded`}
                onClick={() => handleIncrement(item.producto._id, item.cantidad)}
                disabled={item.cantidad >= 10}
              >
                +
              </button>
            </div>

            <div className="text-xl font-bold">
              ${ (item.producto.price * item.cantidad).toFixed(2) }
            </div>

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

      {cartItems.length > 0 && (
        <div className="mt-6 border-t border-lime-500 pt-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">
              Subtotal ({countSelectedItems()} productos):
            </h2>
            <span className="text-2xl font-bold">${calculateSubtotal()}</span>
          </div>

          <div className="mt-6 flex justify-end">
           <Link to="/pages/car/DetallesCompra">
                <button className="bg-lime-500 text-black px-6 py-2 rounded-md hover:bg-lime-600 transition-colors">
                  Proceder al pago
                </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarContainer;