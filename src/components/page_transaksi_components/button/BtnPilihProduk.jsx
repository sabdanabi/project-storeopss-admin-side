import Popup from "reactjs-popup";
import {useEffect, useState} from "react";
import {CardProduct} from "../CardProduct.jsx";
import TblLaporanStock from "../../page_laporan_stock_components/TblLaporanStock.jsx";
import {getAllProduct} from "../../../services/StockService.jsx";

export function BtnPilihProduk() {
    const [isInnerPopupOpen, setInnerPopupOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const openInnerPopup = () => setInnerPopupOpen(true);
    const closeInnerPopup = () => setInnerPopupOpen(false);
    const updateProductsState = async () => {
        try {

            setLoading(true);
            const result = await getAllProduct();
            setProducts(result.data);
            setAuth(true);

        } catch(e) {

            console.log(e);
            setError(e.response.data.error);

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        updateProductsState();
    }, []);

    return (
        <div>
            <button onClick={openInnerPopup} type={"button"}
                className="border-2 text-[#8C95A4] mb-7 text-center p-2 text-xs rounded-lg">Pilih
                Produk
            </button>
            <Popup  open={isInnerPopupOpen} closeOnDocumentClick onClose={closeInnerPopup} modal>
                {innerClose => (
                    <div className="modal">
                        <div className="fixed inset-0 flex justify-center items-center h-screen bg-black/40">
                            <div className="bg-white rounded-xl shadow p-5 transition-all w-[450px] h-[470px]">
                                <div className="flex justify-between">
                                    <p className="font-semibold text-2xl mb-7">Pilih Produk</p>
                                    <button onClick={innerClose}
                                            className="h-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                             viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor"
                                             className="w-8 h-8 text-red-600">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg>
                                    </button>
                                </div>

                                <div className="overflow-auto h-64">
                                    {isLoading ? (
                                        <div className="flex items-center justify-center h-full">
                                            <p className="text-xl">Loading...</p>
                                        </div>
                                    ) : isAuth ? (
                                        <CardProduct products={products}/>
                                    ) : (
                                        <div className="flex items-center justify-center h-full">
                                            <p className="text-xl">{ error }</p>
                                        </div>
                                    )}
                                </div>

                                <button className="flex ml-36 px-7 py-2 bg-[#1A4F8B] group mt-10
                                        rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                                            <span
                                                className="text-white font-medium text-sm group-hover:text-[#1A4F8B]">Pilih</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}</Popup>
        </div>
    )
}