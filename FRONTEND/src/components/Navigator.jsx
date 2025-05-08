import './Navigator.css'
import SearchBar from './SearchBar'
function Navigator() {
  return (
    <div className="navContainer w-11/12 h-16 rounded-[50px] bg-stone-700 text-white flex justify-around items-center">
		<nav className = "navigator  w-4/5 h-12  flex justify-around items-center">
			<a href="">Productos</a>
			<a href="">Sobre Nosotros</a>
			<a href="">Soporte</a>
			<a href="">Tienda</a>
			<SearchBar/>
		</nav>
			<a href=""> <img src="/src/assets/icons8-carrito-de-compras-64.png" alt="" className='h-10' /></a>
			<a href=""><img src="/src/assets/icons8-usuario-masculino-en-círculo-50.png" alt="" className='h-10'/></a>
		
	</div>
	);
}
// <a target="_blank" href="https://icons8.com/icon/7819/male-user">Usuario masculino en círculo</a> icono de <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/ii6Lr4KivOiE/shopping-cart">Carrito de compras</a> icono de <a target="_blank" href="https://icons8.com">Icons8</a>
export default Navigator;
//Navegador del Home