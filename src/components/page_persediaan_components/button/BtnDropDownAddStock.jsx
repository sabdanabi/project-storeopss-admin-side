import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'
import PopUpAddStock from "./PopUpAddStock.jsx";
import {useState} from "react";
import PropTypes from "prop-types";
import {PopUpProductExcel} from "./PopUpProductExcel.jsx";

export function BtnDropDownAddStock({addNewProduct, updateProductsState, importProductExcel}) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupOpenFormExcel, setIsPopupOpenFormExcel] = useState(false);
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
    const openPopupFormExcel = () => setIsPopupOpenFormExcel(true);
    const closePopupFormExcel = () => setIsPopupOpenFormExcel(false);

    return (
        <>
            <div
                className="flex items-center justify-between h-16 border-b-[3px] w-full px-6 py-4 bg-white border-gray-200">
                <div className="flex items-center">
                <h1 className="text-2xl font-semibold text-blue-gray-800">Produk</h1>
                <h6 className="text-[15px] font-regular text-gray-500 ml-4 mt-2">atur persediaan produk anda dan dapatkan data yang up to date</h6>
            </div>
                <Menu>
                    <MenuButton as={Button} className="w-40 h-12 text-lg group" bg='#1A4F8B' _hover={{ bg: "#1a4f8bcd" }} rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                        </svg>
                    }>
                        <div className="flex items-center px-0 py-2 group rounded-lg">
                            <span className="text-white font-normal  text-[14px]">Tambah Produk</span>
                        </div>
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={openPopup}>Tambah Produk</MenuItem>
                        <MenuItem onClick={openPopupFormExcel}>Tambah Produk dari Excel</MenuItem>
                    </MenuList>
                </Menu>

                <PopUpAddStock
                    isPopupOpen={isPopupOpen}
                    closePopup={closePopup}
                    updateProductsState={updateProductsState}
                    addNewProduct={addNewProduct}
                />
                <PopUpProductExcel
                    updateProductsState={updateProductsState}
                    importProductExcel={importProductExcel}
                    isPopupOpenFormExcel={isPopupOpenFormExcel}
                    closePopupFormExcel={closePopupFormExcel}
                />
            </div>
        </>
    )
}

BtnDropDownAddStock.propTypes = {
    updateProductsState: PropTypes.func.isRequired,
    addNewProduct: PropTypes.func.isRequired,
    importProductExcel: PropTypes.func
}