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
                className="flex items-center justify-between h-20 border-b-[3px] w-full px-6 py-4 bg-white border-gray-200">
                <h1 className="text-2xl font-semibold text-gray-900">Produk</h1>
                <Menu>
                    <MenuButton as={Button} className="w-48 h-12 text-lg group" bg='#1A4F8B' rightIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-5 h-5 text-white group-hover:text-[#1A4F8B]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                        </svg>
                    }>
                        <div className="flex items-center px-4 py-2 group rounded-lg">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 mr-2 text-white group-hover:text-[#1A4F8B]"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                            </svg>
                            <span className="text-white font-semibold group-hover:text-[#1A4F8B]">Produk</span>
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
}