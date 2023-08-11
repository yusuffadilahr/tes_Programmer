import React from 'react';

const NextPagination = () => {
    const paginationStyle = {
        fontSize: '12px',
    };

    return (
        <div className='container'>
            <div className='columns is-mobile is-centered'>
                <div className='column is-10'>
                    <nav className="pagination is-rounded" role="navigation" aria-label="pagination" style={paginationStyle}>

                        <a className="pagination-next is-right" href='/tabpegawai'>Next page</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default NextPagination