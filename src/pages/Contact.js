import Footer               from "../components/Footer";
import Header               from "../components/Header";
import support              from "../assets/support.jpg"
import fb                   from "../assets/fb.png"
import ig                   from "../assets/ig.png"
import tk                   from "../assets/tk.png"
import yt                   from "../assets/yt.png"


function Contact() {
    return (
        <>
        <Header />
        <header className="shop-header">
            <div>
                <h1>Contact</h1>
            </div>
        </header>
        <section className="contact-page" style={{margin: "100px"}}>
            

            <div className="txt" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img className="img" src={support} alt="" style={{width: "45%", objectFit: "cover", height: "800px", marginRight: "50px"}} />

                <div className="form" style={{width: "45%"}}>
                    <h3 style={{color: "#EA1C29", textTransform: "uppercase", fontSize: "16px"}}>support client 24h/7</h3>
                    <h2 style={{fontFamily: "Anton", fontSize: "50px", fontWeight: "400", marginTop: "10px", marginBottom: "50px"}}>Notre équipe est prête à vous répondre</h2>

                    <form style={{display: "flex", flexDirection: "column"}}>
                        <input type="text" placeholder="Votre nom" style={{boxShadow: "grey 1px 1px 20px", border: "none", borderRadius: "30px", padding: "20px", fontSize: "15px", marginBottom: "30px"}} />
                        <input type="email" placeholder="Votre adresse e-mail" style={{boxShadow: "grey 1px 1px 20px", border: "none", borderRadius: "30px", padding: "20px", fontSize: "15px", marginBottom: "30px"}} />
                        <textarea placeholder="Ecrivez votre message" style={{boxShadow: "grey 1px 1px 20px", border: "none", borderRadius: "30px", padding: "20px", fontSize: "15px", height: "200px"}}></textarea>
                    </form>
                </div>
            </div>

            <div style={{display: "flex", margin: "100px 0", justifyContent: "center"}}>
                <img src={fb} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "20px", cursor: "pointer", width: "50px"}} />
                <img src={ig} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "20px", cursor: "pointer", width: "50px"}} />
                <img src={tk} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "20px", cursor: "pointer", width: "50px"}} />
                <img src={yt} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer", width: "50px"}} />
            </div>
        </section>
        <Footer />
        </>
    )
}

export default Contact