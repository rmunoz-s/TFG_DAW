import './Navigator.css'
function Navigator() {
  return (
    <div className="navContainer w-4/5 h-12 rounded-[20px] bg-gray-400 flex justify-around items-center">
		<img src="./SMARTFLORA.jpg" alt="" className=""/>
		<nav className = "navigator  w-4/5 h-12  flex justify-around items-center">
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