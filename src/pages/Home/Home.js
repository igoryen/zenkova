import React from "react";
import Testimonials from "../../components/Testimonials";

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

                <section className="page__heading">
                    <div className="element heading">
                        <h1>Ваш гид по Кубе</h1>
                    </div>
                </section>

                <Testimonials />

            </div>
        );
    }
}

export default Home;