import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import FilterComponents from './FilterComponent'; // Ensure this import path is correct

const DayFilterComponent = ({ data, searchQuery }) => {
    const [dayFilter, setDayFilter] = useState('Filter Waktu');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        filterData();
    }, [searchQuery, dayFilter, data]); // Added `data` to dependencies

    const handleDayFilterChange = (day) => {
        setDayFilter(day);
    };

    const filterData = () => {
        let filtered = data;

        // Check if data is an array
        if (!Array.isArray(data)) {
            console.error('Expected data to be an array');
            return;
        }

        // Filter by search query
        if (searchQuery) {
            filtered = filtered.filter(item =>
                item.productName.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        // Filter by day filter
        if (dayFilter !== 'Filter Waktu') {
            const now = new Date();
            filtered = filtered.filter(item => {
                const itemDate = new Date(item.date);

                // Check if item.date is a valid date
                if (isNaN(itemDate.getTime())) {
                    console.error(`Invalid date format: ${item.date}`);
                    return false;
                }

                switch (dayFilter) {
                    case 'Hari ini':
                        return itemDate.toDateString() === now.toDateString();
                    case '1 Minggu':
                        return itemDate >= new Date(now.setDate(now.getDate() - 7));
                    case '1 Bulan':
                        return itemDate >= new Date(now.setMonth(now.getMonth() - 1));
                    default:
                        return true;
                }
            });
        }

        setFilteredData(filtered);
    };

    return (
        <div className="p-4">
            <FilterComponents handleDayFilterChange={handleDayFilterChange} />
            <div className="mt-4">
                {filteredData.length === 0 ? (
                    <p className="text-center text-gray-500">No results found</p>
                ) : (
                    filteredData.map(item => (
                        <div key={item.id} className="border p-4 mb-2 rounded shadow-sm">
                            <p className="font-semibold text-lg">{item.productName}</p>
                            <p className="text-gray-700">{item.status}</p>
                            <p className="text-gray-500">{item.date}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

DayFilterComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired
    })).isRequired,
    searchQuery: PropTypes.string.isRequired
};

export default DayFilterComponent;
