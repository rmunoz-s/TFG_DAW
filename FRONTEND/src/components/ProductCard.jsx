import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {

  
   const cardImage = product.images?.find(img => img.id === "Card");

   const imageUrl = cardImage?.url?.startsWith("/uploads")
      ? `http://localhost:3000${cardImage.url}`
      : cardImage?.url || "default-pot.jpg";


    
  return (
    <div className="bg-neutral-800 text-white p-4 rounded-lg text-center shadow-md">
      <img
        src={imageUrl || "default-pot.jpg"}
        alt={product.name || product.nombre}
        className="w-full rounded-lg mb-4  relative z-0 transition-all duration-300 hover:scale-105 "
      />

      <h3 className="text-2xl font-bold mb-2">{product.name || product.nombre}</h3>
      <p className="text-sm mb-2">{product.description || product.descuento || "Sin descripción"}</p>
      <p className="text-lg font-semibold mb-4">${product.price || product.precio}</p>      
        <Link to={`/products/${product._id}`}>
          <button className="bg-lime-600 text-black px-4 py-2 rounded hover:bg-green-600">
            Ver detalles
          </button>
        </Link>
     </div>
  );
};

export default ProductCard;