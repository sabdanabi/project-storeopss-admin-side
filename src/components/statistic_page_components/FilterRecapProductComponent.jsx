import {
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup, } from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

export function FilterRecapProductComponent({ onFilterChange, leastSoldProduct, mostSoldProduct }) {
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
        <div className="bg-white h-[80px] py-3 relative border-b-[3px] border-gray-200 flex gap-32">
            <div className="ml-10 w-96">
                <StatGroup>
                    <Stat mr={8}>
                        <StatLabel fontSize="xs">Produk Terpopuler</StatLabel>
                        <StatNumber fontSize="sm">{mostSoldProduct?.name || "N/A"}</StatNumber>
                        <StatHelpText>
                            <StatArrow type='increase' />
                            {mostSoldProduct ? `${mostSoldProduct.quantity} terjual` : "N/A"}
                        </StatHelpText>
                    </Stat>

                    <Stat>
                        <StatLabel fontSize="xs">Produk Terendah</StatLabel>
                        <StatNumber fontSize="sm">{leastSoldProduct?.name || "N/A"}</StatNumber>
                        <StatHelpText>
                            <StatArrow type='decrease' />
                            {leastSoldProduct ? `${leastSoldProduct.quantity} terjual` : "N/A"}
                        </StatHelpText>
                    </Stat>
                </StatGroup>
            </div>
            <div className={"flex"}>
                <div className='mr-4 ml-4'>
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-5 h-5 text-[#727E91]">
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-5 h-5 text-[#727E91]">
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

        </div>
    )
}

FilterRecapProductComponent.propTypes = {
    onFilterChange: PropTypes.func,
    leastSoldProduct: PropTypes.shape({
        name: PropTypes.string,
        quantity: PropTypes.number,
    }),
    mostSoldProduct: PropTypes.shape({
        name: PropTypes.string,
        quantity: PropTypes.number,
    }),
};