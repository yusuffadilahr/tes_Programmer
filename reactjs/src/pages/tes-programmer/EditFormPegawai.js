import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import reportImage from '../../assets/report-an.jpg';

const EditPegawai = () => {
    const [name, setName] = useState('');
    const [jabatan, setJabatan] = useState('');
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        getPegawaibyID();
    }, []);

    const isFormValid = () => {
        // Add any additional validation checks here if needed
        return (
            name.trim() !== '' &&
            jabatan.trim() !== ''
        );
    };

    const UpdataPegawai = async (e) => {
        e.preventDefault();

        // Check if the form is valid
        if (!isFormValid()) {
            window.alert('Harap isi semua field sebelum mengirimkan formulir!');
            return;
        }

        try {
            await axios.put(`http://localhost:5000/pegawai/${id}`, {
                name: name,
                jabatan: jabatan
            });
            window.alert('Laporan berhasil diupdate!');
            history.push('/tabpegawai');
        } catch (error) {
            if (error.response) {
                window.alert('Laporan gagal dikirimkan!');
            }
        }
    };

    const getPegawaibyID = async () => {
        const response = await axios.get(`http://localhost:5000/pegawai/${id}`);
        setName(response.data.name);
        setJabatan(response.data.jabatan);
    }

    return (
        <div className='container'>
            <div className="columns">
                <div className="column is-one-third">
                    {/* Bagian gambar */}
                    <img src={reportImage} alt="Report Image" style={{ width: '100%', height: 'auto' }} />
                </div>
                <div className="column is-two-thirds">
                    {/* Bagian formulir */}
                    <div className="card">
                        <div className="card-content">
                                <label class="label">Nama Lengkap</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Masukan Nama Lengkap"
                                    value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <br/>
                            <div class="field">
                                <label class="label">Jabatan</label>
                                <div class="control">
                                    <textarea class="input" placeholder="Masukan Jabatan Anda" 
                                    value={jabatan} onChange={(e) => setJabatan(e.target.value)}     
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="field is-grouped is-grouped-right">
                                <div className="control">
                                    <button className="button is-link" onClick={UpdataPegawai}>Submit</button>
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

export default EditPegawai;