import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

import imgSeverino from "../images/slideshow/matanzas/Castle-of-San-Severino-Matanzas-Cuba-18.jpg";
import imgMatanzas1 from "../images/slideshow/matanzas/Matanzas_from_Ermita_de_Monserrate_church.jpg";
import imgMatanzasOver from "../images/slideshow/matanzas/Matanzas-over.jpg";
import imgMatanzas0 from "../images/slideshow/matanzas/Matanzas.jpg";
import imgMatanzas2 from "../images/slideshow/matanzas/Matanzas2.jpg";

class TourMatanzas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {
        document.body.classList.add('TourMatanzas');
    }

    componentWillUnmount() {
        document.body.classList.remove('TourMatanzas');
    }

    resetFormElement = function (e) {
        console.log("reset from inside")
        e.wrap('<form>').closest('form').get(0).reset();
        e.unwrap();
    }

    render() {

        // https://github.com/maxmarinich/react-alice-carousel
        const handleDragStart = (e) => e.preventDefault();

        const itemsMatanzas = [
            <img src={imgSeverino} onDragStart={handleDragStart} role="presentation" alt="Severino" className="alice-carousel" />,
            <img src={imgMatanzas1} onDragStart={handleDragStart} role="presentation" alt="Castilio" className="alice-carousel" />,
            <img src={imgMatanzasOver} onDragStart={handleDragStart} role="presentation" alt="Catedral" className="alice-carousel" />,
            <img src={imgMatanzas0} onDragStart={handleDragStart} role="presentation" alt="Cecilia" className="alice-carousel" />,
            <img src={imgMatanzas2} onDragStart={handleDragStart} role="presentation" alt="Cemeterio" className="alice-carousel" />,

        ];

        const responsivity = {
            0: {
                items: 1,
            },
            1024: {
                items: 3
            }
        };


        return (
            <section className="page__section page__section_c">
                <div className="element heading">
                    <h2>Город Матансас (130 &euro;)</h2>
                </div>

                <div className="my-carousel">
                    <AliceCarousel mouseTracking
                        items={itemsMatanzas}
                        autoPlay='true'
                        infinite='true'
                        autoPlayInterval='2000'
                        autoPlayStrategy="all"
                        autoHeight='true'
                        responsive={responsivity}
                        disableButtonsControls='false'
                    // paddingLeft="10"
                    // paddingRight='10'
                    />
                </div>

                <div className="element description">
                    <p>
                        (город, река, пещера)
                    </p>
                </div>
            </section>
        );
    };
}

export default TourMatanzas;