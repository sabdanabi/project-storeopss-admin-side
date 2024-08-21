import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'
import {useState} from "react";

export default function FilterComponentNewProduk({handleSearchChange, searchQuery, handleDayFilterChange, exportToExcel}) {

    const [selectedDay, setSelectedDay] = useState("Pilih Waktu")
    const onFilterChange = (dayFilter)  => {
        setSelectedDay(dayFilter);
        handleDayFilterChange(dayFilter);
    }

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
                        <p className="text-[14px] font-normal mr-10 text-[#727E91]">{selectedDay}</p>
                    </MenuButton>
                    <MenuList>
                        <p className="text-[14px]"><MenuItem onClick={() => onFilterChange('Hari ini')}>Hari
                            ini</MenuItem></p>
                        <p className="text-[14px]"><MenuItem onClick={() => onFilterChange('1 Minggu')}>1
                            Minggu</MenuItem></p>
                        <p className="text-[14px]"><MenuItem onClick={() => onFilterChange('1 Bulan')}>1
                            Bulan</MenuItem></p>
                        <p className="text-[14px]"><MenuItem onClick={() => onFilterChange('Pilih tanggal')}>Pilih
                            tanggal</MenuItem></p>
                        <p className="text-[14px]"><MenuItem onClick={() => onFilterChange('Pilih antara tanggal')}>Pilih
                            antara tanggal</MenuItem></p>
                    </MenuList>
                </Menu>
            </div>
            <button onClick={exportToExcel}
                    className=" bg-white w-32 h-7 rounded-md flex justify-center pt-[2px] ml-3 mt-1
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