
import cours from "../assets/coach.png" 
import prog from "../assets/prog2.png"  
import nutri from "../assets/nutri.png" 
import shop from "../assets/sop2.png" 

function Services() {
    return (
        <section className="services">
            <div className="container">
                <h3>Nos services</h3>
                <h2>Nos solutions pour une expérience enrichissante</h2>

                <div className="content">
                    <div>
                        <img src={prog} alt="" />
                        <h3>Cours de boxe pour tous</h3>
                        <p>De l'apprentissage de base pour les débutants à l'entraînement avancé pour les boxeurs expérimentés, vous bénéficiez de cours de boxe adapté à chaque type de profil avec les meilleurs équipements de boxe.</p>
                    </div>
                    <div>
                        <img src={cours} alt="" />
                        <h3>Coaching individuel & programme sur-mesure</h3>
                        <p>Chaque membre est confié à l'un de nos coachs certifié qui vous offrira un programme d'entraînement fait sur-mesure, pour vous apprendre ou vous perfectionner.</p>
                    </div>
                    <div>
                        <img src={nutri} alt="" />
                        <h3>Nutrition sportive & renforcement mental</h3>
                        <p>Vous bénéficiez de conseils en nutrition pour optimiser la performance et la récupération. Vous renforcerez également votre mental avec des techniques de gestion de stress et de concentration.</p>
                    </div>
                    <div>
                        <img src={shop} alt="" />
                        <h3>Boutique en ligne & vente sur place</h3>
                        <p>Nous mettons à votre disposition sur notre site et dans chaque club de boxe, une boutique pour vous offrir les meilleurs équipements, ainsi que des boissons et de la nourriture nutritives.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services