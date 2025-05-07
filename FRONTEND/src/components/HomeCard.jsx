import { useState } from "react"
import DefaultButton from "./DefaultButton"

function HomeCard(props){

    const[bgImage, setBgImage] = useState([]);

    const images = [
        '/src/assets/card1.jpg',
        '/src/assets/card2.jpg',
        '/src/assets/card3.jpg',
        '/src/assets/card4.jpg'
    ];

    
    
    return(
        <div className="w-50 h-1/2 text-white border p-10 flex flex-col text-center justify-center gap-10 bg-[url(/src/assets/card1.jpg)] bg-cover">
            <h2 className="text-[30px]">{props.title}</h2>
            <p>{props.desc}</p>
            <div>
                <DefaultButton title="Check Out"></DefaultButton>
            </div>
        </div>
    )
}
export default HomeCard
//cards de la seccion 3 sobre los productos de la tienda.
//puse HomeCard para especificar que son los cards del Home, 
//ya que la tienda tambien los tendra
