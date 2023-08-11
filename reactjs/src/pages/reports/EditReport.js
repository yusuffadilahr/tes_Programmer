import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import reportImage from '../../assets/report-an.jpg';

const EditReports = () => {
    const [name, setName] = useState('');
    const [reportIssue, setReportIssue] = useState('');
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        getReportById();
    }, []);

    const isFormValid = () => {
        // Add any additional validation checks here if needed
        return (
            name.trim() !== '' &&
            reportIssue.trim() !== ''
        );
    };

    const updateReport = async (e) => {
        e.preventDefault();

        // Check if the form is valid
        if (!isFormValid()) {
            window.alert('Harap isi semua field sebelum mengirimkan formulir!');
            return;
        }

        try {
            await axios.put(`http://localhost:5000/reports/${id}`, {
                name: name,
                reportIssue: reportIssue
            });
            window.alert('Laporan berhasil diupdate!');
            history.push('/reportstab');
        } catch (error) {
            if (error.response) {
                window.alert('Laporan gagal dikirimkan!');
            }
        }
    };

    const getReportById = async () => {
        const response = await axios.get(`http://localhost:5000/reports/${id}`);
        setName(response.data.name);
        setReportIssue(response.data.reportIssue);
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
                                <label class="label">Message</label>
                                <div class="control">
                                    <textarea class="textarea" placeholder="Masukan Laporan Anda" 
                                    value={reportIssue} onChange={(e) => setReportIssue(e.target.value)}     
                                    />
                                </div>
                            </div>
                            <br />
                            <div className="field is-grouped is-grouped-right">
                                <div className="control">
                                    <button className="button is-link" onClick={updateReport}>Submit</button>
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

export default EditReports;