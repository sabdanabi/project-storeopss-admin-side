import Popup from "reactjs-popup";
import {Radio} from "@material-tailwind/react";
import {useState} from "react";
import {BtnPilihProduk} from "./BtnPilihProduk.jsx";
export default function BtnAddTransaksi() {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValueRD, setSelectedValueRD] = useState('');

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleRadioChangeRD2 = (event) => {
        setSelectedValueRD(event.target.value);
    };

    return (<>
        <div className="flex items-center justify-between h-20 border-b-[3px]
                w-full px-6 py-4 bg-white border-gray-200">
            <h1 className="text-2xl font-semibold text-gray-900">Transaksi</h1>
            <Popup trigger=
                       {<button className="flex items-center px-4 py-2 bg-[#1A4F8B] group
                    rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 mr-2 text-white group-hover:text-[#1A4F8B]">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
                           </svg>
                           <span className="text-white font-semibold group-hover:text-[#1A4F8B]">Penjualan</span>
                       </button>}
                   modal nested>
                {close => (<div className='modal'>
                    <div className="fixed inset-0 flex justify-center items-center h-screen bg-black/40">
                        <div className="bg-white rounded-xl shadow p-5 transition-all w-[850px] h-[670px]">
                            <form>
                                <div className="flex justify-between">
                                    <p className="font-semibold text-2xl mb-7">Penjualan</p>
                                    <button onClick={() => close()}
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
                                <p className="font-medium mb-3">Pilih Produk</p>
                                <BtnPilihProduk/>
                                <div className="h-7 border-b-2 border-gray-300 mb-7"></div>

                                <div className="flex">
                                    <div className="text-sm">
                                        <div className="mb-7">
                                            <p className="font-medium">Tanggal</p>
                                            <div className="p-1 w-96 border-b-2 border-[#828282] flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 24 24" strokeWidth={1.5}
                                                     stroke="currentColor"
                                                     className="w-6 h-6 mt-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
                                                </svg>
                                                <input type="text"
                                                       className="border-none focus:ring-white w-full"/>
                                            </div>
                                        </div>

                                        <div className="mb-7">
                                            <p className="font-medium mb-4">Catatan (Opsional)</p>
                                            <div className="flex w-96">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 24 24" strokeWidth={1.5}
                                                     stroke="currentColor"
                                                     className="w-6 h-6 mt-2 mr-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                                                </svg>
                                                <textarea id="note" rows="5"
                                                          className="w-full p-3 border border-gray-300
                                                              rounded-md focus:outline-none focus:border-blue-500 h-20 text-sm"
                                                          placeholder="Tulis catatan Anda di sini..."></textarea>
                                            </div>
                                        </div>

                                        <div className="mb-7">
                                            <p className="font-medium">Kontak (Opsional)</p>
                                            <div className="p-1 w-96 border-b-2 border-[#828282] flex">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                     viewBox="0 0 24 24" strokeWidth={1.5}
                                                     stroke="currentColor"
                                                     className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                                                </svg>

                                                <input type="text"
                                                       className="border-none focus:ring-white w-full"/>
                                            </div>
                                        </div>

                                        <div className="mb-7">
                                            <p className="font-medium">Status Transaksi</p>
                                            <div className="flex gap-10 mt-2">
                                                <div
                                                    className={`w-44 border-2 h-10 pb-10 rounded-md ${selectedValue === 'Lunas' ? 'border-blue-500' : 'border-gray-200'}`}
                                                >
                                                    <Radio
                                                        name="color"
                                                        value="Lunas"
                                                        color="blue"
                                                        label="Lunas"
                                                        checked={selectedValue === 'Lunas'}
                                                        onChange={handleRadioChange}
                                                    />
                                                </div>

                                                <div
                                                    className={`w-44 border-2 h-10 pb-10 rounded-md ${selectedValue === 'Belum Lunas' ? 'border-blue-500' : 'border-gray-200'}`}
                                                >
                                                    <Radio
                                                        name="color"
                                                        value="Belum Lunas"
                                                        color="blue"
                                                        label="Belum Lunas"
                                                        checked={selectedValue === 'Belum Lunas'}
                                                        onChange={handleRadioChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="p-5 w-[335px] h-80 shadow-xl ml-16">
                                            <label>Nama Pelanggan</label>
                                            <div className="border-b-2 border-[#828282] flex mb-7">
                                                <input type="text"
                                                       className="border-none focus:ring-white w-full"/>
                                            </div>

                                            <label>Total Harga</label>
                                            <div className="border-b-2 border-[#828282] mb-7">
                                                <input type="text"
                                                       className="border-none focus:ring-white w-full"/>
                                            </div>

                                            <div className="">
                                                <p className="font-medium">Status Transaksi</p>
                                                <div className="flex gap-10 mt-2">
                                                    <div
                                                        className={`w-44 border-2 h-10 pb-10 rounded-md ${selectedValueRD === 'Tunai' ? 'border-blue-500' : 'border-gray-200'}`}
                                                    >
                                                        <Radio
                                                            name="color"
                                                            value="Tunai"
                                                            color="blue"
                                                            label={<span className="text-xs">Tunai</span>}
                                                            checked={selectedValueRD === 'Tunai'}
                                                            onChange={handleRadioChangeRD2}
                                                        />
                                                    </div>

                                                    <div
                                                        className={`w-44 border-2 h-10 pb-10 rounded-md ${selectedValueRD === 'Transfer Bank' ? 'border-blue-500' : 'border-gray-200'}`}
                                                    >
                                                        <Radio
                                                            name="color"
                                                            value="Transfer Bank"
                                                            color="blue"
                                                            label={<span
                                                                className="text-xs">Transfer Bank</span>}
                                                            checked={selectedValueRD === 'Transfer Bank'}
                                                            onChange={handleRadioChangeRD2}
                                                        />
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
                            </form>
                        </div>
                    </div>
                </div>)}
            </Popup>
        </div>


    </>)
}