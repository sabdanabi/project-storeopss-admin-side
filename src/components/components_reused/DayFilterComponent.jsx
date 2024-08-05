import React, { useState, useEffect } from 'react';
import FilterComponents from './FilterComponents';

const DayFilterComponent = ({ data }) => {
    const [dayFilter, setDayFilter] = useState('Filter Waktu');
    const [filteredData, setFilteredData] = useState(data);

    useEffect(() => {
        filterData();
    }, [searchQuery, dayFilter]);


    const handleDayFilterChange = (day) => {
        setDayFilter(day);
    };

    const filterData = () => {
        let filtered = data;

        if (searchQuery) {
            filtered = filtered.filter(item =>
                item.productName.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        if (dayFilter !== 'Filter Waktu') {
            const now = new Date();
            filtered = filtered.filter(item => {
                const itemDate = new Date(item.date); // assuming your items have a date property
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
        <div>
            <FilterComponents
                handleDayFilterChange={handleDayFilterChange}
            />
            <div>
                {filteredData.length === 0 ? (
                    <p>No results found</p>
                ) : (
                    filteredData.map(item => (
                        <div key={item.id}>
                            <p>{item.productName}</p>
                            <p>{item.status}</p>
                            <p>{item.date}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default DayFilterComponent;
