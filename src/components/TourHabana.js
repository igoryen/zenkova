import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

// carousel for Habana
import imgCapitolio from "../images/slideshow/habana/capitolio.jpg";
import imgCastillio from "../images/slideshow/habana/castillo.jpg";
import imgCatedral from "../images/slideshow/habana/catedral_de_la_habana.jpg";
import imgCecilia from "../images/slideshow/habana/sesilia.jpg";
import imgCemeterio from "../images/slideshow/habana/cemeterio_de_cristobal_colon.jpg";
import imgErnesto from "../images/slideshow/habana/ernesto.jpg";
import imgHabanaVieja from "../images/slideshow/habana/habana_vieja.jpg";
import imgHemingway from "../images/slideshow/habana/hemingway.jpg";
import imgNight from "../images/slideshow/habana/night.jpg";
import imgQuixote from "../images/slideshow/habana/quixote.jpg";
import imgTerraced from "../images/slideshow/habana/terraced_houses.jpg";

class TourHabana extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {
        document.body.classList.add('TourHabana');
    }

    componentWillUnmount() {
        document.body.classList.remove('TourHabana');
    }

    resetFormElement = function (e) {
        console.log("reset from inside")
        e.wrap('<form>').closest('form').get(0).reset();
        e.unwrap();
    }

    render() {

        // https://github.com/maxmarinich/react-alice-carousel
        const handleDragStart = (e) => e.preventDefault();

        const itemsHabana = [
            <img src={imgCapitolio} onDragStart={handleDragStart} role="presentation" alt="Capitolio" className="alice-carousel" />,
            <img src={imgCastillio} onDragStart={handleDragStart} role="presentation" alt="Castilio" className="alice-carousel" />,
            <img src={imgCatedral} onDragStart={handleDragStart} role="presentation" alt="Catedral" className="alice-carousel" />,
            <img src={imgCecilia} onDragStart={handleDragStart} role="presentation" alt="Cecilia" className="alice-carousel" />,
            <img src={imgCemeterio} onDragStart={handleDragStart} role="presentation" alt="Cemeterio" className="alice-carousel" />,
            <img src={imgErnesto} onDragStart={handleDragStart} role="presentation" alt="Ernesto" className="alice-carousel" />,
            <img src={imgHabanaVieja} onDragStart={handleDragStart} role="presentation" alt="Habana Vieja" className="alice-carousel" />,
            <img src={imgHemingway} onDragStart={handleDragStart} role="presentation" alt="Hemingway" className="alice-carousel" />,
            <img src={imgNight} onDragStart={handleDragStart} role="presentation" alt="Night" className="alice-carousel" />,
            <img src={imgQuixote} onDragStart={handleDragStart} role="presentation" alt="Quixote" className="alice-carousel" />,
            <img src={imgTerraced} onDragStart={handleDragStart} role="presentation" alt="Terraced houses" className="alice-carousel" />,
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
            <section className="page__section page__section_a">
                <div className="element heading">
                    <h2>Гавана (160 &euro;)</h2>
                </div>

                <div className="my-carousel">
                    <AliceCarousel mouseTracking
                        items={itemsHabana}
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

                    <div className="part">
                        <div className="part-bit">
                            <h3>Транспорт</h3>
                        </div>
                        <div className="part-bit">
                            <div>
                                <h3>Ретро</h3>
                                <p>1-4 человека</p>
                                <p>Цена 160 &euro; (за всех кто в машине )</p>
                                <p>В стоимость входит: транспорт с водителем, бензин и мои услуги гида.</p>
                                <p>В салон Ретро автомобиля помещается 4 туриста, не считая водителя и меня.
                                    И не важно сколько человек в машине, один или 4, цена 160 &euro;.</p>
                                <p>В автомобиле есть кондиционер.</p>
                            </div>
                            <div>
                                <h3>Современная (такси)</h3>
                                <p>1-3 человека</p>
                                <p>Более комфортно</p>
                                <p>Цена 160 &euro; (за всех кто в машине )</p>
                            </div>
                        </div>
                    </div>
                    <div className="part">
                        <div className="part-bit">
                            <h3>Содержание экскурсии</h3>
                        </div>
                        <div className="part-bit">
                            <div>
                                <h3>Отправление</h3>
                                Выезд из отеля в 8 утра</div>
                            <div>
                                <h3>Посещение основных достопримечательностей столицы Кубы</h3>
                                <ol>
                                    <li>осмотр Гаваны на возвышенности где находится монумент Иисуса Христа благославляющего Гавану</li>
                                    <li>пешая прогулка: колониальных часть Гаваны: здания, площади, крепости возведенные испанцами в XVI - XIX веках</li>
                                    <li>Обед (в стоимость экскурсии не входит)</li>
                                    <li>Осмотр достопримечательностей современной Гаваны: Капитолия, Президентского дворца, Площади Революции, центральных улиц и знаменитой набережной города - Малекон.</li>
                                </ol>

                            </div>
                            <div>
                                <h3>Возвращение</h3>
                                <p>6 часов вечера</p>
                            </div>
                            <div>
                                <h3>Примечание</h3>
                                <p>Принимаются предложения. За дополнительное время и расстояния - доплата</p>
                            </div>
                        </div>
                    </div>

                    <div className="part">
                        <div className="part-bit">
                            <h3>Примечание</h3>
                        </div>
                        <div className="part-bit">
                            <p>
                                Рекомендую бронировать день экскурсии заранее
                            </p>
                            <p>
                                Попутчиков не ищу
                            </p>
                            <p>
                                Проверяю почту обычно вечером по кубинскому времени
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        );
    };
}

export default TourHabana;