import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingsTab = () => {
    const [bookings, setBookings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/bookingsform');
            setBookings(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteBookingById = async (deleteId) => {
        try {
            await axios.delete(`http://localhost:5000/bookingsform/${deleteId}`);
            window.alert('Booking berhasil dihapus!');
            fetchData();
        } catch (error) {
            console.log(error);
            window.alert('Terjadi kesalahan saat menghapus booking.');
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
    const currentItems = bookings.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <div className="card" style={cardStyle}>
                <div className="card-content">
                    <div className="columns mt-5 is-centered">
                        <div className="column is-fullwidth">
                            <div className="table-container" style={tableContainer}>
                                {bookings.length > 0 ? (
                                    <table className="table is-striped is-fullwidth">
                                        {/* Table header */}
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Nama</th>
                                                <th>Tanggal Booking</th>
                                                <th>Layanan</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        {/* Table body */}
                                        <tbody>
                                            {currentItems.map((booking, index) => (
                                                <tr key={booking.id}>
                                                    <td>{indexOfFirstItem + index + 1}</td>
                                                    <td>{booking.name}</td>
                                                    <td>{new Date(booking.date).toLocaleDateString('id-ID')}</td> {/* Format data tanggal sesuai kebutuhan */}
                                                    <td>{booking.service}</td>
                                                    <td>
                                                        <div className="field has-addons">
                                                            <div className="control">
                                                                <button
                                                                    className="button is-link is-danger"
                                                                    onClick={() => deleteBookingById(booking.id)}>
                                                                    Hapus
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>No bookings available.</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="pagination is-centered mt-3">
                        <ul className="pagination-list">
                            {Array.from({ length: Math.ceil(bookings.length / itemsPerPage) }).map((_, index) => (
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

export default BookingsTab;