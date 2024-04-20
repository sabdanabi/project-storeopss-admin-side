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
                <div className="flex flex-row-reverse items-center w-full px-6 py-4 bg-white border-b-[3px] border-gray-200">
                    <button><img src="/assets_img/icon_arrow_down.png" className="h-5"/></button>
                    <a href="#"><img src="/assets_img/img_profile_picture.png" className="h-8 mx-4"/></a>
                    <div className="h-7 border-l border-gray-300 ml-4"></div>
                    <button><img src="/assets_img/icon_notif.png" className="h-7"/></button>
                </div>

                <div className="flex items-center justify-between h-20 border-b-[3px]
                w-full px-6 py-4 bg-white border-b border-gray-200">
                    <h1 className="text-2xl font-semibold text-gray-900">Product</h1>
                    <button className="flex items-center px-4 py-2 bg-[#1A4F8B] group
                    rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                        <img src="/assets_img/icon_add.png" className="h-5 mr-2" alt="Icon Notifikasi"/>
                        <span className="text-white font-semibold group-hover:text-[#1A4F8B]">Tambah Product</span>
                    </button>

                </div>


                <main className="flex-1 p-5 overflow-y-auto">
                    <h1 className="text-2xl font-semibold text-gray-900">Admin Dashboard</h1>
                    <p className="mt-2 text-sm text-gray-600">Selamat datang di admin dashboard Anda.</p>
                </main>
            </div>
        </div>
    );
}

export default AdminDashboard;
