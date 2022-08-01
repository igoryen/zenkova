import "../../styles/mainStyle.scss";
import { Outlet } from "react-router-dom";
import React from "react";
import MainNav from "../../components/MainNav";


class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "#f8f8ff"
        }
    }

    componentDidMount() {
        // document.body.classList.add('layout');
    }

    componentWillUnmount() {
        // document.body.classList.remove('layout');
        console.log("UNMOUNT", this.props);
    }


    render() {
        return (
            <div className="layout">
                <section className="header-body-footer">
                    <header>
                        HEADER
                    </header>
                    <MainNav />
                    <div className="layout-outlet">
                        <Outlet />
                    </div>
                    <footer>
                        FOOTER
                    </footer>
                </section>
            </div>
        )
    }

};



export default Layout;