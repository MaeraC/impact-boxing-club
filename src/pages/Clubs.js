import Footer from "../components/Footer";
import Header from "../components/Header";



function Clubs() {
    return (
        <>
        <Header />
        <header className="shop-header">
            <div>
                <h1>Nos clubs</h1>
            </div>
        </header>
        <section className="clubs">
            <p>Espace musculation</p>
            <p>Espace ring</p>
            <p>Espace boxing</p>
        </section>
        <Footer />
        </>
    )
}

export default Clubs