import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
// import {
//     Menu,
//     MenuButton,
//     MenuList,
//     MenuItem,
//     Button,
// } from '@chakra-ui/reacxt';

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

                    {/*<Menu>*/}
                    {/*    <MenuButton as={Button} size="sm"*/}
                    {/*                w="150px"*/}
                    {/*                h="30px" rightIcon={*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}*/}
                    {/*             stroke="currentColor" className="w-4 h-4 text-[#727E91]">*/}
                    {/*            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>*/}
                    {/*        </svg>*/}
                    {/*    }>*/}
                    {/*        <p className="text-[12px] font-normal mr-10 text-[#727E91]">{selectedCtgry}</p>*/}
                    {/*    </MenuButton>*/}
                    {/*    <MenuList>*/}
                    {/*        {products.map((products) => (*/}
                    {/*            <MenuItem onClick={() => onFilterChange('Kategori 1')}> {products.category} </MenuItem>*/}
                    {/*        ))}*/}
                    {/*    </MenuList>*/}
                    {/*</Menu>*/}

                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

TabsPagePersediaan.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
    })),
    setSelectedTab: PropTypes.func,
    searchQuery: PropTypes.string,
    exportToExcel: PropTypes.func
};
