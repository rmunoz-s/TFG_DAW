import './Navigator.css'
function Navigator() {
  return (
    <div className="navContainer  flex justify-around items-center py-5">
		<img src="/src/assets/SMARTFLORA.jpg" alt="" className=""/>
		<nav className = "navigator  h-12 rounded-[20px] bg-gray-400 w-4/5 h-12  flex justify-around items-center">
			<a href="/src/pages/ProductsPage">Productos</a>
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