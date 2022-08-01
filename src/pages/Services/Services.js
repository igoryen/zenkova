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
            <section>
                <h1>Services</h1>
            </section>
        );
    };
}

export default Services;