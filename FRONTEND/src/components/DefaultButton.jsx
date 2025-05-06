import './DefaultButton.css'

function DefaultButton(props){
    return(
        <button className="bg-green-400 w-60 h-12">
             {props.title}
        </button>
        
    )
}

//para poner un titulo custom en cada boton, 
//Ir al Home.jsx, escribir el componente y dentro
//escribir title="" el nombre que querais



export default DefaultButton
//aspecto default para los botones de la pagina