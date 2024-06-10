import React from 'react';
import Backgroundimage from '../../assets/images/03photos/food/1Z6A1108.jpg';
import { Link } from 'react-router-dom'
import logonew from '../../assets/images/03photos/logos/Number 3_ White.png'


function Main() {
    return (
        <>
            <footer className="main-footer">
                <div className="image-layer" style={{ backgroundImage: `url(${Backgroundimage})` }}> </div>
                <div className="upper-section">
                    <div className="auto-container">
                        <div className="row clearfix">
                            <div className="footer-col info-col col-lg-6 col-md-12 col-sm-12">
                                <div className="inner wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <div className="content">
                                        <div className="logo"><Link to="/" title="No3 Lounge"><img src={logonew} alt="" title="No3 Lounge" /></Link></div>
                                        <div className="info">
                                            <ul>
                                                <li>#3 University Road, Akoka Lagos</li>
                                                <li><Link to="mailto:booking@domainname.com">coming soon</Link></li>
                                                <li><Link to="tel:+88-123-123456">Booking Request : +234-coming-soon</Link></li>
                                                <li>Open : 04:00 pm - 12:00 am</li>
                                            </ul>
                                        </div>
                                        <div className="separator"><span></span><span></span><span></span></div>
                        
                                    </div>
                                </div>
                            </div>

                            <div className="footer-col links-col col-lg-3 col-md-6 col-sm-12">
                                <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <ul className="links">
                                        <li> <Link to="https://no3lounge.com/">No3 Lounge Website</Link></li>
                                        <li> <Link to="https://no3lounge.com/feedback">Leave Feedback</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="footer-col links-col last col-lg-3 col-md-6 col-sm-12">
                                <div className="inner wow fadeInRight" data-wow-delay="0ms" data-wow-duration="1500ms">
                                    <ul className="links">
                                        <li> <Link to="https://www.facebook.com">facebook</Link></li>
                                        <li> <Link to="https://www.instagram.com">instagram</Link></li>
                                        <li> <Link to="https://twitter.com">Twitter</Link></li>
                                        <li> <Link to="https://www.youtube.com">Youtube</Link></li>
                                        <li> <Link to="https://www.google.com/maps">Google map</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="copyright">&copy; 2024 No3 Lounge. All Rights Reserved   |    Crafted by <Link to="https://github.com/mudiiiiii" target="blank">Mudiaga Otojareri</Link> with template from <Link to="https://themeforest.net/user/kalanidhithemes" target="blank">Kalanidhi Themes</Link></div>
                    </div>
                </div>

            </footer>
            <div className="scroll-to-top scroll-to-target" data-target="html"><span className="icon fa fa-angle-up"></span></div>
        </>
    )
}

export default Main