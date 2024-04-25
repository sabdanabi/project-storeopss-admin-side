export default function TblLaporanStock() {
    return(
        <>
            <div className="bg-white h-[50 px] flex py-3 px-6 justify-between pr-20
                        border-b-[3px] border-gray-200">
                <div className="flex font-semibold text-xs text-[#9CA4AE]">
                    <p className="mr-10">No</p>
                    <p>Produk</p>
                </div>

                <div className="flex font-semibold text-xs text-[#9CA4AE]">
                    <img src="/assets_img/icon_row_table.png" className="mx-12"/>
                    <p>Stock Awal</p>
                    <img src="/assets_img/icon_row_table.png" className="mx-12"/>
                    <p>Barang Masuk</p>
                    <img src="/assets_img/icon_row_table.png" className="mx-12"/>
                    <p>Barang Keluar</p>
                    <img src="/assets_img/icon_row_table.png" className="mx-12"/>
                    <p>Stock Akhir</p>
                </div>
            </div>

            <div className="bg-white flex py-3 px-6">
                <div className="flex font-bold text-sm">
                    <p>1</p>
                    <img src="/assets_img/img_kayu.png" className="h-12 mx-12"/>
                    <p className="mr-60">Kayu</p>
                    <p>Rp1000.000</p>
                    <p className="mx-24">Rp30.000/pcs</p>
                    <p className="mx-8">100pcs</p>
                    <p className="ml-28">90pcs</p>
                </div>
            </div>
        </>
    )
}