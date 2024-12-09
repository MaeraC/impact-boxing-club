
import logo from "../assets/logo.png"
import fb from "../assets/fb.png"
import ig from "../assets/ig.png"
import tk from "../assets/tk.png"
import yt from "../assets/yt.png"
import email from "../assets/email.png"
import phone from "../assets/phone.png"

function Footer() {
    return (
        <footer>
            <div className="content">
                <div className="logo">
                    <img src={logo} alt="" />
                    <p>Votre référence pour des entraînements sur-mesure avec un coach personnalisé pour chacun de nos membres.</p>
                </div>
                <div className="horaires">
                    <h3>Horaires</h3>
                    <p>Lundi : 6h - 23h</p>
                    <p>Mardi : 6h - 23h</p>
                    <p>Mercredi : 6h - 23h</p>
                    <p>Jeudi : 6h - 23h</p>
                    <p>Vendredi : 6h - 23h</p>
                    <p>Samedi : 6h - 23h</p>
                    <p>Dimanche : 7h - 22h</p>
                </div>
                <div className="contact">
                    <h3>Contact</h3>
                    <div>
                        <img src={phone} alt="" />
                        <p>01 45 83 52 33</p>
                    </div>
                    <div>
                        <img src={email} alt="" />
                        <p>contact@impact-boxing-club.fr</p>
                    </div>
                    <div>
                        <img src={fb} alt="" />
                        <img src={ig} alt="" />
                        <img src={tk} alt="" />
                        <img src={yt} alt="" />
                    </div>
                </div>
                <div className="newsletter">
                    <h3>Inscrivez-vous à notre newsletter</h3>
                    <div>
                        <input type="email" placeholder="Entrez votre e-mail" />
                        <button>M'inscrire</button>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright Impact Boxing Club ©️2024. Tous droits réservés.</p>
                <p>Mentions légales - Politique de confidentalité - Politique générale de vente</p>
            </div>
        </footer>
    )
}

export default Footer