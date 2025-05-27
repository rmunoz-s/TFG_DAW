import { useEffect, useState } from "react";
import Navigator from "../components/Navigator"
import DefaultButton from "../components/DefaultButton"
import HomeCard from "../components/HomeCard";
import './Home.css'
import Footer from "../components/Footer";
import CestaSlider from "../components/CestaSlider";



function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("http://localhost:3000/productos");
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

    return (
        <>
            <header className="h-[100%] ">


                <Navigator />


                <div className="headerDesc-Container w-[100%] ">
                    <div className="headerDesc ">
                        <h1>EASTERN GARDEN XR100</h1>
                        <p>Easter season is coming and our Eastern Garden <br />
                            XR100 is waiting to be premiered by the Eastern Bunny! </p>
                        <p>Buy now and get a special discount</p>

                        <p><span className="headerStar">☆</span><a href="">Tenemos un 20% de descuento para new users
                        </a></p>
                        <DefaultButton title='DISCOVER' />


                    </div>
                    <div className="headerModel flex justify-center">
                        <img src="/src/assets/macetas-banner.png" className="w-[70%] :" alt="" />
                    </div>
                </div>
            </header>

            <section className="section1">
                <div className="section1-Content">
                    <h1>POR QUE UTILIZAR SMARTFLORA?</h1>
                    <p>En un mundo donde todo evoluciona, tu manera de cuidar las <br /> plantas también puede hacerlo.
                        Nuestras  <br /> inteligentes no son solo un accesorio decorativo: <br />son una solución innovadora para quienes quieren conectar <br />
                        con la naturaleza de forma práctica, eficiente y tecnológica.</p>
                    < div className="section1-Button">
                        <DefaultButton title="SABER MAS" />
                    </div>
                </div>
            </section>


            <section className="section2">

                <div className="section2-title">
                    <img src="./src/assets/Vector.png" alt="" className="section2-Arrow" />
                    <h1>ENJOY A VARIETY OF PRODUCTS NOW</h1>
                </div>

                <div className="section2-cards-Container">
                    {products.slice(0, 4).map((product) => (
                        <HomeCard
                            key={product._id}
                            title={product.name}
                            desc={product.description} ç
                            product={product}
                        />
                    ))}

                </div>

            </section>

            <section className="section3">
                <div className="section1-graph">
                    <div className="section1-graph-images">
                        <img src="/src/assets/slider1.jpg" alt="" />
                        <img src="/src/assets/slider2.jpg" alt="" />
                        <img src="/src/assets/slider3.jpg" alt="" />
                        <img src="/src/assets/slider4.jpg" alt="" />
                        <img src="/src/assets/slider5.jpg" alt="" />
                        <img src="/src/assets/slider6.jpg" alt="" />
                        <img src="/src/assets/slider1.jpg" alt="" />
                    </div>
                </div>

                <div className="section3-Content">
                    <h1>¿Por qué elegir macetas inteligentes?</h1>
                    <p>
                        Las macetas inteligentes son la solución perfecta para quienes desean cuidar sus plantas de manera eficiente y sin complicaciones. Gracias a su tecnología avanzada, estas macetas monitorean constantemente las necesidades de tus plantas, como la humedad del suelo, la luz y los nutrientes, asegurando un crecimiento saludable y vibrante.
                    </p>
                    <p>
                        Además, estas macetas están diseñadas para adaptarse a tu estilo de vida moderno. Con notificaciones en tiempo real a través de tu smartphone, nunca olvidarás regar tus plantas o ajustar su exposición a la luz. Esto las convierte en una herramienta ideal tanto para principiantes como para expertos en jardinería.
                    </p>
                    <p>
                        También ayudan a optimizar el uso de recursos, como el agua, al regar solo cuando es necesario. Esto no solo beneficia a tus plantas, sino que también contribuye al cuidado del medio ambiente, promoviendo un estilo de vida más sostenible.
                    </p>
                    <p>
                        Con un diseño elegante y funcional, las macetas inteligentes no solo cuidan de tus plantas, sino que también embellecen cualquier espacio, ya sea tu hogar, oficina o jardín. ¡Descubre cómo la tecnología puede transformar tu conexión con la naturaleza!
                    </p>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Home