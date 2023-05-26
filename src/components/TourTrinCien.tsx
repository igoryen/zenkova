import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { Helmet } from "react-helmet";



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
                <Helmet>
                    <title>Тринидад | Людмила Зенкова</title>
                    <meta name="description" content="Экскурсия по Тринидаду и Сьенфуэгосу с русским экскурсоводом Людмилой Зенковой" />
                </Helmet>
                <div className="element heading">
                    <h2>Города Тринидад и Сьенфуэгос</h2>
                </div>

                <div className="my-carousel">
                    <AliceCarousel mouseTracking
                        items={itemsTriCien}
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
                    <h2>Дневная экскурсия в Эль Ничо, Тринидад</h2>
                    <p>Экскурсия одним днём</p>
                    <p>520 евро (за всех кто в минивэн 8-9 мест).</p>
                    <p>На такси 3 человека 400 евро.</p>
                    <p>Посещение и купание на водопадах национального парка Эль Ничо. Обед. Прогулка по старому городу Тринидад. Посещение знаменитой башни Иснага и обзор долины сахарных плантаций.</p>
                    <h2>Программа</h2>
                    <p>Выезд в 6:00 утра из отеля Варадеро. До национального парка примерно 4 часа езды.</p>
                    <p>На водопадах придется подниматься по горной тропинке &mdash; возьмите с собой спортивную обувь.</p>
                    <p>Захватите купальники и полотенца! Мы искупаемся в кристально чистой воде.</p>
                    <p>Обед предусмотрен в ресторане локальной кухни.</p>
                    <p>После купания в водопадах отправляемся в Тринидад в объезд горного массива Эскамбрай. Ехать 1 час.</p>
                    <p>Обзор Долины сахарных плантаций (Valle de los Ingenios).</p>
                    <p>Подъезжаем к Башне Иснага (Torre Isnaga). Это самая высокая башня времён колонии, и находится она близ Тринидада.</p>
                    <p>В Тринидаде проведём около 2 часов. Пешая прогулка по историческому центру. Здесь расположены Плаза Майор, костёл Святой Троицы (Iglesia de la Santísima Trinidad), дом семьи Санчес Иснага, Дворец Кантеро, Музей Романтики, кафе Канчанчара, Дом Музыки.</p>
                    <p>Если хотите на обратном пути заехать в город Сьенфуэгос и полюбоваться на дом семьи Валье, договоритесь с гидом, он покажет вам и Сьенфуэгос (без доплаты).</p>
                    <p>Просьба обговорить о заезде в Сьенфуэгос с гидом заранее для распределения времени экскурсии.</p>
                    <p>Возврат в отель примерно в 8-10 часов вечера.</p>
                    <p>Обед не входит в стоимость экскурсии.</p>
                    <p>Подъем на водопады тоже за отдельную плату</p>
                </div>
            </section>
        );
    };
}

export default TourTrinCien;