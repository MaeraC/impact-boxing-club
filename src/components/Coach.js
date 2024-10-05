
import coach from "../assets/coach1.jpg"

function Coach() {
    return (
        <section className="coach">
            <div className="img">
                <img src={coach} alt="" />
            </div>
            <div className="txt">
                <h3>Votre réussite, notre mission</h3>
                <h2>Un coach dédié à votre réussite</h2>
                <p>Dans nos clubs de boxe, chaque boxeur reçoit un <strong>coach personnel</strong> qui l’accompagne à chaque étape. Que vous soyez débutant ou expérimenté, votre coach est là pour vous motiver, affiner votre technique et <strong>vous amener au sommet</strong>. Ensemble, vous travaillerez sur vos forces, corrigerez vos faiblesses, et repousserez vos limites. C'est avec ce <strong>soutien</strong> que vous progresserez, coup après coup, jusqu'à devenir la <strong>meilleure version de vous-même</strong>.</p>
                <figcaption>Un combattant n'est rien sans un mentor pour le pousser plus loin.</figcaption>
            </div>
        </section>
    )
}

export default Coach