function AdminDashboard() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <div className="flex-shrink-0 hidden w-64 bg-white border-[3px] border-gray-200 md:block">
                <div className="px-5 py-4">
                    <img src="/assets_img/Logo.png" className="w-32 ml-6"/>
                    <nav className="mt-5">
                        <div className="flex w-[100%] hover:bg-[#1A4F8B] group pl-5 h-11 rounded-lg mb-2">
                            <img src="/assets_img/icon_persedian_button.png" className="h-6 mt-2"/>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-sm font-medium text-[#8C95A4] rounded-lg group-hover:text-white
                           ">Persedian</a>
                        </div>

                        <div className="flex w-[100%] hover:bg-[#1A4F8B] group pl-5 h-11 rounded-lg">
                            <img src="/assets_img/icon_persedian_button.png" className="h-6 mt-2"/>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-sm font-medium text-[#8C95A4] rounded-lg group-hover:text-white
                           ">Laporan Stock</a>
                        </div>
                    </nav>
                </div>
            </div>

            <div className="flex flex-col flex-1 w-full">
                <div
                    className="flex flex-row-reverse items-center w-full px-6 py-4 bg-white border-b-[3px] border-gray-200">
                    <button><img src="/assets_img/icon_arrow_down.png" className="h-5"/></button>
                    <a href="#"><img src="/assets_img/img_profile_picture.png" className="h-8 mx-4"/></a>
                    <div className="h-7 border-l border-gray-300 ml-4"></div>
                    <button><img src="/assets_img/icon_notif.png" className="h-7"/></button>
                </div>

                <div className="flex items-center justify-between h-20 border-b-[3px]
                w-full px-6 py-4 bg-white border-gray-200">
                    <h1 className="text-2xl font-semibold text-gray-900">Product</h1>
                    <button className="flex items-center px-4 py-2 bg-[#1A4F8B] group
                    rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                        <img src="/assets_img/icon_add.png" className="h-5 mr-2" alt="Icon Notifikasi"/>
                        <span className="text-white font-semibold group-hover:text-[#1A4F8B]">Tambah Product</span>
                    </button>

                </div>


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
                            <button><img src="/assets_img/icon_filter.png" className="h-7 mr-7 mb-10"/></button>
                        </div>

                        <div className="bg-white h-[65px] flex py-3 px-6 relative border-b-[3px] border-gray-200">
                            <input
                                type="text"
                                placeholder="Cari Produk"
                                className="py-2 pl-11 pr-12 border border-gray-300 rounded-md focus:outline-none focus:ring-2
                                focus:ring-indigo-500 focus:border-transparent w-full"
                            />
                            <img
                                src="/assets_img/icon-search.png"
                                alt="Search"
                                className="absolute top-6 left-11 h-5 w-5"
                            />
                        </div>

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
                                <img src="/assets_img/icon_row_table.png"  className="mx-12"/>
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
            </div>
        </div>
    );
}

export default AdminDashboard;
