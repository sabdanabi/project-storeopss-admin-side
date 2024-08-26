import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'
import {useState} from "react";
import PropTypes from "prop-types";

export default function FilterComponentRestock({handleSearchChange, searchQuery, handleDayFilterChange, exportToExcel, handleRangeChange, selectedRange}) {

    return (
        <div className="bg-white h-[65px] py-3 px-6 relative border-b-[3px] border-gray-200 flex">
            <input
                type="text"
                placeholder="Cari Produk"
                value={searchQuery}
                onChange={handleSearchChange}
                className="py-2 pl-11 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                                focus:ring-indigo-500 focus:border-transparent w-[800px] mr-6"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-5 h-5 absolute top-5 left-10 text-[#8C95A4]">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
            </svg>

            <div className=''>
                <Menu>
                    <MenuButton as={Button} rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5 text-[#727E91]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                        </svg>
                    }>
                        <p className="text-[14px] font-normal mr-10 text-[#727E91]">{selectedRange}</p>
                    </MenuButton>
                    <MenuList>
                        <p className="text-[14px]"><MenuItem onClick={() => handleRangeChange('Semua')}>Semua</MenuItem>
                        </p>
                        <p className="text-[14px]"><MenuItem
                            onClick={() => handleRangeChange('daily')}>Harian</MenuItem></p>
                        <p className="text-[14px]"><MenuItem
                            onClick={() => handleRangeChange('weekly')}>Mingguan</MenuItem></p>
                        <p className="text-[14px]"><MenuItem
                            onClick={() => handleRangeChange('monthly')}>Bulanan</MenuItem></p>
                    </MenuList>
                </Menu>
            </div>
            <button onClick={exportToExcel}
                    className=" bg-white w-32 h-8.5 rounded-md flex justify-center items-center ml-3
                         border-2 border-[#1a4f8b]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-5 text-[#1a4f8b] mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"/>
                </svg>
                <p className="text-xs font-medium text-[#1a4f8b]  mt-[2px]">Unduh Tabel</p>
            </button>
        </div>
    )
}

FilterComponentRestock.propTypes = {
    handleSearchChange: PropTypes.func,
    searchQuery: PropTypes.string,
    handleDayFilterChange: PropTypes.func,
    exportToExcel: PropTypes.func,
};