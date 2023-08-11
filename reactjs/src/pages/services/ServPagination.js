import React from 'react';

const ServPagination = () => {
    const paginationStyle = {
        fontSize: '12px',
    };

    return (
        <div className='container'>
            <div className='columns is-mobile is-centered'>
                <div className='column is-10'>
                    <nav className="pagination is-rounded" role="navigation" aria-label="pagination" style={paginationStyle}>

                        <a className="pagination-previous" href='/services'>Previous</a>
                        <a className="pagination-next" href='/bookingstab'>Next page</a>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default ServPagination