import React from 'react';
import shape13 from '../../assets/images/shape/shape-13.png';
import shape14 from '../../assets/images/shape/shape-14.png';
import shape15 from '../../assets/images/shape/shape-15.png';

function DownloadHomeTwo({ className }) {
    return (
        <>
            <section id='dwnApp' className={`appie-download-area pt-150 pb-160 mb-90 ${className || ''}`} >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="appie-download-content">
                                <span>Download Our App</span>
                                <h3 className="title">
                                Download Our App Today!
                                </h3>
                                <p>
                                Download our app for free on the App Store and Google Play Store. Explore a wide range of high-quality electronics and electrical essentials. Enjoy a seamless shopping experience with user-friendly features, secure payments, and exclusive deals.

                                </p>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="fab fa-apple" />
                                            <span>
                                                Download for <span>iOS</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="item-2" href="#">
                                            <i className="fab fa-google-play" />
                                            <span>
                                                Download for <span>Android</span>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DownloadHomeTwo;
