import React from "react";
import CarRide from "../components/CarRide";
import Testimonials from "../components/Testimonials";
import ResponsiveTabs from "../components/ResponsiveTabs";
import { Helmet } from "react-helmet";

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

            <div className="page services">
                <Helmet>
                    <title>Услуги | Людмила Зенкова</title>
                    <meta name="description" content="Экскурсии по городам Кубы с русским экскурсоводом Людмилой Зенковой" />
                </Helmet>

                <section className="page__heading">
                    <div className="element heading">
                        <h1>Экскурсии</h1>
                    </div>
                </section>

                <CarRide />

                <ResponsiveTabs />

                <Testimonials />

            </div>
        );
    };
}

export default Services;