import DefaultButton from "./DefaultButton";
import { Link } from 'react-router-dom';


function HomeCard({ title, desc, product = "default-pot.jpg" }) {
   const cardImage = product.images?.find(img => img.id === "Card");

   const imageUrl = cardImage?.url?.startsWith("/uploads")
      ? `http://localhost:3000${cardImage.url}`
      : cardImage?.url || "default-pot.jpg";

  return (
    <div className="relative group w-80 h-80 overflow-hidden rounded-lg shadow-lg">
      {/* Imagen */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />


      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-4">{desc}</p>
                <Link to={`/products/${product._id}`}>
          <button className="bg-lime-600 text-black px-4 py-2 rounded hover:bg-green-600">
            Ver detalles
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomeCard;
