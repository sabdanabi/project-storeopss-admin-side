import Popup from "reactjs-popup";

export default function BtnRestockProduk() {
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
                                <form>
                                    <div className="flex justify-between">
                                        <div className="w-64">
                                            <div className="mb-4">
                                                <label className="text-sm">Nama Produk</label>
                                                <br/>
                                                <input
                                                    placeholder="Masukan nama produk..."
                                                    name="productName"
                                                    className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="text-sm">Harga Beli</label>
                                                <br/>
                                                <input
                                                    placeholder="Masukkan harga beli produk...."
                                                    name="purchasePrice"
                                                    className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="text-sm">Harga Jual/pcs/kg</label>
                                                <br/>
                                                <input
                                                    placeholder="Masukkan harga jual produk...."
                                                    name="sellingPrice"
                                                    className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="text-sm">Stock/pcs/kg</label>
                                                <br/>
                                                <input
                                                    placeholder="Masukkan stock produk...."
                                                    name="stock"
                                                    className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="text-sm">Alamat Tujuan</label>
                                                <br/>
                                                <input
                                                    placeholder="Masukkan alamat tujuan...."
                                                    name="destinationAddress"
                                                    className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                                />
                                            </div>
                                        </div>

                                        <div className="w-64">
                                            <div className="mb-4">
                                                <label className="text-sm">Pemasok</label>
                                                <br/>
                                                <input
                                                    placeholder="Masukan nama pemasok..."
                                                    name="supplierName"
                                                    className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="text-sm">Alamat Pemasok</label>
                                                <br/>
                                                <input
                                                    placeholder="Masukkan alamat pemasok...."
                                                    name="supplierAddress"
                                                    className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="text-sm">Nomor Telepon Pemasok</label>
                                                <br/>
                                                <input
                                                    placeholder="Masukkan nomor telepon pemasok...."
                                                    name="supplierPhone"
                                                    className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="text-sm">Metode Pengiriman</label>
                                                <br/>
                                                <input
                                                    placeholder="Masukkan metode pengiriman...."
                                                    name="shippingMethod"
                                                    className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                                />
                                            </div>

                                            <div className="mb-4">
                                                <label className="text-sm">Metode Pembayaran</label>
                                                <br/>
                                                <input
                                                    placeholder="Masukkan metode pembayaran...."
                                                    name="paymentMethod"
                                                    className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-center mt-3">
                                        <button className="flex items-center justify-center px-4 py-2 bg-[#1A4F8B] group w-36
                                                                rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                                                                <span className="text-white font-light group-hover:text-[#1A4F8B]">
                                                                    Simpan
                                                                </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
        </>
    )
}