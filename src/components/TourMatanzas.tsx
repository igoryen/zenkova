import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { Helmet } from "react-helmet";

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
                <Helmet>
                    <title>Матансас | Людмила Зенкова</title>
                    <meta name="description" content="Экскурсия по кубинскому городу Матансас с русским экскурсоводом Людмилой Зенковой" />
                </Helmet>
                <div className="element heading">
                    <h2>Матáнсас</h2>
                </div>

                <div className="my-carousel">
                    <AliceCarousel mouseTracking
                        items={itemsMatanzas}
                        autoPlay={!!'true'}
                        infinite={!!'true'}
                        autoPlayInterval={2000}
                        autoPlayStrategy="all"
                        autoHeight={!!'true'}
                        responsive={responsivity}
                        disableButtonsControls={!!'false'}
                    // paddingLeft="10"
                    // paddingRight='10'
                    />
                </div>

                <div className="element description">
                    <h2>Матáнсас: город, река, пещера</h2>
                    <p>На ретроавтомобиле с крышей (1-4 человека). Экскурсия стоит 160 долларов (или евро).</p>
                    <p>Выезд из отеля в 9 утра, после завтрака.</p>
                    <p>Дорога в Матáнсас из Варадеро занимает чуть меньше часа.</p>
                    <p>Остановка на мосту реки Кани́мар, потом спускаемся к берегу. За отдельную плату можно покататься на лодке или катере.</p>
                    <p>Посещение площади Свободы, прогулка по улице Медиo до площади Пласа-де-ла-Вихи́я, откуда есть проход к берегу реки Сан Хуан.</p>
                    <p>Поднимаемся на возвышенность Монсеррáт, откуда открываются красоты города и долины Юмури́.</p>
                    <p>Едем к Пещере Сатурна, где можно искупаться в прозрачной пресной воде и зайти в пещеру Белья Мар (по желанию). Вход в пещеры платный. Обязательно возьмите с собой полотенца и купальные принадлежности. Для спуска в пещеру - удобную обувь.</p>
                    <p>Возвращение в отель примерно в 3 часа.</p>
                </div>
            </section>
        );
    };
}

export default TourMatanzas;