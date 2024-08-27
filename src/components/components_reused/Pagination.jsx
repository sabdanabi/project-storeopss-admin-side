import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ itemsPerPage, totalItems, currentPage, handlePageChange }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="flex justify-center space-x-2 mt-4">
                <li>
                    <button
                        onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                        className={`px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'}`}
                        disabled={currentPage === 1}
                    >
                        &lt;&lt;
                    </button>
                </li>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <button
                            onClick={() => handlePageChange(number)}
                            className={`px-3 py-1 border rounded ${number === currentPage ? 'bg-gray-300' : 'bg-white'}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
                <li>
                    <button
                        onClick={() => currentPage < pageNumbers.length && handlePageChange(currentPage + 1)}
                        className={`px-3 py-1 border rounded ${currentPage === pageNumbers.length ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'}`}
                        disabled={currentPage === pageNumbers.length}
                    >
                        &gt;&gt;
                    </button>
                </li>
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    itemsPerPage: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    handlePageChange: PropTypes.func.isRequired,
};

export default Pagination;
