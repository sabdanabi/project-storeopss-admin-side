import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import PropTypes from "prop-types";

export function FilterComponentLaporanPage({
                                               searchQuery,
                                               onSearchClick,
                                               onFilterChange,
                                               handleSearchChange,
                                               handleSearchKeyDown,
                                               selectedMonth,
                                               selectedYear
                                           }) {
    const handleYearChange = (year) => {
        onFilterChange(year, selectedMonth);
    };

    const handleMonthChange = (month) => {
        onFilterChange(selectedYear, month);
    };

    return (
        <div className="bg-white h-[65px] py-3 px-6 relative border-b-[3px] border-gray-200 flex">
            <input
                type="text"
                placeholder="Cari Produk"
                value={searchQuery}
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
                className="py-2 pl-11 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                                focus:ring-indigo-500 focus:border-transparent w-full mr-5"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-5 h-5 absolute top-5 left-10 text-[#8C95A4]">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
            </svg>

            <Button
                onClick={() => {
                    if (searchQuery.trim()) {
                        onSearchClick(); // Trigger search only if input is not empty
                    } else {
                        onFilterChange(selectedYear, selectedMonth); // Reload table with unfiltered data if input is empty
                    }
                }}
                className="ml-2 h-36"
            >
                <p className="text-[#1a4f8b]">Cari</p>
            </Button>

            <div className="mr-4 ml-4">
                <Menu>
                    <MenuButton as={Button} rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5 text-[#727E91]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                        </svg>
                    }>
                        <p className="text-[14px] font-normal mr-10 text-[#727E91]">Pilih Bulan</p>
                    </MenuButton>
                    <MenuList>
                        {/* Daftar Bulan */}
                        <MenuItem onClick={() => handleMonthChange('01')}>Januari</MenuItem>
                        <MenuItem onClick={() => handleMonthChange('02')}>Februari</MenuItem>
                        <MenuItem onClick={() => handleMonthChange('03')}>Maret</MenuItem>
                        <MenuItem onClick={() => handleMonthChange('04')}>April</MenuItem>
                        <MenuItem onClick={() => handleMonthChange('05')}>Mei</MenuItem>
                        <MenuItem onClick={() => handleMonthChange('06')}>Juni</MenuItem>
                        <MenuItem onClick={() => handleMonthChange('07')}>Juli</MenuItem>
                        <MenuItem onClick={() => handleMonthChange('08')}>Agustus</MenuItem>
                        <MenuItem onClick={() => handleMonthChange('09')}>September</MenuItem>
                        <MenuItem onClick={() => handleMonthChange('10')}>Oktober</MenuItem>
                        <MenuItem onClick={() => handleMonthChange('11')}>November</MenuItem>
                        <MenuItem onClick={() => handleMonthChange('12')}>Desember</MenuItem>
                    </MenuList>
                </Menu>
            </div>

            <div className="mr-4 ml-4">
                <Menu>
                    <MenuButton as={Button} rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5 text-[#727E91]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                        </svg>
                    }>
                        <p className="text-[14px] font-normal mr-10 text-[#727E91]">Pilih Tahun</p>
                    </MenuButton>
                    <MenuList>
                        {/* Daftar Tahun */}
                        <MenuItem onClick={() => handleYearChange('2024')}>2024</MenuItem>
                        <MenuItem onClick={() => handleYearChange('2025')}>2025</MenuItem>
                        <MenuItem onClick={() => handleYearChange('2026')}>2026</MenuItem>
                        <MenuItem onClick={() => handleYearChange('2027')}>2027</MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </div>
    );
}

FilterComponentLaporanPage.propTypes = {
    searchQuery: PropTypes.string,
    onSearchClick: PropTypes.func,
    onFilterChange: PropTypes.func,
    handleSearchChange: PropTypes.func,
    handleSearchKeyDown: PropTypes.func,
    selectedMonth: PropTypes.string,
    selectedYear: PropTypes.string,
};
