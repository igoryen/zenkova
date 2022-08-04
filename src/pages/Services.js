import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import CarRide from "../components/CarRide";
import Testimonials from "../components/Testimonials";

// https://www.npmjs.com/package/react-tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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

// carousel for Matanzas
import imgSeverino from "../images/slideshow/matanzas/Castle-of-San-Severino-Matanzas-Cuba-18.jpg";
import imgMatanzas1 from "../images/slideshow/matanzas/Matanzas_from_Ermita_de_Monserrate_church.jpg";
import imgMatanzasOver from "../images/slideshow/matanzas/Matanzas-over.jpg";
import imgMatanzas0 from "../images/slideshow/matanzas/Matanzas.jpg";
import imgMatanzas2 from "../images/slideshow/matanzas/Matanzas2.jpg";

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



class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {
        document.body.classList.add('Services');
    }

    componentWillUnmount() {
        document.body.classList.remove('Services');
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

        const itemsMatanzas = [
            <img src={imgSeverino} onDragStart={handleDragStart} role="presentation" alt="Severino" className="alice-carousel" />,
            <img src={imgMatanzas1} onDragStart={handleDragStart} role="presentation" alt="Castilio" className="alice-carousel" />,
            <img src={imgMatanzasOver} onDragStart={handleDragStart} role="presentation" alt="Catedral" className="alice-carousel" />,
            <img src={imgMatanzas0} onDragStart={handleDragStart} role="presentation" alt="Cecilia" className="alice-carousel" />,
            <img src={imgMatanzas2} onDragStart={handleDragStart} role="presentation" alt="Cemeterio" className="alice-carousel" />,

        ];

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




            <div className="page services">



                <section className="page__heading">
                    <div className="element heading">
                        <h1>Экскурсии</h1>
                    </div>
                </section>

                <CarRide />

                <section className="page__section_tabs">
                    <p>Гавана (Г), Карибы (К), Матансас (М), Тринидад и Сьенфуэгос (Т и С)</p>
                </section>
                <Tabs className="my-tabs" defaultFocus="true">
                    <TabList className="my-tab-list">
                        <Tab><span className="mobile">Г</span><span className="desktop">Гавана</span></Tab>
                        <Tab><span className="mobile">К</span><span className="desktop">Карибы</span></Tab>
                        <Tab><span className="mobile">М</span><span className="desktop">Матансас</span></Tab>
                        <Tab><span className="mobile">Т и С</span><span className="desktop">Тринидад и Сьенфуэгос</span></Tab>
                    </TabList>




                    <TabPanel>

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

                    </TabPanel>
                    <TabPanel>

                        <section className="page__section page__section_b">
                            <div className="element heading">
                                <h2>Карибы (160 &euro;)</h2>
                            </div>
                            <div className="element description">
                                <p>
                                    (Крокодиловая ферма)  евро на ретроавтомобиле. 160 на современном автомобиле.
                                </p>
                            </div>
                        </section>

                    </TabPanel>
                    <TabPanel>

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
                    </TabPanel>
                    <TabPanel>

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
                    </TabPanel>






                </Tabs>

                <Testimonials />

            </div>
        );
    };
}

export default Services;