import React from 'react';
import counterIconOne from '../../assets/images/icon/counter-icon-1.svg';
import counterIconTwo from '../../assets/images/icon/counter-icon-2.svg';
import counterIconThree from '../../assets/images/icon/counter-icon-3.svg';
import counterIconFour from '../../assets/images/icon/counter-icon-4.svg';

function CounterArea({ style }) {
    const counterCardsone = [
        {
            icon: counterIconOne,
            title: "Download & Install:",
            description:
                "Begin by downloading the app from the App Store or Google Play Store and installing it on your smartphone.",
            delay: "200ms",
        },
        {
            icon: counterIconTwo,
            title: "Sign Up or Log In:",
            description:
                "Create an account using your email or mobile number, or log in if you already have an account.",
            delay: "400ms",
        },
        {
            icon: counterIconThree,
            title: "Browse Products:",
            description:
                "Use the intuitive search bar or navigate through categories like wires, LED lights, fans, and modular switches to find the products you need.",
            delay: "600ms",
        },
        {
            icon: counterIconFour,
            title: "Product Details:",
            description:
                "Click on a product to view detailed descriptions, specifications, pricing, and reviews to make an informed decision.",
            delay: "800ms",
        },
    ];
    const counterCardstwo = [
        {
            icon: counterIconOne,
            title: "Add to Cart:",
            description:
                "Once you’ve found what you need, add the items to your cart for review. You can also update quantities or remove items before checkout.",
            delay: "200ms",
        },
        {
            icon: counterIconTwo,
            title: "Place Your Order:",
            description:
                "Proceed to checkout, select your preferred payment method (including cash on delivery), and confirm your order.",
            delay: "400ms",
        },
        {
            icon: counterIconThree,
            title: "Track Your Order:",
            description:
                "Stay updated with real-time order tracking until your products are delivered to your doorstep.",
            delay: "600ms",
        },
        {
            icon: counterIconFour,
            title: "Customer Support:",
            description:
                "If you have any queries, our dedicated customer support team is just a click away, ready to assist you.",
            delay: "800ms",
        },
    ];

    return (
        <section className="appie-counter-area pt-90 pb-190" id="appWork" style={style}>
            <div className="container" style={{marginBottom:"70px"}}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="appie-section-title">
                            <h3 className="appie-title">How Does the Mandi App Work?</h3>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    {counterCardsone.map((card, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <div
                                className={`appie-single-counter mt-30 item-${index + 1} wow animated fadeInUp`}
                                data-wow-duration="2000ms"
                                data-wow-delay={card.delay}
                            >
                                <div className="counter-content">
                                    <div className="icon">
                                        <img src={card.icon} alt={card.title} />
                                    </div>
                                    <h3 className="title">{card.title}</h3>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row app_work_container" >
                    {counterCardstwo.map((card, index) => (
                        <div className="col-lg-3 col-md-6" key={index}>
                            <div
                                className={`appie-single-counter mt-30 item-${index + 1} wow animated fadeInUp`}
                                data-wow-duration="2000ms"
                                data-wow-delay={card.delay}
                            >
                                <div className="counter-content">
                                    <div className="icon">
                                        <img src={card.icon} alt={card.title} />
                                    </div>
                                    <h3 className="title">{card.title}</h3>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CounterArea;
