import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";

export function FilterRecapProductComponent() {
    return (
        <div className="bg-white h-[65px] py-3 relative border-b-[3px] border-gray-200 flex flex-row-reverse">

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
                        <p className="text-[14px]"><MenuItem>Januari</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>Februari</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>Maret</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>April</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>Mei</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>Juni</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>Juli</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>Agustus</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>September</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>November</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>Desember</MenuItem></p>
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
                        <p className="text-[14px]"><MenuItem>2024</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>2025</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>2025</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>2026</MenuItem></p>
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
                        <p className="text-[14px]"><MenuItem>Material Konstruksi</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>Perabotan</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>Cat</MenuItem></p>
                        <p className="text-[14px]"><MenuItem>Material Rumah </MenuItem></p>
                    </MenuList>
                </Menu>
            </div>

        </div>
    )
}