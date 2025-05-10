function BannerProducts() {
  return (
    <section className="h-[350px]  text-white mt-10 py-[5%] px-8 flex flex-col md:flex-row items-center justify-center gap-[10%]
    bg-gradient-to-br from-lime-700 via-lime-950 to-slate-900  "
    >
      <div className="text-products max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Macetas inteligentes: <br />
          tecnología y naturaleza en <br />
          perfecta armonía
        </h1>
        <p className="text-lg md:text-xl">
          Explora más opciones innovadoras a continuación.
        </p>
      </div>

      <div className="image-products mt-8 md:mt-0">
        <img
          src="/src/assets/macetas-banner.png"
          alt="Macetas inteligentes"
          className="w-full max-w-md max-h-80 rounded-lg
          "
        />
      </div>

    </section>
  );
}

export default BannerProducts;