
import React from "react";

class CarRide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {
        document.body.classList.add('CarRide');
    }

    componentWillUnmount() {
        document.body.classList.remove('CarRide');
    }

    resetFormElement = function (e) {
        console.log("reset from inside")
        e.wrap('<form>').closest('form').get(0).reset();
        e.unwrap();
    }

    render() {
        return (
            <section className="car-ride">
                <div className="moving-object moving-object-a"></div>
                <div className="moving-object moving-object-b"></div>
                <div className="moving-object moving-object-c"></div>
                <div className="moving-object moving-object-d"></div>
                <div className="moving-object moving-object-e"></div>
                <div className="moving-object moving-object-f"></div>
                <div className="moving-object moving-object-g"></div>
                <div className="sail"></div>
                <div className="sea"></div>
                <div className="car"></div>
                <div className="road"></div>
            </section>
        );
    };
}

export default CarRide;