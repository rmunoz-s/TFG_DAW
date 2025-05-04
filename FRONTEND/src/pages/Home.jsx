import Navigator from "../components/Navigator"
import DefaultButton from "../components/DefaultButton"

function Home(){

    return(
        <>
        <header>
            <div className="nav-Container">
                <img src="./assets/SMARTFLORA.jpg" alt="" className="SmartFlora-Logo" />
                <Navigator>

                </Navigator>
            </div>

            <div className="headerDesc-Container">
                <div>
                    <h1></h1>
                    <p></p>
                    <p></p>

                    <DefaultButton text='Discover'/> 
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
                
            </div>
        </section>

        <section>

        </section>

        <footer>

        </footer>
        </>
    )
}