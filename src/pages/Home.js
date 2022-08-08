import React from "react";
import { Helmet } from "react-helmet";
import Testimonials from "../components/Testimonials";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {

        // document.body.classList.add('dan');
        // Changing the state after 2 sec
        // from the time when the component
        // is rendered
        // setTimeout(() => {
        //     this.setState({
        //         color: 'white'
        //     });
        // }, 2000);
    }

    componentWillUnmount() {
        // document.body.classList.remove('dan');

        console.log("UNMOUNT", this.props);
    }

    render() {
        return (
            <div className="page home">
                <Helmet>
                    <title>Главная | Людмила Зенкова</title>
                    <meta name="description" content="Людмила Зенкова - опытный русский экскурсовод на Кубе" />
                </Helmet>

                <section className="page__heading">
                    <div className="element heading">
                        <h1>Ваш гид по Кубе</h1>
                    </div>
                </section>

                <section className="page__section page__section_e">
                    <div className="element heading">
                        <h2>Людмила Зенкова</h2>
                    </div>

                    <div className="element description">

                        <div className="part">
                            <div className="part-bit part-bit_a">
                                <div className="author__photo"></div>
                            </div>

                            <div className="part-bit part-bit_centered">
                                <ul>
                                    <li className="stripe blue">Многолетний опыт проживания на Кубе</li>
                                    <li className="stripe white">&nbsp;</li>
                                    <li className="stripe blue">Глубокие знания испанского языка, истории и культуры страны</li>
                                    <li className="stripe white">&nbsp;</li>
                                    <li className="stripe blue">Большой стаж работы экскурсоводом в различных регионах Кубы</li>
                                </ul>
                            </div>

                        </div>



                    </div>
                </section>

                <Testimonials />

            </div>
        );
    }
}

export default Home;