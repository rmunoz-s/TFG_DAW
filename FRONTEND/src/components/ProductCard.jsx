import React from "react";
const ProductCard = ({ product }) => {
  const imageUrl = product.imageUrl.startsWith("/uploads")
    ? `http://localhost:3000${product.imageUrl}`
    : product.imageUrl;

  return (
    <div className="product-card">
      <img
        src={imageUrl || "default-pot.jpg"}
        alt={product.name || product.nombre}
        className="product-image"
      />
      <h3>{product.name || product.nombre}</h3>
      <p>{product.description || product.descuento || "Sin descripción"}</p>
      <p>${product.price || product.precio}</p>
      <button className="add-to-cart">Añadir al carrito</button>
    </div>
  );
};

export default ProductCard;