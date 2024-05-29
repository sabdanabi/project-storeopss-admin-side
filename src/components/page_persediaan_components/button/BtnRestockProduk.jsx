import Popup from "reactjs-popup";
import {FormRestockProduct} from "../form/FormRestockProduct.jsx";
import PropTypes from "prop-types";

export default function BtnRestockProduk({id, updateProductsState}) {
    return(
        <>
            <Popup trigger={
                <button className="text-[10px] border-2 border-[#2F5F94] h-[33px] w-[58px] rounded-lg font-semibold">
                    Resctok
                </button>
            } modal nested>
                {close => (
                    <div className='modal'>
                        <div className="fixed inset-0 flex justify-center items-center h-screen bg-black/40">
                            <div className="bg-white rounded-xl shadow p-5 transition-all w-[600px] h-[620px]">
                                <div className="flex justify-between">
                                    <p className="font-semibold text-2xl mb-7 m-auto">Restock  Produk</p>
                                    <button onClick={() => close()} className="h-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-600">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg>
                                    </button>
                                </div>
                                <FormRestockProduct id={id}
                                                    updateProductsState={updateProductsState}/>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
        </>
    )
}

BtnRestockProduk.propTypes = {
    id: PropTypes.number.isRequired,
    updateProductsState: PropTypes.func.isRequired
};