import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function FooterHomeOne({ className }) {
    return (
        <>
            <section className={`appie-footer-area ${className || ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-about-widget">
                                <div className="logo">
                                    <a href="#">
                                        <img src='/new/c-logo.svg' alt=""  width={100} />
                                    </a>
                                </div>
                                <p>
                                Shop anytime, anywhere, and benefit from product reviews, easy returns, and fast delivery.
                                </p>
                                <div className="social mt-30">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-pinterest-p" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-navigation" style={{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",flexDirection:"column"}}>
                                <h4 className="title">Quick Links</h4>
                                <ul>
                                    <li>
                                        <a href="/about-us">Home</a>
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
                        </div>
                        <div className="col-lg-4 col-md-6" style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
                            <div className="footer-widget-info">
                                <h4 className="title">Get In Touch</h4>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-envelope" /> support@appie.com
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fal fa-phone" /> +(642) 342 762 44
                                        </a>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright d-flex align-items-center justify-content-between pt-35">
                                <div className="apps-download-btn">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fab fa-apple" /> Download for iOS
                                            </a>
                                        </li>
                                        <li>
                                            <a className="item-2" href="#">
                                                <i className="fab fa-google-play" /> Download for
                                                Android
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="copyright-text">
                                    <p>Copyright © 2024 Mandi. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FooterHomeOne;
