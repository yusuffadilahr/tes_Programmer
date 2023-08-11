import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import reportImage from '../../assets/report-an.jpg';

const BookingForm = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const history = useHistory();

    const services = ['Haircut', 'Haircut And Massage', 'Haircut Shampoo And Massage']


    const isFormValid = () => {
        // Add any additional validation checks here if needed
        return (
            name.trim() !== '' &&
            date.trim() !== '' &&
            selectedService.trim() !== ''
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the form is valid
        if (!isFormValid()) {
            window.alert('Harap isi semua field sebelum mengirimkan formulir!');
            return;
        }

        try {
            const newBooking = { name, date, service: selectedService };
            await axios.post('http://localhost:5000/bookingsform', newBooking);

            // Redirect to the page where you want to display the bookings
            window.alert('Booking berhasil dikirimkan!');
            history.push('/bookingstab');
        } catch (error) {
            if (error.response) {
                window.alert('Laporan gagal dikirimkan!');
            }
        }
    };

    return (
        <div className='container'>
            <div className="columns">
                <div className="column is-one-third">
                    {/* Bagian gambar */}
                    <img src={reportImage} style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="column is-two-thirds">
                    {/* Bagian formulir */}
                    <div className="card">
                        <div className="card-content">
                            <label className="label">Nama Lengkap</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Masukkan Nama Lengkap"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <br />

                            <label className="label">Tanggal Booking</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                            </div>
                            <br />
                            <label className="label">Layanan</label>
                            <div className="control">
                                <div className="select is-fullwidth">
                                    <select
                                        value={selectedService}
                                        onChange={(e) => setSelectedService(e.target.value)}
                                    >
                                        <option value="">Pilih Layanan</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>
                                                {service}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <br />
                            <div className="field is-grouped is-grouped-right">
                                <div className="control">
                                    <button className="button is-link" onClick={handleSubmit}>Submit</button>
                                </div>
                                <div className="control">
                                    <button className="button is-link is-light" onClick={() => history.push('/services')}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;