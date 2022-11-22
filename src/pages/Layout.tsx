import { Outlet } from "react-router-dom";
import React from "react";
import { MainNav } from "../components/MainNav";
import imgAuthor from '../images/author-310x310.png'


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
                <div className="header-body-footer">
                    <header>
                        <section>
                            <img src={imgAuthor} alt="author" />
                            <div>Людмила Зенкова | русский гид на Кубе</div>
                        </section>
                    </header>
                    <MainNav />
                    <div className="layout-outlet">
                        <Outlet />
                    </div>
                    <footer>
                        FOOTER
                    </footer>
                </div>
            </div>
        )
    }
};



export default Layout;