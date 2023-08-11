import React from 'react';

const BookingServ = () => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        // Tambahkan logika pengiriman formulir di sini
    };

    return (

        <div className='container'>
            <div className="columns">
                <div className="column is-two-thirds">
                    <div className="card">
                        <div className="card-content">
                            <label class="label">Nama Lengkap</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Masukan Nama Lengkap"
                                />
                            </div>
                            <br />
                            <div class="field">
                                <label class="label">Message</label>
                                <div class="control">
                                    <textarea class="textarea" placeholder="Masukan Laporan Anda"
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="field is-grouped is-grouped-right">
                                <div className="control">
                                    <button className="button is-link" onClick={handleSubmit}>Submit</button>
                                </div>
                                <div className="control">
                                    <button className="button is-link is-light">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingServ;