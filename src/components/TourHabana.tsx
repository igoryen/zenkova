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
import { Helmet } from "react-helmet";

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
                <Helmet>
                    <title>Гавана | Людмила Зенкова</title>
                    <meta name="description" content="Экскурсия по столице Кубы городу Гаване с русским экскурсоводом Людмилой Зенковой" />
                </Helmet>
                <div className="element heading">
                    <h2>Гавана</h2>
                </div>

                <div className="my-carousel">
                    <AliceCarousel mouseTracking
                        items={itemsHabana}
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
                    <h2>1. Дневная экскурсия</h2>

                    <p>Если вас 1-3 человека, предлагаю поехать на экскурсию в Гавану на современном автомобиле. Цена &mdash; 200 евро или долларов (200 за всех кто в машине).</p>
                    <p>Если хотите поехать на ретроавтомобиле, то в салон помещается 4 человека, не считая водителя и меня.</p>
                    <p>Цена &mdash; тоже 200 евро за машину. И не важно сколько человек в машине, один или 4, цена 200.</p>
                    <p>В автомобиле есть кондиционер.</p>
                    <p>Если вас больше, чем 4 человека, то предлагаю минивэн на 9 мест. Цена 300 евро за всю машину, соответственно.</p>
                    {/* <p>Минивэн на 6 мест &mdash; 210 евро.</p> */}

                    <h2>Описание экскурсии</h2>

                    <p>Посещение основных достопримечательностей столицы Кубы. Начинается экскурсия с осмотра Гаваны на возвышенности, где находится монумент Иисуса Христа, благославляющего Гавану.</p>
                    <p>Вы посетите колониальную часть Гаваны: здания, площади, крепости, возведённые испанцами в XVI-XIX веках (пешая прогулка).</p>

                    <h2>Места посещения</h2>

                    <ul>
                        <li>Кафедральная площадь</li>
                        <li>Старая площадь</li>
                        <li>Площадь святого  Франциска (или Площадь голубей)</li>
                        <li>Оружейная площадь</li>
                        <li>Католический собор</li>
                        <li>и многе другое.</li>
                    </ul>
                    <p>Заходим в музеи только по Вашему желанию.</p>

                    <p>После обеда &mdash; осмотр достопримечательностей современной Гаваны и центра: Капитолия, Президентского дворца, Площади Революции, центральных улиц и знаменитой набережной города &mdash; Малекон.</p>

                    <h2>Места посещения</h2>
                    <ul>
                        <li>Набережная Малекон</li>
                        <li>Площадь Революции</li>
                        {/* <li>Парк Альмендарес</li> */}
                        <li>и многое другое.</li>
                    </ul>

                    <p>Принимаются предложения. За дополнительное время и расстояния &mdash; доплата.</p>

                    <p>Выезжаем из отеля в 8 утра, и возвращаемся в 6 вечера.</p>

                    <p>Обед не входит в стоимость экскурсии. Цена за обед: 15-20 долларов за человека, занимает час.</p>

                    <p>Рекомендую бронировать день экскурсии заранее.</p>

                    <p>Попутчиков не ищу.</p>

                    <p>Проверяю почту обычно вечером по кубинскому времени.</p>

                    <h2>2. Дневная Гавана + традиция пушечного выстрела ровно в 9 вечера</h2>
                    
                    <p>Эта экскурсия начинается в 10 часов утра, и приезжаем в отель примерно в 11:30.</p>

                    <p>Цена за экскурсию на ретроавтомобиле или на современной  машине такси &mdash; 280.</p>

                    <p>На минивэне &mdash; 400 долларов за всех, кто в минивэне (9 мест).</p>


                </div>
            </section>
        );
    };
}

export default TourHabana;