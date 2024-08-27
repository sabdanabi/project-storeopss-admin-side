import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";

export function FilterRecapProductComponent({ onFilterChange }) {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');

    const handleYearChange = (year) => {
        setSelectedYear(year);
        onFilterChange(year, selectedMonth);
    };

    const handleMonthChange = (month) => {
        setSelectedMonth(month);
        onFilterChange(selectedYear, month);
    };

    return (
        <div className="bg-white h-[65px] py-3 relative border-b-[3px] border-gray-200 flex flex-row-reverse">
            <div className='mr-4 ml-4'>
                <Menu>
                    <MenuButton as={Button} rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#727E91]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                        </svg>
                    }>
                        <p className="text-[14px] font-normal mr-10 text-[#727E91]">Pilih Bulan</p>
                    </MenuButton>
                    <MenuList>
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

            <div className='mr-4 ml-4'>
                <Menu>
                    <MenuButton as={Button} rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#727E91]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                        </svg>
                    }>
                        <p className="text-[14px] font-normal mr-10 text-[#727E91]">Pilih Tahun</p>
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => handleYearChange('2024')}>2024</MenuItem>
                        <MenuItem onClick={() => handleYearChange('2025')}>2025</MenuItem>
                        <MenuItem onClick={() => handleYearChange('2026')}>2026</MenuItem>
                        <MenuItem onClick={() => handleYearChange('2027')}>2027</MenuItem>
                    </MenuList>
                </Menu>
            </div>

            <div className='mr-4 ml-4'>
                <Menu>
                    <MenuButton as={Button} rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#727E91]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                        </svg>
                    }>
                        <p className="text-[14px] font-normal mr-10 text-[#727E91]">Pilih Kategori</p>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Material Konstruksi</MenuItem>
                        <MenuItem>Perabotan</MenuItem>
                        <MenuItem>Cat</MenuItem>
                        <MenuItem>Material Rumah</MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </div>
    )
}
