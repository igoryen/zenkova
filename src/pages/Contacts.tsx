import { React, useEffect } from "react";
import Testimonials from "../components/Testimonials";
import logoWhatsApp from "../../src/svg/whatsapp-icon-seeklogo.com.svg";
import logoGmail from "../../src/svg/google-gmail-seeklogo.com.svg";
import logoInstagram from "../../src/svg/instagram-svgrepo-com.svg";
import logoFB from "../../src/svg/facebook-seeklogo.com.svg";
import logoVK from "../../src/svg/vkontakte-seeklogo.com.svg";
import { Helmet } from "react-helmet";


import { useDispatch } from 'react-redux';
import { switchToPage } from "../features/mainNav/mainNavSlice";

export function Contacts() {

    const dispatch = useDispatch();

    useEffect(() => {
        // console.log("useEffect on p Contacts");
        dispatch(switchToPage('contacts'))
    });


    return (
        <div className="page Contacts">
            <Helmet>
                <title>Контакты | Людмила Зенкова</title>
                <meta name="description" content="Как связаться с русским экскурсоводом на Кубе Людмилой Зенковой" />
            </Helmet>

            <section className="page__heading">
                <div className="element heading">
                    <h1>Связь</h1>
                </div>
            </section>

            <section className="page__section page__section_f">


                <div className="element description">

                    <div className="part">
                        <a className="contact-logo"
                            href="https://wa.me/5354116388" target="_blank"
                            rel="noopener noreferrer"><img src={logoWhatsApp} alt="WhatsApp logo" /> <span>+53 (5) 411-63-88</span></a>
                    </div>
                    <div className="part">
                        <a className="contact-logo"
                            href="mailto: liuda.zenkova@gmail.com" target="_blank"
                            rel="noopener noreferrer"><img src={logoGmail} alt="GMail logo" /> <span>liuda.zenkova@gmail.com</span></a>
                    </div>

                    <div className="part">
                        <a className="contact-logo"
                            href="https://www.instagram.com/liudmila.varadero/" target="_blank"
                            rel="noopener noreferrer"><img src={logoInstagram} alt="Instagram logo" /> <span>liudmila.varadero</span></a>
                    </div>

                    <div className="part">
                        <a className="contact-logo"
                            href="https://www.facebook.com/liudmila.zenkova/" target="_blank"
                            rel="noopener noreferrer"><img src={logoFB} alt="Facebook logo" /> <span>Liudmila Zenkova</span></a>
                    </div>

                    <div className="part">
                        <a className="contact-logo"
                            href="https://vk.com/id457019825/" target="_blank"
                            rel="noopener noreferrer"><img src={logoVK} alt="Vkontakte logo" /> <span>Liudmila Zenkova</span></a>
                    </div>

                </div>
            </section>

            <Testimonials />

        </div>
    );
}
