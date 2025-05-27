
function DefaultButton(props){
    return(
        <button className="bg-lime-400 border-2 rounded-md border-lime-100 text-black font-semibold tracking-wide w-60 h-11">
             {props.title}
             {props.type}
        </button>
        
    )
}

//para poner un titulo custom en cada boton, 
//Ir al Home.jsx, escribir el componente y dentro
//escribir title="" el nombre que querais



export default DefaultButton
//aspecto default para los botones de la pagina