/* eslint-disable @next/next/no-img-element */
"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoDiscover = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
    };

    const images = [
        'https://i.ibb.co/hcbkHqf/image.png',
        'https://i.ibb.co/WggKW6V/image.png',
        'https://i.ibb.co/8d8DzGv/image.png',
        'https://i.ibb.co/LYbNj50/image.png', 
        'https://i.ibb.co/7Y3SZyy/image.png',
    ];

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Carousel */}
            <Slider {...settings} className="absolute inset-0">
                {images.map((image, index) => (
                    <div key={index} className="h-screen">
                        <div
                            className="h-full bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${image})`,
                                filter: 'brightness(0.8)',
                            }}
                        />
                    </div>
                ))}
            </Slider>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white text-center font-serif">
                <h1 className="text-5xl md:text-7xl mb-6">
                    Best in Travel 2024
                </h1>
                <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-sky-500 transition duration-300">
                    Discover the winners
                </button>
            </div>
        </div>
    );
};

export default VideoDiscover;
