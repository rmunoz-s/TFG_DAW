import DefaultButton from "./DefaultButton"

function HomeCard(props){
    return(
        <div className="w-1/3 h-1/3 text-white border">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <DefaultButton title="Check Out"></DefaultButton>
        </div>
    )
}
export default HomeCard
//cards de la seccion 3 sobre los productos de la tienda.
//puse HomeCard para especificar que son los cards del Home, 
//ya que la tienda tambien los tendra
