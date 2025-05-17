import React from "react";

const ProductCard = ({ product }) => {
  const imageUrl = product.imageUrl.startsWith("/uploads")
    ? `http://localhost:3000${product.imageUrl}`
    : product.imageUrl;

  return (
    <div className="bg-neutral-800 text-white p-4 rounded-lg text-center shadow-md">
      <img
        src={imageUrl || "default-pot.jpg"}
        alt={product.name || product.nombre}
        className="w-full rounded-lg mb-4  relative z-0 transition-all duration-300 hover:scale-105 "
      />
      <h3  className="text-2xl font-bold mb-2 ">{product.name || product.nombre}</h3>
      <p className="text-sm mb-2">{product.description || product.descuento || "Sin descripción"}</p>
      <p className="text-lg font-semibold mb-4">${product.price || product.precio}</p>
      <button className="bg-lime-600 text-black px-4 py-2 rounded hover:bg-green-600">
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductCard;