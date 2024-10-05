import { Link } from "react-router-dom"
import fb from "../assets/fb.png"
import ig from "../assets/ig.png"
import tk from "../assets/tk.png"
import yt from "../assets/yt.png"
import Avantages from "./Avantages"



function Hero() {
    return (
        <section className="hero">
            <div className="content">
                <h2>Le nouveau club d'exception</h2>
                <h1>Devenez une légende</h1>
                <p>Rejoignez notre <strong>club de boxe</strong> pour des sessions d'entraînement qui vous poussent à <strong>dépasser vos limites</strong>.</p>
                <button className="button">Nous rejoindre</button>

                <aside>
                    <Link><img src={fb} alt="" /></Link>
                    <Link><img src={ig} alt="" /></Link>
                    <Link><img src={tk} alt="" /></Link>
                    <Link><img src={yt} alt="" /></Link>
                </aside>
            </div>

            <Avantages />
        </section>
    )
}

export default Hero