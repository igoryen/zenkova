import React from "react";
// import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

// carousel for Habana
// import imgCapitolio from "../images/slideshow/habana/capitolio.jpg";
// import imgCastillio from "../images/slideshow/habana/castillo.jpg";
// import imgCatedral from "../images/slideshow/habana/catedral_de_la_habana.jpg";
// import imgCecilia from "../images/slideshow/habana/sesilia.jpg";
// import imgCemeterio from "../images/slideshow/habana/cemeterio_de_cristobal_colon.jpg";
// import imgErnesto from "../images/slideshow/habana/ernesto.jpg";
// import imgHabanaVieja from "../images/slideshow/habana/habana_vieja.jpg";
// import imgHemingway from "../images/slideshow/habana/hemingway.jpg";
// import imgNight from "../images/slideshow/habana/night.jpg";
// import imgQuixote from "../images/slideshow/habana/quixote.jpg";
// import imgTerraced from "../images/slideshow/habana/terraced_houses.jpg";

class TourCaribes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {
        document.body.classList.add('TourCaribes');
    }

    componentWillUnmount() {
        document.body.classList.remove('TourCaribes');
    }

    resetFormElement = function (e) {
        console.log("reset from inside")
        e.wrap('<form>').closest('form').get(0).reset();
        e.unwrap();
    }

    render() {

        // https://github.com/maxmarinich/react-alice-carousel
        // const handleDragStart = (e) => e.preventDefault();

        // const itemsHabana = [
        //     <img src={imgCapitolio} onDragStart={handleDragStart} role="presentation" alt="Capitolio" className="alice-carousel" />,
        //     <img src={imgCastillio} onDragStart={handleDragStart} role="presentation" alt="Castilio" className="alice-carousel" />,
        //     <img src={imgCatedral} onDragStart={handleDragStart} role="presentation" alt="Catedral" className="alice-carousel" />,
        //     <img src={imgCecilia} onDragStart={handleDragStart} role="presentation" alt="Cecilia" className="alice-carousel" />,
        //     <img src={imgCemeterio} onDragStart={handleDragStart} role="presentation" alt="Cemeterio" className="alice-carousel" />,
        //     <img src={imgErnesto} onDragStart={handleDragStart} role="presentation" alt="Ernesto" className="alice-carousel" />,
        //     <img src={imgHabanaVieja} onDragStart={handleDragStart} role="presentation" alt="Habana Vieja" className="alice-carousel" />,
        //     <img src={imgHemingway} onDragStart={handleDragStart} role="presentation" alt="Hemingway" className="alice-carousel" />,
        //     <img src={imgNight} onDragStart={handleDragStart} role="presentation" alt="Night" className="alice-carousel" />,
        //     <img src={imgQuixote} onDragStart={handleDragStart} role="presentation" alt="Quixote" className="alice-carousel" />,
        //     <img src={imgTerraced} onDragStart={handleDragStart} role="presentation" alt="Terraced houses" className="alice-carousel" />,
        // ];

        // const responsivity = {
        //     0: {
        //         items: 1,
        //     },
        //     1024: {
        //         items: 3
        //     }
        // };


        return (
            <section className="page__section page__section_b">
                <div className="element heading">
                    <h2>Карибы (160 &euro;)</h2>
                </div>
                <div className="element description">
                    <p>
                        (Крокодиловая ферма)  евро на ретроавтомобиле. 160 на современном автомобиле.
                    </p>
                </div>
            </section>
        );
    };
}

export default TourCaribes;