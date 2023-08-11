import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ReportsTab = () => {
    const [Reports, setReports] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [actionMenuVisible, setActionMenuVisible] = useState(false);
    const [selectedReport, setSelectedReport] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/reports');
            setReports(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleActionClick = (report) => {
        setSelectedReport(report);
        setActionMenuVisible(!actionMenuVisible);
    };

    const tableContainer = {
        overflowX: 'auto'
    }

    const cardStyle = {
        width: '500px',
        margin: 'auto',
    }

    // Hitung index data pertama dan terakhir untuk halaman saat ini
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Reports.slice(indexOfFirstItem, indexOfLastItem);

    // Fungsi untuk mengganti halaman saat ini
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <div className="card" style={cardStyle}>
                <div className="card-content">
                    <div className="columns mt-5 is-centered">
                        <div className="column is-fullwidth">
                            <div className="table-container" style={tableContainer}>
                                <table className="table is-striped is-fullwidth">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Nama</th>
                                            <th>Laporan</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <br />
                                        {currentItems.map((report, index) => (
                                            <tr key={report.id}>
                                                <td>{indexOfFirstItem + index + 1}</td>
                                                <td>{report.name}</td>
                                                <td>{report.reportIssue}</td>
                                                <td>
                                                     <div className="field has-addons">
                                                        <div className="control">
                                                        <Link
                                                                to={`/editreports/${report.id}`} // Gunakan URL dengan ID laporan
                                                                className="button is-link"
                                                            >
                                                                Edit
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="pagination is-centered mt-3">
                        <ul className="pagination-list">
                            {Array.from({ length: Math.ceil(Reports.length / itemsPerPage) }).map((_, index) => (
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

export default ReportsTab;