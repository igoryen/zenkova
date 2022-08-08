import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';




// carousel Trinidad y Cienfuegos
import imgCienJagua from "../images/slideshow/trinidad-cien/cien-jagua.jpg";
import imgCienStatue from "../images/slideshow/trinidad-cien/cien-statue.jpg";
import imgCienView from "../images/slideshow/trinidad-cien/cien-view.jpeg";
import imgCienMalecon from "../images/slideshow/trinidad-cien/Cienfuegos-Malecon.jpg";
import imgCienOver from "../images/slideshow/trinidad-cien/cienfuegos-over.jpg";
import imgCien2 from "../images/slideshow/trinidad-cien/cienfuegos2.jpg";
import imgTrinAbove from "../images/slideshow/trinidad-cien/trinidad-above.jpg";
import imgTrinConvent from "../images/slideshow/trinidad-cien/trinidad-convent.jpg";
import imgTrinPark from "../images/slideshow/trinidad-cien/trinidad-park.jpg";
import imgTrinNight from "../images/slideshow/trinidad-cien/Trinidad-sundown.jpg";
import imgTrinTemple from "../images/slideshow/trinidad-cien/trinidad-temple.jpg";



class TourTrinCien extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {
        document.body.classList.add('TourTrinCien');
    }

    componentWillUnmount() {
        document.body.classList.remove('TourTrinCien');
    }

    resetFormElement = function (e) {
        console.log("reset from inside")
        e.wrap('<form>').closest('form').get(0).reset();
        e.unwrap();
    }

    render() {

        // https://github.com/maxmarinich/react-alice-carousel
        const handleDragStart = (e) => e.preventDefault();

        const itemsTriCien = [
            <img src={imgCienJagua} onDragStart={handleDragStart} role="presentation" alt="Jagua" className="alice-carousel" />,
            <img src={imgCienStatue} onDragStart={handleDragStart} role="presentation" alt="Statue" className="alice-carousel" />,
            <img src={imgCienView} onDragStart={handleDragStart} role="presentation" alt="CienView" className="alice-carousel" />,
            <img src={imgCienMalecon} onDragStart={handleDragStart} role="presentation" alt="CienMalecon" className="alice-carousel" />,
            <img src={imgCienOver} onDragStart={handleDragStart} role="presentation" alt="Cien over" className="alice-carousel" />,
            <img src={imgCien2} onDragStart={handleDragStart} role="presentation" alt="Cien 2" className="alice-carousel" />,
            <img src={imgTrinAbove} onDragStart={handleDragStart} role="presentation" alt="Trin above" className="alice-carousel" />,
            <img src={imgTrinConvent} onDragStart={handleDragStart} role="presentation" alt="Trin convent" className="alice-carousel" />,
            <img src={imgTrinPark} onDragStart={handleDragStart} role="presentation" alt="Trin park" className="alice-carousel" />,
            <img src={imgTrinNight} onDragStart={handleDragStart} role="presentation" alt="Trin night" className="alice-carousel" />,
            <img src={imgTrinTemple} onDragStart={handleDragStart} role="presentation" alt="Trin temple" className="alice-carousel" />,
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
            <section className="page__section page__section_d">
                <div className="element heading">
                    <h2>Города Тринидад и Сьенфуэгос (450 &euro;)</h2>
                </div>

                <div className="my-carousel">
                    <AliceCarousel mouseTracking
                        items={itemsTriCien}
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
                        за экскурсию на минивэн (9 мест)
                    </p>
                </div>

                <div className="element description">
                    <p>
                        Обед и входные билеты за отдельную плату

                    </p>
                </div>
            </section>
        );
    };
}

export default TourTrinCien;