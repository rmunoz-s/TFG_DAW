import './Navigator.css'
function Navigator() {
  return (
    <div className="nanContainer w-70 h-10 bg-gray-400">
		<img src="./SMARTFLORA.jpg" alt="" className="w-20 h-10"/>
		<nav className = "navigator">
			<a href="">Productos</a>
			<a href="">Sobre Nosotros</a>
			<a href="">Opiniones</a>
			<a href="">Soporte</a>
			<a href="">Tienda</a>
		</nav>
	</div>
	);
}

export default Navigator;
//Navegador del Home