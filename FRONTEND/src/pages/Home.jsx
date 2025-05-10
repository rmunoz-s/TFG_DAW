import { useEffect, useState } from "react";

import Navigator from "../components/Navigator"
import DefaultButton from "../components/DefaultButton"
import HomeCard from "../components/homeCard"
import './Home.css'
import HeaderModel from "../components/headerModel"


function Home(){
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await fetch("http://localhost:3000/productos"); // Ruta del backend
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <p className="text-center text-white">Loading products...</p>;
    }

    return(
        <>
        <header>
            
                <Navigator/>


            <div className="headerDesc-Container">
                <div className="headerDesc">
                    <h1>EASTERN GARDEN XR100</h1>
                    <p>Easter season is coming and our Eastern Garden <br /> 
                    XR100 is waiting to be premiered by the Eastern Bunny! </p>
                    <p>Buy now and get a special discount</p>
                
                    <p><span className="headerStar">☆</span><a href="">Tenemos un 20% de descuento para new users
                    </a></p>
                    <DefaultButton title='Discover'/> 
               
            
                </div>
                <div className="headerModel">
                    <HeaderModel/>
                </div>
            </div>
        </header>

        <section className="section1">
            <div className="section1-Container">
                <div className="section1-Content">
                    <h1>Hola hola hola</h1>
                    <p>En un mundo donde todo evoluciona, tu manera de cuidar las <br /> plantas también puede hacerlo.
                        Nuestras  <br /> inteligentes no son solo un accesorio decorativo: <br />son una solución innovadora para quienes quieren conectar <br />
                        con la naturaleza de forma práctica, eficiente y tecnológica.</p>
                        < div className="section1-Button">
                        <DefaultButton title="Saber Mas"/>
                        </div> 
                </div>
                     
            </div>
           
        </section>

        <section className="section2">

            <div className="section2-title">
                <img src="./src/assets/Vector.jpg" alt="" className="section2-Arrow" />
                <h1>ENJOY A VARIETY OF PRODUCTS NOW</h1>
            </div>

        <div className="section2-cards-Container">
          {products.map((product) => (
            <HomeCard
              key={product._id}
              title={product.name}
              desc={product.description}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
            
        </section>

        <section className="section3">
            <div>

            </div>
        </section>

        <footer>
            <div className="columnaLinks">
                <a href="" className="columnaLink">Sobre nosotros</a>
                <a href="" className="columnaLink">Terminos de compra</a>
                <a href="" className="columnaLink">Devoluciones</a>
                <a href="" className="columnaLink">Terminos de compra</a>
                <a href="" className="columnaLink">Sobre nosotros</a>
            </div>
            <div className="columnaLinks"></div>
                <a href="" className="columnaLink">Sobre nosotros</a>
                <a href="" className="columnaLink">Terminos de compra</a>
                <a href="" className="columnaLink">Devoluciones</a>
                <a href="" className="columnaLink">Terminos de compra</a>
                <a href="" className="columnaLink">Sobre nosotros</a>
            <div>
            <img src="./assets/SMARTFLORA.jpg" alt="" className="SmartFlora-LogoFooter" />
            <p></p>
            </div>
        </footer>
        </>
    )
}

export default Home