import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logonew from '../../assets/images/03photos/logos/No3 logo B.png';

function Main() {
    const [scrolled, setScrolled] = useState(false);
    const [Nav, setNav] = useState(true);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 1000) {
            setNav(false);
        } else if (offset > 200) {
            setNav(true);
            setScrolled(true);
        } else {
            setScrolled(false);
            setNav(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Clean up the event listener when the component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {Nav && (
                <header className={`main-header ${scrolled && "fixed-header"} header-down`}>
                    <div className="header-top">
                        <div className="auto-container">
                            <div className="inner clearfix">
                                <div className="top-left clearfix">
                                    <ul className="top-info clearfix">
                                        <li><i className="icon far fa-map-marker-alt"></i> #3 University Road, Akoka Lagos</li>
                                        <li><i className="icon far fa-clock"></i> Daily : 4.00 pm to 12.00 am</li>
                                    </ul>
                                </div>
                                <div className="top-right clearfix">
                                    <ul className="top-info clearfix">
                                        <li><Link to="tel:+234 901 000 6669"><i className="icon far fa-phone"></i> +234 901 000 6669 </Link></li>
                                        <li><Link to="mailto:events@no3lounge.com"><i className="icon far fa-envelope"></i> events@no3lounge.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="header-upper header-fixed">
                        <div className="auto-container">
                            <div className="main-box d-flex justify-content-between align-items-center flex-wrap">

                            <div className="logo-box">
                                    <div className="logo">
                                        <Link to="https://no3lounge.com/" title="No3 Lounge">
                                            <img src={logonew} alt="No3 Lounge" title="No3 Lounge" style={{ width: '100px', height: 'auto' }} />
                                        </Link>
                                    </div>
                                </div>

                                <div className="nav-box clearfix">
                                    <div className="nav-outer clearfix">
                                        <nav className="main-menu">
                                        </nav>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
            )}
        </>
    );
}

export default Main;
