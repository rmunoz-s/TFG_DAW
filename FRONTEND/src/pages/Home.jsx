import Navigator from "../components/Navigator"
import DefaultButton from "../components/DefaultButton"
import HomeCard from "../components/homeCard"
import './Home.css'



function Home(){

    return(
        <>
        <header>
            <div className="nav-Container">
                <Navigator/>
            </div>

            <div className="headerDesc-Container">
                <div>
                    <h1>EASTERN GARDEN XR100</h1>
                    <p>Easter season is coming and our Eastern Garden <br /> 
                    XR100 is waiting to be premiered by the Eastern Bunny! </p>
                    <p>Buy now and get a special discount</p>

                    <DefaultButton text='Discover'/> 
                </div>
                <div>
                    
                </div>
            </div>
        </header>

        <section className="section1">
            <div className="section1-Container">
                <h2></h2>
                <p></p>
                <DefaultButton text='Saber Mas'/>
            </div>
        </section>

        <section className="section2">

            <div className="section2-cards-Container">
                <HomeCard/>
                <HomeCard/>
                <HomeCard/>
                <HomeCard/>
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