import Footer               from "../components/Footer"
import Header               from "../components/Header"
import fb                   from "../assets/fb.png"
import ig                   from "../assets/ig.png"
import tk                   from "../assets/tk.png"
import yt                   from "../assets/yt.png"
import vincente             from "../assets/vincente.jpg"
import guillaume            from "../assets/guillaume.jpg"
import elodie               from "../assets/elodie.jpg"
import medhi                from "../assets/medhi.jpg"
import hugo                 from "../assets/hugo.jpg"
import aly                  from "../assets/aly.jpg"
import irgov                from "../assets/irgov.jpg"
import paulo                from "../assets/paulo.jpg"

function APropos() {
    return (
        <>
        <Header />
        <header className="shop-header">
            <div>
                <h1>À propos</h1>
            </div>
        </header>

        <section className="apropos" style={{paddingTop: "100px"}}> 
            <h3 style={{color: "#EA1C29", textTransform: "uppercase", fontSize: "16px", textAlign: "center"}}>Notre team</h3>
            <h2 style={{fontFamily: "Anton", fontSize: "50px", fontWeight: "400", marginTop: "10px", marginBottom: "30px", textAlign: "center"}}>Des coachs professionnels prêts à vous offrir les meilleurs entraînements</h2>

            <div className="content" style={{display: "flex", flexWrap: "wrap", justifyContent: "center", margin: "100px"}}>
                <div className="box" style={{width: "20%", margin: "20px", height: "400px", position: "relative"}}>
                    <img src={guillaume} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", borderTopRightRadius: "80px", borderBottomLeftRadius: "80px"}} />
                    <div className="box-icons" style={{position: "absolute", background: "white", padding: "10px 20px", bottom: "10px", width: "90%", left: "50%", translate: "-50%", borderBottomLeftRadius: "80px"}}>
                        <p style={{marginBottom: "10px", fontWeight: "bold", fontSize: "20px", textAlign: "right", marginRight: "10px"}}>Guillaume</p>
                        <div className="icons" style={{display: "flex", flexDirection: "row-reverse", paddingBottom: "10px"}}>
                            <img src={fb} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={ig} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={tk} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={yt} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                        </div>
                    </div>
                </div>
                <div className="box" style={{width: "20%", margin: "20px", height: "400px", position: "relative"}}>
                    <img src={vincente} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", borderTopRightRadius: "80px", borderBottomLeftRadius: "80px"}}  />
                    <div className="box-icons" style={{position: "absolute", background: "white", padding: "10px 20px", bottom: "10px", width: "90%", left: "50%", translate: "-50%", borderBottomLeftRadius: "80px"}}>
                        <p style={{marginBottom: "10px", fontWeight: "bold", fontSize: "20px", textAlign: "right", marginRight: "10px"}}>Vincente</p>
                        <div className="icons" style={{display: "flex", flexDirection: "row-reverse", paddingBottom: "10px"}}>
                        <img src={fb} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={ig} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={tk} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={yt} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                        </div>
                    </div>
                </div>
                <div className="box" style={{width: "20%", margin: "20px", height: "400px", position: "relative"}}>
                    <img src={elodie} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", borderTopRightRadius: "80px", borderBottomLeftRadius: "80px"}}  />
                    <div className="box-icons" style={{position: "absolute", background: "white", padding: "10px 20px", bottom: "10px", width: "90%", left: "50%", translate: "-50%", borderBottomLeftRadius: "80px"}}>
                        <p  style={{marginBottom: "10px", fontWeight: "bold", fontSize: "20px", textAlign: "right", marginRight: "10px"}}>Elodie</p>
                        <div className="icons" style={{display: "flex", flexDirection: "row-reverse", paddingBottom: "10px"}}>
                        <img src={fb} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={ig} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={tk} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={yt} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                        </div>
                    </div>
                </div>
                <div className="box" style={{width: "20%", margin: "20px", height: "400px", position: "relative"}}>
                    <img src={medhi} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", borderTopRightRadius: "80px", borderBottomLeftRadius: "80px"}}  />
                    <div className="box-icons" style={{position: "absolute", background: "white", padding: "10px 20px", bottom: "10px", width: "90%", left: "50%", translate: "-50%", borderBottomLeftRadius: "80px"}}>
                        <p style={{marginBottom: "10px", fontWeight: "bold", fontSize: "20px", textAlign: "right", marginRight: "10px"}}>Medhi</p>
                        <div className="icons" style={{display: "flex", flexDirection: "row-reverse", paddingBottom: "10px"}}>
                        <img src={fb} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={ig} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={tk} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={yt} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                        </div>
                    </div>
                </div>
                <div className="box" style={{width: "20%", margin: "20px", height: "400px", position: "relative"}}>
                    <img src={hugo} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", borderTopRightRadius: "80px", borderBottomLeftRadius: "80px"}}  />
                    <div className="box-icons" style={{position: "absolute", background: "white", padding: "10px 20px", bottom: "10px", width: "90%", left: "50%", translate: "-50%", borderBottomLeftRadius: "80px"}}>
                        <p  style={{marginBottom: "10px", fontWeight: "bold", fontSize: "20px", textAlign: "right", marginRight: "10px"}}>Hugo</p>
                        <div className="icons" style={{display: "flex", flexDirection: "row-reverse", paddingBottom: "10px"}}>
                        <img src={fb} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={ig} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={tk} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={yt} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                        </div>
                    </div>
                </div>
                <div className="box" style={{width: "20%", margin: "20px", height: "400px", position: "relative"}}>
                    <img src={aly} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", borderTopRightRadius: "80px", borderBottomLeftRadius: "80px"}}  />
                    <div className="box-icons" style={{position: "absolute", background: "white", padding: "10px 20px", bottom: "10px", width: "90%", left: "50%", translate: "-50%", borderBottomLeftRadius: "80px"}}>
                        <p  style={{marginBottom: "10px", fontWeight: "bold", fontSize: "20px", textAlign: "right", marginRight: "10px"}}>Aly</p>
                        <div className="icons" style={{display: "flex", flexDirection: "row-reverse", paddingBottom: "10px"}}>
                        <img src={fb} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={ig} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={tk} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={yt} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                        </div>
                    </div>
                </div>
                <div className="box" style={{width: "20%", margin: "20px", height: "400px", position: "relative"}}>
                    <img src={irgov} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", borderTopRightRadius: "80px", borderBottomLeftRadius: "80px"}}  />
                    <div className="box-icons" style={{position: "absolute", background: "white", padding: "10px 20px", bottom: "10px", width: "90%", left: "50%", translate: "-50%", borderBottomLeftRadius: "80px"}}>
                        <p  style={{marginBottom: "10px", fontWeight: "bold", fontSize: "20px", textAlign: "right", marginRight: "10px"}}>Irgov</p>
                        <div className="icons" style={{display: "flex", flexDirection: "row-reverse", paddingBottom: "10px"}}>
                        <img src={fb} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={ig} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={tk} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={yt} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                        </div>
                    </div>
                </div>
                <div className="box" style={{width: "20%", margin: "20px", height: "400px", position: "relative"}}>
                    <img src={paulo} alt="" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", borderTopRightRadius: "80px", borderBottomLeftRadius: "80px"}} />
                    <div className="box-icons" style={{position: "absolute", background: "white", padding: "10px 20px", bottom: "10px", width: "90%", left: "50%", translate: "-50%", borderBottomLeftRadius: "80px"}}>
                        <p  style={{marginBottom: "10px", fontWeight: "bold", fontSize: "20px", textAlign: "right", marginRight: "10px"}}>Paulo</p>
                        <div className="icons" style={{display: "flex", flexDirection: "row-reverse", paddingBottom: "10px"}}>
                        <img src={fb} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={ig} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={tk} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                            <img src={yt} alt="" style={{background: "#EA1C29", padding: "4px", marginRight: "10px", cursor: "pointer"}} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default APropos