import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react';

export default function TabsPagePersediaan({ items, setSelectedTab, exportToExcel}) {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedCtgry, setSelectedDay] = useState('Kategori Produk'); 
    const firstBtnRef = useRef(null);

    useEffect(() => {
        if (firstBtnRef.current) {
            firstBtnRef.current.focus();
        }
    }, []);

    const handleTabClick = (index) => {
        setSelectedTab(index);
        setActiveTab(index);
    };

    const onFilterChange = (dayFilter) => {
        setSelectedDay(dayFilter);
    }

    return (
        <div>
            <div className="bg-white h-[55px] flex pt-0 border-y-[3px] border-gray-200 justify-between  items-center">
                <div className="flex">
                    <div className="ml-6">
                        {items.map((item, index) => (
                            <button
                                key={index}
                                ref={index === 0 ? firstBtnRef : null}
                                onClick={() => handleTabClick(index)}
                                className={`font-semibold text-blue-gray-700 mr-10 text-[14px] outline-none
                                    ${activeTab === index ? 'text-light-blue-900' : 'hover:text-light-blue-900 focus:outline-none'}`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='mr-6 text-[14px] flex'>

                    <Menu>
                        <MenuButton as={Button} size="sm"
                                    w="150px"
                                    h="30px" rightIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-4 h-4 text-[#727E91]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                            </svg>
                        }>
                            <p className="text-[12px] font-normal mr-10 text-[#727E91]">{selectedCtgry}</p>
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => onFilterChange('Kategori 1')}>Kategori 1</MenuItem>
                            <MenuItem onClick={() => onFilterChange('Kategori 2')}>Kategori 2</MenuItem>
                            <MenuItem onClick={() => onFilterChange('Kategori 3')}>Kategori 3</MenuItem>
                        </MenuList>
                    </Menu>

                    <button onClick={exportToExcel}
                        className=" bg-white w-32 h-7 rounded-md flex justify-center pt-[2px] ml-4
                         border-2 border-[#1a4f8b]">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-5 text-[#1a4f8b] mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"/>
                        </svg>
                        <p className="text-xs font-medium text-[#1a4f8b]  mt-[2px]">Unduh Tabel</p>
                    </button>
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

TabsPagePersediaan.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
    })).isRequired,
    setSelectedTab: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        productName: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    })).isRequired,
    searchQuery: PropTypes.string.isRequired,
};
