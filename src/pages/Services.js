import React from "react";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';
import CarRide from "../components/CarRide";
import Testimonials from "../components/Testimonials";

// https://www.npmjs.com/package/react-tabs
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import TourHabana from "../components/TourHabana";
import TourCaribes from "../components/TourCaribes";
import TourMatanzas from "../components/TourMatanzas";
import TourTrinCien from "../components/TourTrinCien";



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

        const itemsText = [
            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel">xxx 1</div>,
            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel">xxx 2</div>,
            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel">xxx 3</div>,
            <div onDragStart={handleDragStart} role="presentation" className="alice-carousel">xxx 4</div>,
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


                <div className="my-carousel">
                    <AliceCarousel mouseTracking
                        items={itemsText}
                        // autoPlay='true'
                        infinite='true'
                        // autoPlayInterval='2000'
                        autoHeight='true'
                        // responsive={responsivity}
                        disableButtonsControls='false'
                    // paddingLeft="10"
                    // paddingRight='10'
                    />
                </div>

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
                        <TourHabana />
                    </TabPanel>
                    <TabPanel>
                        <TourCaribes />
                    </TabPanel>
                    <TabPanel>
                        <TourMatanzas />
                    </TabPanel>
                    <TabPanel>
                        <TourTrinCien />
                    </TabPanel>
                </Tabs>

                <Testimonials />

            </div>
        );
    };
}

export default Services;