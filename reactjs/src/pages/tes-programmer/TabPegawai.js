import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const PegawaiTab = () => {
    const [Pegawai, setPegawai] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/pegawai');
            setPegawai(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deletePegawaibyID = async (deleteId) => {
        try {
            await axios.delete(`http://localhost:5000/pegawai/${deleteId}`);
            window.alert('Pegawai berhasil dihapus!');
            fetchData();
        } catch (error) {
            console.log(error);
            window.alert('Terjadi kesalahan saat menghapus.');
        }
    };

    const tableContainer = {
        overflowX: 'auto'
    };

    const cardStyle = {
        width: '500px',
        margin: 'auto',
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Pegawai.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <div className="card" style={cardStyle}>
                <div className="card-content">
                    <div className="columns mt-5 is-centered">
                        <div className="column is-fullwidth">
                            <div className="table-container" style={tableContainer}>
                                {Pegawai.length > 0 ? (
                                    <table className="table is-striped is-fullwidth">
                                        {/* Table header */}
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Nama</th>
                                                <th>Jabatan</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        {/* Table body */}
                                        <tbody>
                                            {currentItems.map((pegawai, index) => (
                                                <tr key={pegawai.id}>
                                                    <td>{indexOfFirstItem + index + 1}</td>
                                                    <td>{pegawai.name}</td>
                                                    <td>{pegawai.jabatan}</td>
                                                    <td>
                                                        <div className="field has-addons">
                                                            <div className="control">
                                                                <button
                                                                    className="button is-link is-danger"
                                                                    onClick={() => deletePegawaibyID(pegawai.id)}>
                                                                    Hapus
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="field has-addons">
                                                            <div className="control">
                                                                <Link
                                                                    to={`/editpegawai/${pegawai.id}`} // Gunakan URL dengan ID pegawai
                                                                    className="button is-link">
                                                                    Edit
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>Not available.</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="pagination is-centered mt-3">
                        <ul className="pagination-list">
                            {Array.from({ length: Math.ceil(Pegawai.length / itemsPerPage) }).map((_, index) => (
                                <li key={index}>
                                    <button
                                        className={`pagination-link ${currentPage === index + 1 ? 'is-current' : ''}`}
                                        onClick={() => paginate(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PegawaiTab;