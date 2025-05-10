import DefaultButton from "./DefaultButton";

function HomeCard({ title, desc, imageUrl = "default-pot.jpg" }) {
  // Construir la URL completa si la imagen proviene del backend
  const backendImageUrl = imageUrl.startsWith("/uploads")
    ? `http://localhost:3000${imageUrl}`
    : imageUrl;

  return (
    <div className="relative group w-80 h-80 overflow-hidden rounded-lg shadow-lg">
      {/* Imagen */}
      <img
        src={backendImageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      {/* Contenido oculto que aparece al hacer hover */}
      <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-sm text-gray-300 mb-4">{desc}</p>
        <DefaultButton title="Check Out" />
      </div>
    </div>
  );
}

export default HomeCard;
