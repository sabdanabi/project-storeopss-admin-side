import {useState} from "react";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";

export function FilterNewProduct({searchQuery, handleSearchChange}) {
    const [selectedStatus, setSelectedStatus] = useState('Filter Produk Baru')

    const onStatusChange = (status) => {
        setSelectedStatus(status);
        handleStatusFilterChange(status);
    }

    return (
        <div className="bg-white h-[65px] py-3 px-6 relative border-b-[3px] border-gray-200 flex">
            <input
                type="text"
                placeholder="Cari Produk"
                value={searchQuery}
                onChange={handleSearchChange}
                className="py-2 pl-11 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                                focus:ring-indigo-500 focus:border-transparent w-full mr-5"
            />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-5 h-5 absolute top-5 left-10 text-[#8C95A4]">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
            </svg>

            <Menu>
                <MenuButton as={Button} rightIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 text-[#727E91]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                    </svg>
                }>
                    <p className="text-xs font-medium mr-10 text-[#727E91]">{selectedStatus}</p>
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => onStatusChange('Semua')}>Semua</MenuItem>
                    <MenuItem onClick={() => onStatusChange('Lunas')}>Lunas</MenuItem>
                    <MenuItem onClick={() => onStatusChange('Belum lunas')}>Belum Lunas</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}