import Popup from "reactjs-popup";
export function BtnNotaTransaksi() {
    return (
        <>
            <Popup trigger={
                <button className="text-[10px] border-2 border-[#2F5F94]
                                        h-[33px] w-[68px] rounded-lg font-semibold ">Nota
                </button>
            } modal nested>
                {close => (
                    <div className='modal'>
                        <div className="fixed inset-0 flex justify-center items-center h-screen bg-black/40">
                            <div className="bg-white rounded-xl shadow p-5 transition-all w-[750px] h-[610px]">
                                <div>
                                    <div className="flex justify-between">
                                        <p className="font-semibold text-2xl mb-7">Nota</p>
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
                                    <div className="flex justify-center p-3">
                                        <div className="bg-white w-96 py-2 px-1 rounded drop-shadow-lg">
                                            <div className="flex mb-10 w-full relative">
                                                <p className="mr-32 font-semibold text-[#403E8A]">Adel Jaya</p>
                                            </div>

                                            <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                                                <p>Tanggal waktu</p>
                                                <p className="absolute left-28">:</p>
                                                <p className="font-semibold text-[#8C8BB4] absolute left-32">20 Maret
                                                    2024,12.30</p>
                                            </div>

                                            <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                                                <p className="">Status</p>
                                                <p className="absolute left-28">:</p>
                                                <div
                                                    className="bg-[#BEDBCF] flex justify-center p-1 px-4 rounded absolute left-32">
                                                    <p className="text-[#2B713A] text-sm">Lunas</p>
                                                </div>
                                            </div>

                                            <div
                                                className="flex text-[11px] font-medium text-[#403E8A] mb-5 relative mt-5">
                                                <p className="">Pelanggan</p>
                                                <p className="absolute left-28">:</p>
                                                <p className="font-semibold text-[#8C8BB4] absolute left-32">Budi</p>
                                            </div>

                                            <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                                                <p className="">Metode Pembayaran</p>
                                                <p className="absolute left-28">:</p>
                                                <p className="font-semibold text-[#8C8BB4] absolute left-32">Cash</p>
                                            </div>

                                            <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                                                <p className="">Catatan</p>
                                                <p className="absolute left-28">:</p>
                                                <p className="font-semibold text-[#8C8BB4] absolute left-32">
                                                    -</p>
                                            </div>

                                            <div>
                                                <div className="flex text-xs bg-[#EEEEEE] py-4 px-6 font-semibold">
                                                    <p>Produk</p>
                                                    <p className="mx-14">Jumlah</p>
                                                    <p className="mr-14">Harga</p>
                                                    <p>Subtotal</p>
                                                </div>
                                                <div className="text-xs py-4 px-6">
                                                    <ul className="flex">
                                                        <li>Kayu</li>
                                                        <li className="mx-16">10</li>
                                                        <li className="mr-10 ">Rp100.000</li>
                                                        <li>Rp150.000</li>
                                                    </ul>
                                                </div>
                                                <hr className="my-1 border-t-1 border-black mb-3"/>
                                                <div className="flex text-xs bg-[#BEDBCF] w-36 ml-56 py-3 px-3">
                                                    <p className="mr-10">Total</p>
                                                    <p>Rp150.000</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="flex items-center px-7 py-2 bg-[#1A4F8B] group ml-72 mt-12
                                        rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                                            <span
                                                className="text-white font-medium text-sm group-hover:text-[#1A4F8B]">Cetak</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
        </>
    )
}