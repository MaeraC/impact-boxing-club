
import check from "../assets/check.png"
import pricing1 from "../assets/pricing1.jpg"
import pricing2 from "../assets/pricing2.jpg"

function Pricing() {
    return (
        <section className="pricing">
            <div className="container">
                <div className="titles">
                    <h3>Nos tarifs</h3>
                    <h2>Choisissez votre abonnement à un prix imbattable</h2>               
                </div>
                <div className="content">
                    <article>
                        <img src={pricing1} alt="" />
                        <div className="info">
                            <div className="price-abs">
                                <p className="prix">9,99€</p>
                                <p className="mensuel">Mensuel</p>
                            </div>
                            <h4>Engagement de 1 an</h4>
                            <ul>
                                <li><img src={check} alt="" />Coach personnel certifié</li>
                                <li><img src={check} alt="" />Programme d'entraînement sur-mesure</li>
                                <li><img src={check} alt="" />Accompagnement en nutrition</li>
                                <li><img src={check} alt="" />Accompagnement en renforcement mental</li>
                                <li><img src={check} alt="" />Accès à notre boutique</li> 
                            </ul>
                            <button className="button">Rejoindre</button>
                        </div>
                        
                    </article>
                    <article>
                        <img src={pricing2} alt="" />
                        <div className="info">
                            <div className="price-abs abs2">
                                <p className="prix">18,99€</p>
                                <p className="mensuel">Mensuel</p>
                            </div>
                            <h4>Sans engagement</h4>
                            <ul>
                                <li><img src={check} alt="" />Coach personnel certifié</li>
                                <li><img src={check} alt="" />Programme d'entraînement sur-mesure</li>
                                <li><img src={check} alt="" />Accompagnement en nutrition</li>
                                <li><img src={check} alt="" />Accompagnement en renforcement mental</li>
                                <li><img src={check} alt="" />Accès à notre boutique</li> 
                            </ul>
                            <button className="button">Rejoindre</button>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default Pricing