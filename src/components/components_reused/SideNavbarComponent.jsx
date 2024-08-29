import { useLocation } from 'react-router-dom';

export default function SideNavbarComponent() {

    const location = useLocation();

    const isLaporanPage = location.pathname === '/laporan-page';
    const isPersediaanPage = location.pathname === '/';
    const isStatisticPage = location.pathname === '/statistic-page';
    const isRiwayatTambahProdukPage = location.pathname === '/riwayat-tambah-produk-page';
    const isRiwayatRestockPage = location.pathname === '/riwayat-restock-page';
    const isTransaksiPage = location.pathname === '/transaksi-page';
    const isNotaPage = location.pathname === '/nota-page';
    const isDetailTransaksiPage = location.pathname === '/detail-transaksi-page';

    return(
        <>
            <div className="flex-shrink-0 hidden w-75 bg-white  border-[3px] border-gray-200 md:block">
                <div className="px-5 py-5">
                    <img src="/assets_img/Logo.png" className="w-32 lg:hidden xl:block" alt={""}/>
                    <img src="/assets_img/icon_2.png" className="w-7 xl:hidden ml-4" alt={""}/>

                    <nav className="mt-7">
                        <a href="/transaksi-page">
                            <div
                                className={`flex w-[100%] hover:bg-[#F2F6FF] group pl-5 h-11 rounded-lg mb-2 group ${isTransaksiPage ? 'bg-[#F2F6FF]' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className={`text-[#8C95A4] w-6 h-7 mt-2 group-hover:text-light-blue-800 
                                 ${isTransaksiPage ? 'text-light-blue-800 ' : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"/>
                                </svg>

                                <span
                                    className={`name-page-sideBar-style ${isTransaksiPage ? 'text-light-blue-800 ' : ''}`}>Transaksi</span>
                            </div>

                        </a>

                        <a href="/">
                            <div className={`flex w-[100%] hover:bg-[#F2F6FF] group pl-5 h-11 rounded-lg mb-2 group 
                        ${isPersediaanPage ? 'bg-[#F2F6FF]' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className={`text-[#8C95A4] w-6 h-7 mt-2 group-hover:text-light-blue-800  
                                 ${isPersediaanPage ? 'text-light-blue-800 ' : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/>
                                </svg>

                                <span
                                    className={`name-page-sideBar-style ${isPersediaanPage ? 'text-light-blue-800 ' : ''}`}>Persedian</span>
                            </div>
                        </a>


                        <a href="/laporan-page">
                            <div className={`flex w-[100%] pl-5 h-11 hover:bg-[#F2F6FF] rounded-lg mb-2 group 
                        ${isLaporanPage ? 'bg-[#F2F6FF]' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className={`text-[#8C95A4] w-6 h-7 mt-2 group-hover:text-light-blue-800  
                                 ${isLaporanPage ? 'text-light-blue-800 ' : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"/>
                                </svg>

                                <span
                                    className={`name-page-sideBar-style ${isLaporanPage ? 'text-light-blue-800 ' : ''}`}>Laporan
                                    Stock</span>
                            </div>
                        </a>

                        <div className="flex w-[100%] pl-2 mt-5 rounded-lg text-[13px] text-[#8C95A4] xl:pl-5">
                            <p>LAINNYA</p>
                        </div>

                        <a href="/statistic-page">
                            <div className={`flex w-[100%] hover:bg-[#F2F6FF] pl-5 mt-5 rounded-lg mb-2 group 
                        ${isStatisticPage ? 'bg-[#F2F6FF]' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className={`text-[#8C95A4] w-6 h-7 mt-2 group-hover:text-light-blue-800  
                                 ${isStatisticPage ? 'text-light-blue-800 ' : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"/>
                                </svg>

                                <span
                                    className={`name-page-sideBar-style ${isStatisticPage ? 'text-light-blue-800 ' : ''}`}>Statistik</span>
                            </div>
                        </a>

                        <a href="/riwayat-tambah-produk-page">
                            <div className={`flex w-[100%] hover:bg-[#F2F6FF] pl-5 h-11 rounded-lg mb-2 group 
                        ${isRiwayatTambahProdukPage ? 'bg-[#F2F6FF]' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className={`text-[#8C95A4] w-6 h-7 mt-2 group-hover:text-light-blue-800  
                                 ${isRiwayatTambahProdukPage ? 'text-light-blue-800 ' : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M9 3.75H6.912a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859M12 3v8.25m0 0-3-3m3 3 3-3"/>
                                </svg>

                                <span
                                    className={`name-page-sideBar-style ${isRiwayatTambahProdukPage ? 'text-light-blue-800 ' : ''}`}>Riwayat
                                    Produk Masuk</span>
                            </div>
                        </a>

                        <a href="/riwayat-restock-page">
                            <div className={`flex w-[100%] hover:bg-[#F2F6FF] pl-5 h-11 rounded-lg mb-2 group 
                        ${isRiwayatRestockPage ? 'bg-[#F2F6FF]' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className={`text-[#8C95A4] w-6 h-7 mt-2 group-hover:text-light-blue-800  
                                 ${isRiwayatRestockPage ? 'text-light-blue-800 ' : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0-3-3m3 3 3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"/>
                                </svg>


                                <span
                                    className={`name-page-sideBar-style ${isRiwayatRestockPage ? 'text-light-blue-800 ' : ''}`}>Riwayat
                                    Pembaruan Stok</span>
                            </div>
                        </a>


                        <a href="/nota-page">
                            <div className={`flex w-[100%] hover:bg-[#F2F6FF] pl-5 h-11 rounded-lg mb-2 group 
                        ${isNotaPage ? 'bg-[#F2F6FF]' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className={`text-[#8C95A4] w-6 h-7 mt-2 group-hover:text-light-blue-800  
                                 ${isNotaPage ? 'text-light-blue-800 ' : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"/>
                                </svg>


                                <span
                                    className={`name-page-sideBar-style ${isNotaPage ? 'text-light-blue-800 ' : ''}`}>Riwayat
                                    Nota</span>
                            </div>
                        </a>

                        <a href="/detail-transaksi-page">
                            <div className={`flex w-[100%] hover:bg-[#F2F6FF] pl-5 h-11 rounded-lg mb-2 group 
                        ${isDetailTransaksiPage ? 'bg-[#F2F6FF]' : ''}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className={`text-[#8C95A4] w-6 h-7 mt-2 group-hover:text-light-blue-800  
                                 ${isDetailTransaksiPage ? 'text-light-blue-800 ' : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                                </svg>

                                <span
                                    className={`name-page-sideBar-style ${isDetailTransaksiPage ? 'text-light-blue-800 ' : ''}`}>Detail
                                    Transaksi</span>
                            </div>
                        </a>

                    </nav>
                </div>
            </div>
        </>
    )
}