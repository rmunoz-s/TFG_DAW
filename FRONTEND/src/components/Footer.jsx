function Footer(){
    return(
        <footer className="text-white bg-[#1d1d1d] h-[58vh] w-full m-0 p-0 box-border flex flex-col items-center justify-center text-center">

            <div className=" footerContainer flex flex-row items-center justify-center gap-[300px]  text-base" >
                <div className="columnaLinks flex flex-col gap-[30px] columnaLinks">
                    <a href="" className="columnaLink">Sobre nosotros</a>
                    <a href="" className="columnaLink">Terminos de compra</a>
                    <a href="" className="columnaLink">Devoluciones</a>
                    <a href="" className="columnaLink">Q&A</a>
                    <a href="" className="columnaLink">Shipping</a>
                </div>
                <div className="columnaLinks flex flex-col gap-[30px] columnaLinks">
                    <a href="" className="columnaLink">Proveedores</a>
                    <a href="" className="columnaLink">Sostenibilidad</a>
                    <a href="" className="columnaLink">Seguro SmartPrevent</a>
                    <a href="" className="columnaLink">Partners</a>
                    <a href="" className="columnaLink">Nuestro equipo</a>
                </div>
                
            </div>
                
           
            <div className=" h-8 w-1/4 flex flex-col justify-center items-center mt-28">
                <img src="/src/assets/SMARTFLORA.jpg" alt="" className="SmartFlora-LogoFooter h-[20px]" />
                <p className="text-xs">@Copyrighted in 2025</p>
            </div>
            
        </footer>
    )
}

export default Footer;