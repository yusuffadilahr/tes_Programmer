import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import cukur from '../assets/cukur.jpg'

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',
};

const slideImages = [
    {
        url: cukur,
        caption: 'Welcome To Toto Haircuts',
    },
    {
        url: 'https://images.unsplash.com/photo-1549271568-e87e07c5406b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmFyYmVyc2hvcHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
        caption: 'Gentlemen Haircuts Barbershop',
    },
];

const Slideshow = () => {
    const properties = {
        duration: 3000,
        autoplay: true,
        transitionDuration: 500,
        arrows: false,
        infinite: true,
        easing: 'ease',
    };

    return (
        <div className="slide-container">
            <Slide {...properties}>
                {slideImages.map((slideImage, index) => (
                    <div key={index}>
                        <div style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}>
                            <h1
                                className="title is-1"
                                style={{
                                    fontSize: index === 0 ? '4vw' : '3vw', 
                                    color:'white',// Menggunakan unit vw untuk ukuran huruf
                                }}
                            >
                                {slideImage.caption}
                            </h1>
                        </div>
                    </div>
                ))}
            </Slide>
        </div>
    );
};

export default Slideshow;