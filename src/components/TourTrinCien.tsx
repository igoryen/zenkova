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
                    <h2>Экскурсия в Тринидад и Сьенфуэгос + водопады Ничо (по желанию) с ночёвкой в Тринидаде.</h2>
                    <p>Попутчиков не ищу</p>
                    <p>Если вас 2, 3 или 4 человека, предлагаю поехать в Тринидад, Сьенфуэгос и на водопады Ничо с ночёвкой.</p>
                    <p>Цена экскурсии (с ночёвкой) за всех кто в машине (1-3 человека) &mdash; 600 долларов или евро.</p>
                    <p>Если вас больше, 4-8 человек, и экскурсия проходит на минивэне (с ночёвкой), то экскурсия стоит 700 долларов на всех.</p>
                    <p>Остановка на ночь в Тринидаде стоит 35 долларов за двоих.</p>
                    <p>Обеды — примерно 15-20 долларов с человека.</p>
                    <p>Вход в Дом колибри — 1 доллар с человека.</p>
                    <p>На крокодиловую ферму — 5 долларов с человека.</p>
                    <p>Если вас 4 человека, экскурсия с ночёвкой в Тринидаде проводится на ретроавтомобиле.</p>
                    <p>Если 2 или 3, то можно на современном автомобиле.</p>
                    <p>Подъём на водопады за отдельную плату.</p>
                    <p>Вход на водопады — 10 долларов с человека.</p>
                    <p>Дорога от Варадеро до города Тринидад занимает примерно 3-4 часа. Остановка на завтрак по дороге.</p>

                    <h2>Программа</h2>

                    <p>Сначала едем на водопады, купаемся в прозрачной пресной воде, и любуемся красотами горной местности. (По вашему желанию. Подъём в горы за отдельную плату.)</p>
                    <p>Обед.</p>
                    <p>Посещаем город Тринидад.</p>
                    <p>Сначала едем на знаменитую башню Изнаги, символ города Тринидада, и останавливаемся на смотровой площадке, откуда видны Сахарные долины.</p>
                    <p>Потом едем в город, гуляем по историческому центру, обязательно ходим по Главной площади (Plaza Mayor), где вы увидите как жили богатые рабовладельцы времён колонии.</p>
                    <p>Заселение в частном секторе колониального исторического центра. </p>
                    <p>Свободное время: выбираете сами место для ужина в городе. </p>
                    <p>Утром следующего дня едем в город Сьенфуэгос, где посещаем знаковые места города, и любуемся видами с веранды на крыше дома Валье, и проходим по набережной Сьенфуэгоса.</p>
                    <p>Отправляемся обратно в Варадеро по дороге, где проводится экскурсия "Карибы".</p>
                    <p>Обед в деревенском ресторанчике, где попробуем настоящую креольскую кухню. Искупаемся в Карибском море в местечке где много рыбок.</p>
                    <p>Посетим крокодиловую ферму, зайдём в Дом колибри. </p>


                </div>
            </section>
        );
    };
}

export default TourTrinCien;