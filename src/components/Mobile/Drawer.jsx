import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function Drawer({ drawer, action, lang }) {
    return (
        <>
            <div
                onClick={(e) => action(e)}
                className={`off_canvars_overlay ${drawer ? 'active' : ''}`}
            ></div>
            <div className="offcanvas_menu">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div
                                className={`offcanvas_menu_wrapper ${
                                    drawer ? 'active' : ''
                                }`}
                            >
                                <div className="canvas_close">
                                    <a href="#" onClick={(e) => action(e)}>
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                                <div className="offcanvas-brand text-center mb-40">
                                    <img src={logo} alt="Logo" />
                                </div>
                                <div id="menu" className="text-left">
                                    <ul className="offcanvas_main_menu">
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                        <a href="#appWork">App Work</a>
                                        </li>
                                        <li>
                                        <a href="#dwnApp">Download App</a>
                                        </li>
                                        <li>
                                         <a href="#team">Our Team</a>
                                        </li>
                                        <li>
                                         <a href="#faq">Faq</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="offcanvas-social">
                                    <ul className="text-center">
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="$">
                                                <i className="fab fa-dribbble"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="footer-widget-info">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fal fa-envelope"></i>{' '}
                                                support@appie.com
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fal fa-phone"></i> +(642) 342
                                                762 44
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fal fa-map-marker-alt"></i>{' '}
                                                442 Belle Terre St Floor 7, San Francisco,
                                                AV 4206
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Drawer;
