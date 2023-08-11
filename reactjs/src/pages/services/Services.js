import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Services = () => {
    const cardButton = {
        float: 'right',
    };

    const titleStyle = {
        fontWeight: 'bolder',
    };

    const [showForm, setShowForm] = useState(false);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4" style={{ textAlign: 'center' }}>
                    <img
                        src="https://c.stocksy.com/a/9f3L00/za/5018971.jpg"
                        className="w3-round"
                        width="250px"
                        height="200px"
                    />
                    <p className="name">
                        <br />
                        <span className="w3-padding w3-theme-l1 w3-margin w3-round" style={{ fontStyle: 'italic', fontWeight: 'bolder', fontSize: 'x-large' }}>
                            Hello there, I'm Toto!
                        </span>
                    </p>
                    <p>
                        <span className="profession w3-padding w3-theme-d5 w3-round" style={{ fontWeight: 'bolder' }}>
                            I am a Haircutter!
                        </span>
                    </p>
                    <br />
                </div>
                <div className="col-md-8">
                    <div className="links-container">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title" style={titleStyle}>Haircuts and Massages</h5>
                                <p className="card-text">Experience the ease and speed of ordering and queuing!</p><br />
                                <a
                                    href="/bookingform"
                                    className="btn btn-primary"
                                    onClick={() => setShowForm(true)} // Ubah setShowForm menjadi true
                                    style={cardButton}>
                                    Booking Sekarang
                                </a>
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title" style={titleStyle}>Haircuts Shampoo and Massages</h5>
                                <p className="card-text">Order and queue effortlessly and swiftly!</p>
                                <br />
                                <a href="/bookingform" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={cardButton}>
                                    Booking Sekarang
                                </a>
                            </div>
                        </div>
                        <br />
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title" style={titleStyle}>Haircuts</h5>
                                <p className="card-text">Get your orders in quickly and queue with ease!</p><br />
                                <a href="bookingform" className="btn btn-primary" target="_blank" rel="noopener noreferrer" style={cardButton}>
                                    Booking Sekarang
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;