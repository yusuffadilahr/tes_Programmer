import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Pegawai = () => {
    const [name, setName] = useState('');
    const [jabatan, setJabatan] = useState('');
    const history = useHistory();

    const isFormValid = () => {

        return (
            name.trim() !== '' &&
            jabatan.trim() !== ''
        );
    };

    const createPegawai = async (e) => {
        e.preventDefault();

        // Check if the form is valid
        if (!isFormValid()) {
            window.alert('Harap isi semua field sebelum mengirimkan formulir!');
            return;
        }


        try {
            await axios.post('http://localhost:5000/pegawai', {
                name: name,
                jabatan: jabatan
            });
            window.alert('Mantap! Pegawai baru berhasil di tambahkan!');
            history.push('/dashboard');
        } catch (error) {
            if (error.response) {
                window.alert('Terjadi kesalahan pada server, silahkan coba lagi nanti!');
            }
        }
    }


    return (
        <div className='container'>
            <div className="card">
                <div className="card-content">
                    <p className="title is-size-6">Nama Lengkap</p>
                    <div className="control">
                        <input className="input" type="text" placeholder="Masukan Nama Lengkap"
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <br></br>
                    <p className="title is-size-6">Jabatan</p>
                    <div className="control">
                        <input className="input" type="text" placeholder="Masukan Email"
                            value={jabatan} onChange={(e) => setJabatan(e.target.value)} />
                    </div>
                    <br></br>
                    <div className="field is-grouped is-grouped-right">
                        <div className="control">
                            <button className="button is-link" onClick={createPegawai}>Submit</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Pegawai;
