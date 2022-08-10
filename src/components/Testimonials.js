import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

class Testimonials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {
        document.body.classList.add('Testimonials');
    }

    componentWillUnmount() {
        document.body.classList.remove('Testimonials');
    }

    resetFormElement = function (e) {
        console.log("reset from inside")
        e.wrap('<form>').closest('form').get(0).reset();
        e.unwrap();
    }

    render() {

        // https://github.com/maxmarinich/react-alice-carousel
        const handleDragStart = (e) => e.preventDefault();


        const quotes = [
            {
                text: "Встретили первый день весны в Гаване ☀️🇨🇺😎. Спонсор новых знаний, крутых впечатлений и ярких эмоций  — наш гид Людмила. Рекомендую! 👍🥰☺️",
                link: "https://www.instagram.com/p/CamdxHrOy_6/",
                name: "Ольга Чеснокова"
            },
            {
                text: "У нас была лучшая экскурсия по Гаване!!! Огромная благодарность Людмиле. Великолепный гид и очень душевная женщина!",
                link: "https://www.instagram.com/_mariyka_r/",
                name: "_mariyka_r"
            },
            {
                text: "Я побывала в машине времени! Если коротко, то Куба — это не просто мечта, которая должна совершиться, Куба — это особые культура и история. Хочу выразить благодарность гиду Людмиле...",
                link: "https://www.instagram.com/olgamalafeeva/",
                name: "Ольга Малафеева"
            },
            {
                text: "Я сегодня посмотрела на этот остров другими глазами 😍. Мы ездили на экскурсию в Гавану на ретроавтомобиле с кондиционером! ) Это намного интереснее и выгоднее, чем ехать от туроператора на автобусе с кучей других туристов ☝🏽. Нашла через Инстаграм русскогоговорящего гида с профессиональным водителем. Раньше я думала, что экскурсии это нудно и скучно, но Людмила очень интересно рассказывала и отвечала на любые вопросы 👌🏽. Нас катали и водили по нестандартным местам, и мы успели посмотреть гораздо больше 😌. До обеда мы посетили старую Гавану, после обеда новую ). Очень атмосферно 😍. Повсюду разноцветные ретро-тачки, музыканты. Хочется вернуться ещё раз, чтобы просто погулять неспеша.",
                link: "https://www.instagram.com/p/B3vUojsD4K1/",
                name: "Екатерина Волынец"
            },
            {
                text: "Нам очень понравилась экскурсия с Людмилой по Гаване. Было очень приятно узнать так много малоизвестных фактов о столице Кубы. Человек большой эрудиции, она открыла нам глаза на очень многое в истории и культуре города и всей страны в целом.",
                link: "",
                name: "Игорь и Женика Ентальцевы"
            },
            {
                text: "Отдельное спасибо Людмиле за интересные и очень сказочные экскурсии как столицы 🇨🇺, так и живой мир всей страны. (Людмила живёт много лет на Кубе, и всё знает не только как гид, а и как местный житель. 🔥💗😘)",
                link: "https://www.instagram.com/artemovalarisa14/",
                name: "Лариса Артемова"
            },
            {
                text: "Гавана — смесь испанской колониальной архитектуры с барокко, неоклассикой и модерном. Наследие античного и мавританского! Мощённые булыжником старые улочки дышат историей! Я не знаю названий улиц и площадей, по которым нас водила Людмила, но эти прогулки в моём сердце!",
                link: "https://www.instagram.com/p/BujIAIYn9FI/",
                name: "Инна Клечикова"
            },
            {
                text: "Мне определённо есть что показать снова 😊, карусель полюбившейся Гаваны 😍. Кстати, на 5-м фото — типичная кубинская коммуналка, но, чёрт побери, красиво! 👌 Спасибо нашему гиду Людмиле!",
                link: "https://www.instagram.com/martinadoll/",
                name: "martinadoll"
            },
            {
                text: "Гавана. Туристическая и не очень. Огромное спасибо нашему индивидуальному гиду Людмиле за такое фантастическое погружение в быт и нравы кубинцев 👍👍👍. Куба глазами человека, прожившего здесь много лет! 10 часов пешком втроём по самым аутентичным улицам! Все стереотипы о Кубе разрушились! )) Надеюсь увидеться снова🧡!",
                link: "https://www.instagram.com/p/BuXbUv5HG9i/",
                name: "Анастасия"
            },
            {
                text: "Индивидуальные экскурсии по Кубе 🇵🇷🇵🇷🇵🇷 с Людмилой.",
                link: "https://www.instagram.com/p/BpG_AQtg0Nm/",
                name: "Александр Родионов"
            },
            {
                text: "Отдельное спасибо хочу выразить Людмиле. Прекрасный гид, знающий свое дело на все 100%!!! Приятная и позитивная женщина, преподносит информацию очень интересно, знает все интересные места не только в Гаване, но и по всей Кубе. ))))) Друзья, это не реклама, а совет обратиться к ней, когда будете на Кубе. )))) Людмила, спасибо Вам за такое интересное путешествие по Гаване!",
                link: "https://www.instagram.com/p/Bh3qA1Nnf1Z/",
                name: "Анна Рубцова"
            },
            {
                text: "Ребят, все, кто собирается на Кубу, обязательно посетите столицу Кубы — Гавану. И не с туроператором, а с русским гидом Людмилой. Если вы хотите интересно и комфортно провести день в Гаване, увидеть её во всей красе, узнать что-то новое из истории Кубы, то однозначно обращайтесь к Людмиле.",
                link: "https://www.instagram.com/p/Bh3qA1Nnf1Z/",
                name: "🖤🤍ГРОММИ🤍🖤"
            },
            {
                text: "Красоты Гаваны помогла нам рассмотреть Людмила, за что ей огромное СПАСИБО!",
                link: "https://www.instagram.com/nastya_shumakova/",
                name: "Анастасия Шумакова"
            },
        ];

        let itemsQuotes = quotes.map(quote => {
            return (
                <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                    <blockquote>{quote.text}</blockquote>
                    <div className="testimonial__author">
                        <div className="testimonial__author_photo">Х</div>
                        <div className="testimonial__author_name">
                            <a href={quote.link} target="_blank" rel="noreferrer">{quote.name}</a>
                        </div>
                    </div>
                </div>
            );
        });

        const responsivity = {
            0: {
                items: 1,
            },
            1024: {
                items: 3
            }
        };
        return (
            <section className="page__section testimonial__group" >
                <h2>Отзывы</h2>


                <div className="my-carousel">
                    <AliceCarousel mouseTracking
                        items={itemsQuotes}
                        autoPlay='true'
                        infinite='true'
                        autoPlayInterval='2000'
                        autoPlayStrategy="all"
                        // autoHeight='true'
                        responsive={responsivity}
                        disableButtonsControls='false'
                        paddingLeft='50'
                        paddingRight='50'
                    />
                </div>


            </section>
        );
    };
}

export default Testimonials;