import PropTypes from "prop-types";
import {Menu, MenuButton, MenuList, MenuItem, Button, Input} from '@chakra-ui/react';
import { useState } from "react";
import dayjs from "dayjs";

export default function FilterTransaksiComponents({handleSearchChange, searchQuery, handleRangeChange, selectedRange,
                                                      onFilterChange, handleSearchClick, handleKeyDown, handleFromDateChange, fromDate,
                                                      handleStatusFilterChange, handleToDateChange, toDate}) {

    const [selectedPaid, setSelectedPaid] = useState(null);

    const handleFilterChange = (paid) => {
        setSelectedPaid(paid);
        onFilterChange(paid);
    };

    const getSelectedText = () => {
        if (selectedPaid === true) return 'Lunas';
        if (selectedPaid === false) return 'Belum Lunas';
        return 'Pilih Status';
    };

    const getRangeText = () => {
        switch (selectedRange) {
            case 'daily':
                return 'Harian';
            case 'weekly':
                return 'Mingguan';
            case 'monthly':
                return 'Bulanan';
            default:
                return 'Pilih Rentang';
        }
    };

    return (
        <div className="bg-white h-[65px] flex py-3 px-6 relative border-b-[3px] border-gray-200 gap-5">
            <div className="w-[950px] flex items-center">
                <input
                    type="text"
                    placeholder="Cari Produk"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={handleKeyDown}
                    className="py-2 pl-11 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                                focus:ring-indigo-500 focus:border-transparent w-full"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 absolute top-5 left-10 text-[#8C95A4]"
                >
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
                </svg>
                <Button onClick={() => {
                    if (searchQuery.trim()) {
                        handleSearchClick();
                    } else {
                        console.log("Input kosong!");
                    }
                }} className="ml-2 h-36">
                    <p className="text-[#1a4f8b]">Cari</p>
                </Button>
            </div>

            <Menu>
                <MenuButton as={Button} rightIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 text-[#727E91] lg:hidden xl:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                    </svg>
                }>
                    <p className="text-[14px] font-normal mr-10 text-[#727E91] lg:text-xs xl:text-sm">{getSelectedText()}</p>
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => handleFilterChange(null)}>Semua</MenuItem>
                    <MenuItem onClick={() => handleFilterChange(true)}>Lunas</MenuItem>
                    <MenuItem onClick={() => handleFilterChange(false)}>Belum Lunas</MenuItem>
                </MenuList>
            </Menu>

            <Menu closeOnSelect={false}>
                <MenuButton as={Button} rightIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 text-[#727E91] lg:hidden xl:block">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                    </svg>
                }>
                    <p className="text-[14px] font-normal mr-10 text-[#727E91]">{getRangeText()}</p>
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => handleRangeChange('Semua')}>Semua</MenuItem>
                    <MenuItem onClick={() => handleRangeChange('daily')}>Harian</MenuItem>
                    <MenuItem onClick={() => handleRangeChange('weekly')}>Mingguan</MenuItem>
                    <MenuItem onClick={() => handleRangeChange('monthly')}>Bulanan</MenuItem>
                    <MenuItem>
                        <div className="flex items-center">
                            <p className="mr-2 text-xs">Dari Tanggal:</p>
                            <Input
                                type="date"
                                value={fromDate ? dayjs(fromDate).format('YYYY-MM-DD') : ""}
                                onChange={(e) => handleFromDateChange(e.target.value)}
                                placeholder="Pilih Tanggal Awal"
                            />
                        </div>
                    </MenuItem>
                    <MenuItem>
                        <p className="mx-2 text-xs">Sampai:</p>
                        <Input
                            type="date"
                            value={toDate ? dayjs(toDate).format('YYYY-MM-DD') : ""}
                            onChange={(e) => handleToDateChange(e.target.value)}
                            placeholder="Pilih Tanggal Akhir"
                        />
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    );
}

FilterTransaksiComponents.propTypes = {
    handleSearchChange: PropTypes.func,
    searchQuery: PropTypes.string,
    handleRangeChange: PropTypes.func,
    selectedRange: PropTypes.string,
    onFilterChange: PropTypes.func,
    handleSearchClick: PropTypes.func,
    handleKeyDown: PropTypes.func
};
