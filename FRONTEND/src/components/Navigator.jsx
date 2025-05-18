import './Navigator.css'
import SearchBar from './SearchBar'
import DropDownProfile from './DropDownProfile';
import React from 'react';
import AboutUsPage from '../pages/AboutUsPage';

function Navigator() {

  const [openProfile, setOpenProfile] = React.useState(false);
  return (
    <div className="navContainer  flex justify-around items-center py-5">
		<a href="/" className='w-[20%]'>		
			<img src="/src/assets/SMARTFLORAx4.png" alt="" className="w-[80%]"/> 
		</a>
		<nav className = "navigator rounded-[20px] bg-gray-400 w-[70%] h-12  flex justify-around items-center">
			<a href="/pages/products">Productos</a>
			<a href="/pages/about">Sobre Nosotros</a>
			<a href="">Opiniones</a>
			<a href="">Soporte</a>
			
			<SearchBar/>

			<a href="/pages/car"> <img src="https://img.icons8.com/?size=100&id=9720&format=png&color=ccff67" alt="" className='h-10' /></a>
            <a  onClick={()=> setOpenProfile(!openProfile)}><img  src="/src/assets/icons8-usuario-masculino-en-círculo-50.png" alt="" className='h-10'/></a>
		</nav>

		{
			openProfile && <DropDownProfile /> 
		}
	</div>
	);
}

// <a target="_blank" href="https://icons8.com/icon/7819/male-user">Usuario masculino en círculo</a> icono de <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/ii6Lr4KivOiE/shopping-cart">Carrito de compras</a> icono de <a target="_blank" href="https://icons8.com">Icons8</a>
//#A5FC03 <a target="_blank" href="https://icons8.com/icon/j3XI41kBOIXY/shopping-cart">Cart</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
export default Navigator;
//Navegador del Home