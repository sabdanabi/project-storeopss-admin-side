import Popup from "reactjs-popup";
import {useState} from "react";

export function BtnPilihProduk() {
    const [isInnerPopupOpen, setInnerPopupOpen] = useState(false);

    const openInnerPopup = () => setInnerPopupOpen(true);
    const closeInnerPopup = () => setInnerPopupOpen(false);
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

                                <div>
                                    <div className="flex border-2 rounded-lg p-2">
                                        <img src="/assets_img/img_kayu.png" alt="img produk"/>
                                        <div className="ml-3">
                                            <p className="font-semibold text-lg">Kayu</p>
                                            <div className="flex text-xs font-medium text-[#727E91]">
                                                <p className="mr-3">Harga</p>
                                                <p>Rp30.000/Batang</p>
                                            </div>
                                            <div className="flex font-medium text-[#727E91]  text-xs">
                                                <p className="mr-3">Stock</p>
                                                <p>90 batang</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="flex items-center px-7 py-2 bg-[#1A4F8B] group ml-72 mt-12
                                        rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                                            <span
                                                className="text-white font-medium text-sm group-hover:text-[#1A4F8B]">Simpan</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}</Popup>
        </div>
    )
}