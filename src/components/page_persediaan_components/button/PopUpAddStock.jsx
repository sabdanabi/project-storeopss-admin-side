import PropTypes from "prop-types";
import Popup from "reactjs-popup";
import FormAddProduk from "../form/FormAddProduk.jsx";

export default function PopUpAddStock({updateProductsState, addNewProduct, closePopup, isPopupOpen }) {
    return (
        <>
            <Popup  open={isPopupOpen} closeOnDocumentClick onClose={closePopup} modal nested >
                {close => (
                    <div className="modal">
                        <div className="fixed inset-0 flex justify-center items-center h-screen bg-black/40">
                            <div className="bg-white rounded-xl shadow p-5 transition-all w-[900px] h-[705px]">
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
        </>
    );
}

PopUpAddStock.propTypes = {
    titlePage: PropTypes.string.isRequired,
    titleBtn: PropTypes.string.isRequired,
    updateProductsState: PropTypes.func.isRequired,
    addNewProduct: PropTypes.func.isRequired,
    closePopup: PropTypes.func.isRequired,
    isPopupOpen: PropTypes.func.isRequired,
};
