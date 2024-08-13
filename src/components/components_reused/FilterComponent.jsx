import PropTypes from 'prop-types';

const FilterComponents = ({ handleDayFilterChange }) => {
    return (
        <div>
            <label htmlFor="dayFilter">Filter by Date:</label>
            <select id="dayFilter" onChange={(e) => handleDayFilterChange(e.target.value)}>
                <option value="Filter Waktu">Filter Waktu</option>
                <option value="Hari ini">Hari ini</option>
                <option value="1 Minggu">1 Minggu</option>
                <option value="1 Bulan">1 Bulan</option>
            </select>
        </div>
    );
};

FilterComponents.propTypes = {
    handleDayFilterChange: PropTypes.func.isRequired,
};

export default FilterComponents;
