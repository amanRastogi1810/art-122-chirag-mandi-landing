import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import thumb from '../../assets/images/features-thumb-1.png';
import shapeSix from '../../assets/images/shape/shape-6.png';
import shapeSeven from '../../assets/images/shape/shape-7.png';
import shapeEight from '../../assets/images/shape/shape-8.png';

function FeaturesHomeOne({ className }) {
    const [tab, setTab] = useState('setting');
    const handleClick = (e, value) => {
        e.preventDefault();
        setTab(value);
    };
    return (
        <section className={`appie-features-area pt-100 ${className}`} id="features">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div
                                className={`${
                                    tab === 'setting' ? 'show active' : ''
                                } tab-pane fade`}
                                id="v-pills-home"
                                role="tabpanel"
                                aria-labelledby="v-pills-home-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center wow animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src="/new/go-to.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content wow animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <h3 className="title">
                                            Your Go-To App for High-Quality Electrical Essentials
                                            </h3>
                                            <p>
                                            From durable wires and energy-efficient LED lights to premium fans and modular switches, we have everything you need to power your home or office. With easy navigation through categories and trusted brands, finding the right product has never been easier. Shop now and bring reliability to your electrical solutions!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`${tab === 'app' ? 'show active' : ''} tab-pane fade`}
                                id="v-pills-settings"
                                role="tabpanel"
                                aria-labelledby="v-pills-settings-tab"
                            >
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-thumb text-center animated fadeInUp"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="200ms"
                                        >
                                            <img src={thumb} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div
                                            className="appie-features-content animated fadeInRight"
                                            data-wow-duration="2000ms"
                                            data-wow-delay="600ms"
                                        >
                                            <span>Custom Reacyions</span>
                                            <h3 className="title">
                                            Your Go-To App for High-Quality Electrical Essentials
                                            </h3>
                                            <p>
                                                Car boot absolutely bladdered posh burke the
                                                wireless mush some dodg.
                                            </p>
                                            <a className="main-btn" href="#">
                                                Learn More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features-shape-1">
                <img src={shapeSix} alt="" />
            </div>
            <div className="features-shape-2">
                <img src={shapeSeven} alt="" />
            </div>
            <div className="features-shape-3">
                <img src={shapeEight} alt="" />
            </div>
        </section>
    );
}

export default FeaturesHomeOne;
