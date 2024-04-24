import SearchBar from "../components_reused/SearchBar.jsx";

export default function TabelStock() {
    return (
        <main className="flex-1 p-10 overflow-y-auto">
            <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                <div className="h-10 w-[100%] flex pt-2 pl-3 bg-[#F5F7F9] ">
                    <img src="/assets_img/img_blue_elipse.png" className="h-5 mr-3"/>
                    <p className="text-sm text-gray-600">Selamat datang di admin dashboard Anda.</p>
                </div>

                <div className="bg-white h-[65px] flex pt-5 border-y-[3px] border-gray-200 justify-between">
                    <div className="flex">
                        <div
                            className="hover:border-b-4 hover:border-[#1A4F8B] border-[#1A4F8B] ml-8 group border-b-4 ">
                            <button className="font-semibold group-hover:text-[#1A4F8B] text-[#1A4F8B]"> Semua
                                Produk
                            </button>
                        </div>

                        <div
                            className="hover:border-b-4 hover:border-[#1A4F8B] ml-8 group">
                            <button className="font-semibold group-hover:text-[#1A4F8B] text-[#8C95A4]">Stock
                                Tinggi
                            </button>
                        </div>

                        <div
                            className="hover:border-b-4 hover:border-[#1A4F8B] ml-8 group">
                            <button className="font-semibold group-hover:text-[#1A4F8B] text-[#8C95A4]"> Stock
                                Rendah
                            </button>
                        </div>

                        <div
                            className="hover:border-b-4 hover:border-[#1A4F8B] ml-8 group">
                            <button className="font-semibold group-hover:text-[#1A4F8B] text-[#8C95A4]"> Stock
                                Habis
                            </button>
                        </div>
                    </div>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6 mb-10 mr-7 text-[#8C95A4]">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>
                        </svg>
                    </button>
                </div>

                <SearchBar/>

                <div className="bg-white h-[50 px] flex py-3 px-6 justify-between pr-20
                        border-b-[3px] border-gray-200">
                    <div className="flex font-semibold text-sm text-[#9CA4AE]">
                        <p className="mr-10">No</p>
                        <p>Produk</p>
                    </div>

                    <div className="flex font-semibold text-sm text-[#9CA4AE]">
                        <img src="/assets_img/icon_row_table.png" className="mx-12"/>
                        <p>Harga Beli</p>
                        <img src="/assets_img/icon_row_table.png" className="mx-12"/>
                        <p>Harga Jual</p>
                        <img src="/assets_img/icon_row_table.png" className="mx-12"/>
                        <p>Stock</p>
                        <img src="/assets_img/icon_row_table.png" className="mx-12"/>
                        <p>Terjual</p>
                        <img src="/assets_img/icon_row_table.png" className="mx-12"/>
                        <p>Actions</p>
                    </div>
                </div>

                <div className="bg-white flex py-3 px-6">
                    <div className="flex font-bold">
                        <p>1</p>
                        <img src="/assets_img/img_kayu.png" className="h-12 mx-12"/>
                        <p className="mr-48">Kayu</p>
                        <p>Rp1000.000</p>
                        <p className="mx-20">Rp30.000/pcs</p>
                        <p>100pcs</p>
                        <p className="ml-24">90pcs</p>
                        <button className="text-[10px] border-2 border-[#2F5F94]
                                h-[33px] w-[68px] rounded-lg font-semibold ml-16">Resctok
                        </button>
                        <button className="text-[10px] border-2 border-[#2F5F94]
                                h-[33px] w-[68px] rounded-lg font-semibold ml-4">Edit Produk
                        </button>
                    </div>
                </div>

            </div>
        </main>
    )
}