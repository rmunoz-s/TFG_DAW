import './DefaultButton.css'

function DefaultButton(){
    return(
        <button className="bg-green-400 w-70 h-10">
             <ButtonText/>
        </button>
        
    )
}

function ButtonText({text}){
    return(
        <div>
            <p>{text}</p>
        </div>
    )
}

export default DefaultButton
//aspecto default para los botones de la pagina