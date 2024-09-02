import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'
import {useState} from "react";
import PropTypes from "prop-types";

export default function FilterComponentsNotaPage({handleSearchChange, searchQuery, exportToExcel,
                                                     onFilterChange, handleRangeChange, selectedRange,
                                                     handleSearchClick, handleKeyDown}) {

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
        <div className="bg-white h-[65px] py-3 px-6 relative border-b-[3px] border-gray-200 flex">
            <input
                type="text"
                placeholder="Cari Produk"
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown}
                className="py-2 pl-11 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                                focus:ring-indigo-500 focus:border-transparent w-[600px] mr-3"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-5 h-5 absolute top-5 left-10 text-[#8C95A4]">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
            </svg>
            <Button onClick={() => {
                if (searchQuery.trim()) {
                    handleSearchClick();
                } else {
                    console.log("Input kosong!");
                }
            }} className="ml-2 h-36"><p className="text-[#1a4f8b]">Cari</p></Button>
            <div className='mr-4 ml-2'>
                <Menu>
                    <MenuButton as={Button} rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5 text-[#727E91]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                        </svg>
                    }>
                        <p className="text-xs font-normal mr-10 text-[#727E91]">{getSelectedText()}</p>
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => handleFilterChange(null)}>Semua</MenuItem>
                        <MenuItem onClick={() => handleFilterChange(true)}>Lunas</MenuItem>
                        <MenuItem onClick={() => handleFilterChange(false)}>Belum Lunas</MenuItem>
                    </MenuList>
                </Menu>
            </div>

            <div>
                <Menu>
                    <MenuButton as={Button} rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5 text-[#727E91]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                        </svg>
                    }>
                        <p className="text-[12px] font-normal mr-2 text-[#727E91]">{getRangeText()}</p>
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => handleRangeChange('Semua')}>Semua</MenuItem>
                        <MenuItem onClick={() => handleRangeChange('daily')}>Harian</MenuItem>
                        <MenuItem onClick={() => handleRangeChange('weekly')}>Mingguan</MenuItem>
                        <MenuItem onClick={() => handleRangeChange('monthly')}>Bulanan</MenuItem>
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
                <p className="text-xs font-medium text-[#1a4f8b]  mt-[0px]">Unduh Tabel</p>
            </button>
        </div>
    )
}

FilterComponentsNotaPage.propTypes = {
    handleSearchChange: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    exportToExcel: PropTypes.func.isRequired,
};