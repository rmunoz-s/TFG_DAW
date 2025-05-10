import './Navigator.css'
import SearchBar from './SearchBar'


function Navigator() {
  return (
    <div className="navContainer  flex justify-around items-center py-5">
		<img src="/src/assets/SMARTFLORA.jpg" alt="" className=""/>
		<nav className = "navigator rounded-[20px] bg-gray-400 w-4/5 h-12  flex justify-around items-center">
			<a href="/src/pages/ProductsPage">Productos</a>
			<a href="">Sobre Nosotros</a>
			<a href="">Opiniones</a>
			<a href="">Soporte</a>
			<a href="">Tienda</a>
			
			<SearchBar/>

			<a href=""> <img src="/src/assets/icons8-carrito-de-compras-64.png" alt="" className='h-10' /></a>
            <a href=""><img src="/src/assets/icons8-usuario-masculino-en-círculo-50.png" alt="" className='h-10'/></a>
		</nav>
	</div>
	
	);
}

// <a target="_blank" href="https://icons8.com/icon/7819/male-user">Usuario masculino en círculo</a> icono de <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/ii6Lr4KivOiE/shopping-cart">Carrito de compras</a> icono de <a target="_blank" href="https://icons8.com">Icons8</a>
//#A5FC03 <a target="_blank" href="https://icons8.com/icon/j3XI41kBOIXY/shopping-cart">Cart</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
export default Navigator;
//Navegador del Home