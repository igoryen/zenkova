import React from "react";

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
        return (
            <section className="services">


                <div className="element heading">
                    <h1>Экскурсии</h1>
                </div>

                <div className="element heading">
                    <h2>Гавана (160 &euro;)</h2>
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

                <div className="element heading">
                    <h2>Карибы (160 &euro;)</h2>
                </div>


                <div className="element description">


                    <p>
                        (Крокодиловая ферма)  евро на ретроавтомобиле. 160 на современном автомобиле.
                    </p>
                </div>

                <div className="element heading">
                    <h2>Город Матансас (130 &euro;)</h2>
                </div>

                <div className="element description">
                    <p>
                        (город, река, пещера)
                    </p>
                </div>


                <div className="element heading">
                    <h2>Города Тринидад и Сьенфуэгос (450 &euro;)</h2>
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

export default Services;