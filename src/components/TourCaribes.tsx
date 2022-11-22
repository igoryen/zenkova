import React from "react";
// import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import { Helmet } from "react-helmet";

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
                <Helmet>
                    <title>Карибы | Людмила Зенкова</title>
                    <meta name="description" content="Экскурсия по Карибскому побережью Кубы с русским экскурсоводом Людмилой Зенковой" />
                </Helmet>
                <div className="element heading">
                    <h2>Карибы</h2>
                </div>
                <div className="element description">
                    <h2>Гуамá &mdash; бухта Кочи́нос (сноркелинг)</h2>

                    <p>Если вас 2 -3 человека предлагаю поехать на экскурсию в Гуамý на современном автомобиле. Цена &mdash; 160 евро (160 за всех кто в машине)</p>
                    <p>Если хотите поехать на ретроавтомобиль, то в салон помещается 4 человека, не считая водителя и меня.</p>
                    <p>Цена &mdash; 160 евро за машину. И неважно сколько человек в машине, один или 4, цена 160. В автомобиле есть кондиционер.</p>
                    <p>Если вас больше чем 4 человека, то предлагаю минивэн на 9 мест. Цена &mdash; 250 евро за всю машину, соответственно.</p>
                    <p>Минивэн на 6 мест - 210 евро.</p>

                    <h2>Описание экскурсии </h2>
                    <p>Экскурсия на Карибы, в заповедник полуострова Сапáта (Zapata).</p>
                    <p>По дороге остановка в местечке "Fiesta Campesina" для ознакомления с кубинской флорой и фауной (вход бесплатный). Там можете попробовать сок сахарного тростника.</p>
                    <p>Потом можно зайти на крокодиловую ферму, посмотреть крокодилов и погулять в парке (вход 125 песо за человека). Там безопасно и красиво.</p>
                    <p>В этой местности очень хорошие деревенские ресторанчики, где можно попробовать креольскую кухню.</p>
                    <p>А самое интересное &mdash; это купание в Карибском море с рыбками. Есть местечко, где много рыб, там можно поплавать с маской и трубкой.</p>
                    <p>Любителям погружений предоставляется возможность за отдельную плату погрузиться под наблюдением инструктора.</p>
                    <p>Ещё предлагается прокатиться на моторных лодках по престным каналам через озеро на острова, где раньше жили индейцы. Сейчас там туристический центр, имитация индийской деревни. На обозрение туристов выставлены скульптуры индейцев, выполненные знаменитой женщиной-скульптором Ритой Лонгой (Rita Longa).</p>
                    <p>Цена на место в катере &mdash; 300 песо человека. Посещение островов по вашему желанию.</p>
                    <p>Заезжаем к кубинскому дедушке, который разводит колибри (1 евро или доллар с человека).</p>
                    <p>Выезжаем из отеля в 8 часов утра и возвращаемся в 6 вечера.</p>
                    <p>Обед и входные билеты за отдельную плату.</p>

                </div>
            </section>
        );
    };
}

export default TourCaribes;