
import gants from "../assets/gants.png"
import bandage from "../assets/bandage.png"
import dents from "../assets/dents.png"
import corde from "../assets/corde.png"

function Shop() {
    return (
        <section className="shop-section">
                <div className="titles">
                    <h3>La boutique</h3>
                    <h2>Les meilleurs équipements aux meilleurs prix</h2>               
                </div>
                <div className="content">
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
                </div>
        </section>
    )
}

export default Shop