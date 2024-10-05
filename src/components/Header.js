
import { Link } from "react-router-dom"
import { useState } from "react"
import logo from "../assets/logo.png" 
import shop from "../assets/shop.png"
import account from "../assets/account.png"
import close from "../assets/close.png"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="header">
            <img src={logo} alt="" />
            <nav className={isMenuOpen ? "open" : ""}>
                <div>
                    <Link to="/">Accueil</Link>
                    <Link to="/">Nos clubs</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/boutique">Boutique</Link>
                    <Link to="/">À propos</Link>
                    <Link to="/">Contact</Link>
                </div>
                <div>
                    <button className="shop"><img src={shop} alt="" /></button>
                    <button className="account"><img src={account} alt="" /></button>
                </div>

                {isMenuOpen && (
                    <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
                        <img src={close} alt="" />
                    </button>
                )}
                
            </nav>
            
            {isMenuOpen && (
                <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    &#9776;
                </button>
            )}
            

            <button className="button">M'inscrire</button>
        </header>
    )
}

export default Header