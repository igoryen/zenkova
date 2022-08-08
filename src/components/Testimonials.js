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

        const itemsHabana = [

            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                <blockquote>
                    Встретили первый день весны в Гаване ☀️🇨🇺😎.
                    Спонсор новых знаний, крутых впечатлений и ярких эмоций  &mdash; наш гид Людмила.
                    Рекомендую! 👍🥰☺️
                </blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__author_photo">
                        Х
                    </div>
                    <div className="testimonial__author_name">
                        <a href="https://www.instagram.com/p/CamdxHrOy_6/" target="_blank" rel="noreferrer">Ольга Чеснокова</a>
                    </div>
                </div>
            </div>,

            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                <blockquote>
                    У нас была лучшая экскурсия по Гаване!!! Огромная благодарность Людмиле.
                    Великолепный гид и очень душевная женщина!
                </blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__author_photo">
                        Х
                    </div>
                    <div className="testimonial__author_name">
                        <a href="https://www.instagram.com/_mariyka_r/" target="_blank" rel="noreferrer">_mariyka_r</a>
                    </div>
                </div>
            </div>,

            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                <blockquote>
                    Я побывала в машине времени!
                    Если коротко, то Куба  &mdash; это не просто мечта, которая должна совершиться,
                    Куба &mdash; это особые культура и история.
                    Хочу выразить благодарность гиду Людмиле...
                </blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__author_photo">
                        Х
                    </div>
                    <div className="testimonial__author_name">
                        <a href="https://www.instagram.com/olgamalafeeva/" target="_blank" rel="noreferrer">Ольга Малафеева</a>
                    </div>
                </div>
            </div>,

            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                <blockquote>
                    Я сегодня посмотрела на этот остров другими глазами 😍.
                    Мы ездили на экскурсию в Гавану на ретроавтомобиле с кондиционером! )
                    Это намного интереснее и выгоднее, чем ехать от туроператора на автобусе с кучей других туристов ☝🏽.
                    Нашла через Инстаграм русскогоговорящего гида с профессиональным водителем.
                    Раньше я думала, что экскурсии это нудно и скучно, но Людмила очень интересно рассказывала и отвечала на любые вопросы 👌🏽.
                    Нас катали и водили по нестандартным местам, и мы успели посмотреть гораздо больше 😌.
                    До обеда мы посетили старую Гавану, после обеда новую ).
                    Очень атмосферно 😍. Повсюду разноцветные ретро-тачки, музыканты.
                    Хочется вернуться ещё раз, чтобы просто погулять неспеша.
                </blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__author_photo">
                        Х
                    </div>
                    <div className="testimonial__author_name">
                        <a href="https://www.instagram.com/p/B3vUojsD4K1/" target="_blank" rel="noreferrer">Екатерина Волынец</a>
                    </div>
                </div>
            </div>,

            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                <blockquote>
                    На Кубе 🇨🇺 можно увидеть весь антураж того времени воочию,
                    окунуться в атмосферу колониальной эпохи
                    с её мощными крепостями, роскошными дворцами испанской знати,
                    и даже потрогать древние руины стен 🏛️.
                    Спасибо замечательному гиду Людмиле за необыкновенное путешествие.
                    Без Людмилы впечатления от путешествия были бы не столь яркими!
                    Очень рекомендую! 👍
                </blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__author_photo">
                        Х
                    </div>
                    <div className="testimonial__author_name">
                        <a href="https://www.instagram.com/yakushkina_maria/" target="_blank" rel="noreferrer">Мария Якушкина</a>
                    </div>
                </div>
            </div>,

            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                <blockquote>
                    Нам очень понравилась экскурсия с Людмилой по Гаване.
                    Было очень приятно узнать так много малоизвестных фактов о столице Кубы.
                    Человек большой эрудиции, она открыла нам глаза на очень многое
                    в истории и культуре города и всей страны в целом.
                </blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__author_photo">
                        Х
                    </div>
                    <div className="testimonial__author_name">
                        Игорь и Женика Ентальцевы (Сочи)
                    </div>
                </div>
            </div>,

            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                <blockquote>
                    Отдельное спасибо Людмиле за интересные и очень сказочные экскурсии как столицы 🇨🇺,
                    так и живой мир всей страны.
                    (Людмила живёт много лет на Кубе, и всё знает не только как гид,
                    а и как местный житель. 🔥💗😘)
                </blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__author_photo">
                        Х
                    </div>
                    <div className="testimonial__author_name">
                        <a href="https://www.instagram.com/artemovalarisa14/" target="_blank" rel="noreferrer">Лариса Артемова</a>
                    </div>
                </div>
            </div>,

            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                <blockquote>
                    Гавана &mdash; смесь испанской колониальной архитектуры с барокко, неоклассикой и модерном.
                    Наследие античного и мавританского!
                    Мощённые булыжником старые улочки дышат историей!
                    Я не знаю названий улиц и площадей, по которым нас водила Людмила, но эти прогулки в моём сердце!
                </blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__author_photo">
                        Х
                    </div>
                    <div className="testimonial__author_name">
                        <a href="https://www.instagram.com/p/BujIAIYn9FI/" target="_blank" rel="noreferrer">Инна Клечикова</a>
                    </div>
                </div>
            </div>,

            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                <blockquote>
                    Мне определённо есть что показать снова 😊, карусель полюбившейся Гаваны 😍.
                    Кстати, на 5-м фото &mdash; типичная кубинская коммуналка, но, чёрт побери, красиво! 👌
                    Спасибо нашему гиду Людмиле!
                </blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__author_photo">
                        Х
                    </div>
                    <div className="testimonial__author_name">
                        <a href="https://www.instagram.com/martinadoll/" target="_blank" rel="noreferrer">martinadoll</a>
                    </div>
                </div>
            </div>,

            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                <blockquote>
                    Гавана. Туристическая и не очень.
                    Огромное спасибо нашему индивидуальному гиду Людмиле за такое фантастическое погружение в быт и нравы кубинцев 👍👍👍.
                    Куба глазами человека, прожившего здесь много лет!
                    10 часов пешком втроём по самым аутентичным улицам!
                    Все стереотипы о Кубе разрушились! ))
                    Надеюсь увидеться снова🧡!
                </blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__author_photo">
                        Х
                    </div>
                    <div className="testimonial__author_name">
                        <a href="https://www.instagram.com/p/BuXbUv5HG9i/" target="_blank" rel="noreferrer">Анастасия</a>
                    </div>
                </div>
            </div>,

            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                <blockquote>
                    Индивидуальные экскурсии по Кубе 🇵🇷🇵🇷🇵🇷 с Людмилой.
                </blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__author_photo">
                        Х
                    </div>
                    <div className="testimonial__author_name">
                        <a href="https://www.instagram.com/p/BpG_AQtg0Nm/" target="_blank" rel="noreferrer">Александр Родионов</a>
                    </div>
                </div>
            </div>,

            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                <blockquote>
                    Отдельное спасибо хочу выразить Людмиле.
                    Прекрасный гид, знающий свое дело на все 100%!!!
                    Приятная и позитивная женщина, преподносит информацию очень интересно, знает все интересные места не только в Гаване, но и по всей Кубе. )))))
                    Друзья, это не реклама, а совет обратиться к ней, когда будете на Кубе. ))))
                    Людмила, спасибо Вам за такое интересное путешествие по Гаване!
                </blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__author_photo">
                        Х
                    </div>
                    <div className="testimonial__author_name">
                        <a href="https://www.instagram.com/p/Bh3qA1Nnf1Z/" target="_blank" rel="noreferrer">Анна Рубцова</a>
                    </div>
                </div>
            </div>,

            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                <blockquote>
                    Ребят, все, кто собирается на Кубу, обязательно посетите столицу Кубы &mdash; Гавану.
                    И не с туроператором, а с русским гидом Людмилой.
                    Если вы хотите интересно и комфортно провести день в Гаване, увидеть её во всей красе, узнать что-то новое из истории Кубы,
                    то однозначно обращайтесь к Людмиле.
                </blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__author_photo">
                        Х
                    </div>
                    <div className="testimonial__author_name">
                        <a href="https://www.instagram.com/p/Bh3qA1Nnf1Z/" target="_blank" rel="noreferrer">🖤🤍ГРОММИ🤍🖤</a>
                    </div>
                </div>
            </div>,

            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel testimonial__element" >
                <blockquote>
                    Красоты Гаваны помогла нам рассмотреть Людмила, за что ей огромное СПАСИБО!
                </blockquote>
                <div className="testimonial__author">
                    <div className="testimonial__author_photo">
                        Х
                    </div>
                    <div className="testimonial__author_name">
                        <a href="https://www.instagram.com/nastya_shumakova/" target="_blank" rel="noreferrer">Анастасия Шумакова</a>
                    </div>
                </div>
            </div>,

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
            <section className="page__section testimonial__group">
                <h2>Отзывы</h2>


                <div className="my-carousel">
                    <AliceCarousel mouseTracking
                        items={itemsHabana}
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