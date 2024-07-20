import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slidethree from '../../assets/images/03photos/food/1Z6A1109.jpg';
import Slidetwo from '../../assets/images/03photos/food/1Z6A1114.jpg';
import Slideone from '../../assets/images/03photos/food/1Z6A1106.jpg';
import 'swiper/swiper.min.css';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import pdfFile from '../../assets/pdf/Full Pdf.pdf';
import foodpdf from '../../assets/pdf/New Food menu 2024.pdf'
import drinkpdf from '../../assets/pdf/New Drink menu 2024.pdf'


SwiperCore.use([Navigation]);

function Banner() {

    return (
        <div>
            <Swiper
                className="banner-section banner-section-coustm"
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            >
                <div className="banner-container">
                    <div className="banner-slider">
                        <div className="swiper-wrapper">
                        {[Slideone, Slidetwo, Slidethree].map((image, index) => (
                            <SwiperSlide key={index} className="swiper-slide slide-item img-fluid">
                                <div className="auto-container">
                                    <div className="content-box">
                                        <div className="content">
                                            <div className="clearfix">
                                                <div className="inner">
                                                    <div className="subtitle">
                                                        <span>delightful experience</span>
                                                    </div>
                                                    <div className="pattern-image">
                                                        <img src={require('../../assets/images/icons/separator.svg').default} alt='mySvgImage' />
                                                    </div>
                                                    <h1><span>{index === 0 ? 'From mouthwatering food' : index === 1 ? 'From mouthwatering food' : 'From mouthwatering food'}<br />{index === 0 ? 'to handcrafted drinks' : index === 1 ? 'to handcrafted drinks' : 'to signature cocktails'}</span></h1>
                                                    <div className="text">Every flavor tells a different story</div>
                                                    <div className="links-box wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1500ms">
                                                        <div className="link">
                                                        <a href={pdfFile} target="_blank" className="theme-btn btn-style-two clearfix" rel='noopener noreferrer'>
    <span className="btn-wrap">
        <span className="text-one">view full menu</span>
        <span className="text-two">view full menu</span>
    </span>
</a>

<a href={drinkpdf} target="_blank" className="theme-btn btn-style-two clearfix" rel='noopener noreferrer'>
    <span className="btn-wrap">
        <span className="text-one">view drink menu</span>
        <span className="text-two">view drink menu</span>
    </span>
</a>
</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </div>
                    </div>
                </div>
            </Swiper>

        </div>
    );
}

export default Banner;