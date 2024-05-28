import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import FormAddProduk from "./FormAddProduk.jsx";

export default function BtnAddStock({ titlePage, titleBtn, updateProductsState, addNewProduct }) {
    return (
        <>
            <div className="flex items-center justify-between h-20 border-b-[3px] w-full px-6 py-4 bg-white border-gray-200">
                <h1 className="text-2xl font-semibold text-gray-900">{titlePage}</h1>
                <Popup
                    trigger={
                        <button className="flex items-center px-4 py-2 bg-[#1A4F8B] group rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 mr-2 text-white group-hover:text-[#1A4F8B]"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            <span className="text-white font-semibold group-hover:text-[#1A4F8B]">{titleBtn}</span>
                        </button>
                    }
                    modal
                    nested
                >
                    {close => (
                        <div className="modal">
                            <div className="fixed inset-0 flex justify-center items-center h-screen bg-black/40">
                                <div className="bg-white rounded-xl shadow p-5 transition-all w-[900px] h-[605px]">
                                    <div className="flex justify-between">
                                        <p className="font-semibold text-2xl mb-7 m-auto">Tambah Produk</p>
                                        <button onClick={() => close()} className="h-7">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-8 h-8 text-red-600"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <FormAddProduk
                                        refreshProducts={updateProductsState}
                                        addNewProduct={addNewProduct}
                                        close={close}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
        </>
    );
}

BtnAddStock.propTypes = {
    titlePage: PropTypes.string.isRequired,
    titleBtn: PropTypes.string.isRequired,
    updateProductsState: PropTypes.func.isRequired,
    addNewProduct: PropTypes.func.isRequired,
};
