import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import SearchBar from "../../components/components_reused/SearchBar.jsx";

export default function NotaPage() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />
            <div className="flex flex-col flex-1 w-full">
                <PartTop />
                <NamePageComponent nama={"Nota"} />

                <main className="flex-1 p-5 overflow-y-auto">
                    <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                        <DescPageComponent desc={"Nota pada setiap pembelian"} />
                        <SearchBar />

                        <div className="bg-[#EEF0F5] justify-between p-3 border-b-[3px] border-gray-200 grid grid-cols-3 gap-5 overflow-auto h-[440px]">
                            <div className="bg-white w-96 py-2 px-1 rounded">
                                <div className="flex mb-10 w-full relative">
                                    <p className="mr-32 font-semibold text-[#403E8A]">Adel Jaya</p>
                                    <p className="text-[14px] text-[#2B713A] font-semibold absolute left-[310px] top-1">Selesai</p>
                                </div>

                                <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                                    <p>Tanggal waktu</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">20 Maret 2024,12.30</p>
                                </div>

                                <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                                    <p>Status</p>
                                    <p className="absolute left-28">:</p>
                                    <div className="bg-[#BEDBCF] flex justify-center p-1 px-4 rounded absolute left-32">
                                        <p className="text-[#2B713A] text-sm">Lunas</p>
                                    </div>
                                </div>

                                <div className="flex text-[11px] font-medium text-[#403E8A] mb-5 relative mt-5">
                                    <p>Pelanggan</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Budi</p>
                                </div>

                                <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                                    <p>Metode Pembayaran</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Cash</p>
                                </div>

                                <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                                    <p>Catatan</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">-</p>
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
                    </div>
                </main>
            </div>
        </div>
    );
}
