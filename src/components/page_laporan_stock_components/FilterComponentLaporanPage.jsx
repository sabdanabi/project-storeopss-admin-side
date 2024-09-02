import { useState } from "react";
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
    const [selectedYearName, setSelectedYearName] = useState("Pilih Tahun");
    const [selectedMonthName, setSelectedMonthName] = useState("Pilih Bulan");

    const months = [
        { key: "01", name: "Januari" },
        { key: "02", name: "Februari" },
        { key: "03", name: "Maret" },
        { key: "04", name: "April" },
        { key: "05", name: "Mei" },
        { key: "06", name: "Juni" },
        { key: "07", name: "Juli" },
        { key: "08", name: "Agustus" },
        { key: "09", name: "September" },
        { key: "10", name: "Oktober" },
        { key: "11", name: "November" },
        { key: "12", name: "Desember" }
    ];

    const years = [
        { key: "2024", name: "2024" },
        { key: "2025", name: "2025" },
        { key: "2026", name: "2026" },
        { key: "2027", name: "2027" }
    ];

    const handleYearChange = (yearKey) => {
        const selectedYear = years.find(year => year.key === yearKey);
        if (selectedYear) {
            setSelectedYearName(selectedYear.name);
            onFilterChange(yearKey, selectedMonth);
        }
    };

    const handleMonthChange = (monthKey) => {
        const selectedMonth = months.find(month => month.key === monthKey);
        if (selectedMonth) {
            setSelectedMonthName(selectedMonth.name);
            onFilterChange(selectedYear, monthKey);
        }
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
                        onSearchClick();
                    } else {
                        onFilterChange(selectedYear, selectedMonth);
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
                        <p className="text-[14px] font-normal mr-10 text-[#727E91]">
                            {selectedMonthName}
                        </p>
                    </MenuButton>
                    <MenuList className="max-h-60 overflow-y-auto">
                        {months.map((month) => (
                            <MenuItem key={month.key} onClick={() => handleMonthChange(month.key)}>
                                {month.name}
                            </MenuItem>
                        ))}
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
                        <p className="text-[14px] font-normal mr-10 text-[#727E91]">{selectedYearName}</p>
                    </MenuButton>
                    <MenuList className="max-h-60 overflow-y-auto">
                        {/* Daftar Tahun */}
                        {years.map((year) => (
                            <MenuItem key={year.key} onClick={() => handleYearChange(year.key)}>
                                {year.name}
                            </MenuItem>
                        ))}
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
