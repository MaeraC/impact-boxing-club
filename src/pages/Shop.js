import Header from "../components/Header"
import gants from "../assets/gants.png"
import bandage from "../assets/bandage.png"
import dents from "../assets/dents.png"
import corde from "../assets/corde.png"
import sac from "../assets/sacfrappe.png"
import mitaine from "../assets/mitaine.png"
import casque from "../assets/casque.png"
import coquille from "../assets/coquille.png"
import chaussure from "../assets/chaussure.png"
import protegetibia from "../assets/protegetibia.png"
import genouillere from "../assets/genouillere.png"
import coudiere from "../assets/coudiere.png"
import Footer from "../components/Footer"

function Shop() {
    return (
        <> 
        <Header /> 
        <header className="shop-header">
            <div>
                <h1>Boutique</h1>
            </div>
        </header>

        <div className="shop-page-content">
                    <article>
                        <img src={gants} alt="" />
                        <div>
                            <p>Gants de boxe</p>
                            <p>24.99€</p>
                        </div>
                        <button>Acheter</button>
                    </article>
                    <article>
                        <img src={bandage} alt="" />
                        <div>
                            <p>Bandages</p>
                            <p>2.95€</p>
                        </div>
                        <button>Acheter</button>
                    </article>
                    <article>
                        <img src={dents} alt="" />
                        <div>
                            <p>Protège-dents</p>
                            <p>2.99€</p>
                        </div>
                        <button>Acheter</button>
                    </article>
                    <article>
                        <img src={corde} alt="" />
                        <div>
                            <p>Corde à sauter</p>
                            <p>5.50€</p>
                        </div>
                        <button>Acheter</button>
                    </article>
                    <article>
                        <img src={sac} alt="" />
                        <div>
                            <p>Sac de frappe</p>
                            <p>35€</p>
                        </div>
                        <button>Acheter</button>
                    </article>
                    <article>
                        <img src={casque} alt="" />
                        <div>
                            <p>Casque de boxe</p>
                            <p>9.25€</p>
                        </div>
                        <button>Acheter</button>
                    </article>
                    
                    <article>
                        <img src={mitaine} alt="" />
                        <div>
                            <p>Mitaines de boxe</p>
                            <p>8.95€</p>
                        </div>
                        <button>Acheter</button>
                    </article>
                    <article>
                        <img src={protegetibia} alt="" />
                        <div>
                            <p>Protège-tibia</p>
                            <p>10.99€</p>
                        </div>
                        <button>Acheter</button>
                    </article>
                    <article>
                        <img src={genouillere} alt="" />
                        <div>
                            <p>Genouillière</p>
                            <p>5.95€</p>
                        </div>
                        <button>Acheter</button>
                    </article>
                    <article>
                        <img src={coudiere} alt="" />
                        <div>
                            <p>Coudière</p>
                            <p>4.95€</p>
                        </div>
                        <button>Acheter</button>
                    </article>
                    <article>
                        <img src={coquille} alt="" />
                        <div>
                            <p>Coquille</p>
                            <p>4.50€</p>
                        </div>
                        <button>Acheter</button>
                    </article>
                    <article>
                        <img src={chaussure} alt="" />
                        <div>
                            <p>Chaussures de boxe</p>
                            <p>19.50€</p>
                        </div>
                        <button>Acheter</button>
                    </article>
            </div>

        <Footer />
        </>
    )
}

export default Shop
