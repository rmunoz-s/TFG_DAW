import HomeCard from "./HomeCard";
import { useState, useEffect } from "react";
function CestaSlider() {



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

    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })

    return (

        <section className=" w-full bg-black-900 h-96 flex justify-center relative overflow-hidden mb-20 mt-20">

            <button className="pre-btn border-none w-[10vw] h-full absolute top-0 flex justify-center items-center  cursor-pointer z-[8] left-0 rotate-180">
                <img src="https://img.icons8.com/?size=100&id=7849&format=png&color=ccff67" alt="" className="w-[30%]" />
            </button>
            <button className="nxt-btn border-none w-[10vw] h-full absolute top-0 flex justify-center items-center  cursor-pointer z-[8] right-0 ">
                <img src="https://img.icons8.com/?size=100&id=7849&format=png&color=ccff67" alt="" className="w-[30%]" />
            </button>

            <div className=" w-4/6 product-container px-[-50vw] flex  overflow-hidden scroll-smooth items-center scroll  ">
                <div className="card-list grid grid-flow-col gap-4">
                    {products.map((product) => (
                        <HomeCard
                            key={product._id}
                            title={product.name}
                            desc={product.description}
                            product={product}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CestaSlider;