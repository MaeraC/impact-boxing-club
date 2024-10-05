
import prog from "../assets/prog.png"
import coach from "../assets/coach.png"
import prix from "../assets/prix.png"
import ville from "../assets/ville.png"

function Avantages() {
    return (
        <section className="avantages">
            <div>
                <img src={coach} alt="" />
                <p>Un coach sportif certifié pour chaque membre</p>
            </div>
            <div>
                <img src={prog} alt="" />
                <p>Un programme personnalisé fait sur-mesure</p>
            </div>
            <div>
                <img src={prix} alt="" />
                <p>Un abonnement à un prix imbattable</p>
            </div>
            <div>
                <img src={ville} alt="" />
                <p>Un club de boxe installé dans toutes les villes de France</p>
            </div>
        </section>
    )
}

export default Avantages