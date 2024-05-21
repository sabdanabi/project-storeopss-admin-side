import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import SearchBar from "../../components/components_reused/SearchBar.jsx";

export default function RiwayatTambahProdukPage() {
    return(
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent/>

            <div className="flex flex-col flex-1 w-full">
                <PartTop/>
                <NamePageComponent nama={"Riwayat Tambah Produk"}/>

                <main className="flex-1 p-5 overflow-y-auto">
                    <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                        <DescPageComponent
                            desc={"Riwayat tambah produk anda dari waktu ke waktu."}/>
                        <SearchBar/>

                        <div className="bg-[#EEF0F5] justify-between p-3
                        border-b-[3px] border-gray-200 grid grid-cols-3 gap-4 overflow-auto h-[410px]">
                            <div className="bg-white w-96 py-3 px-2 rounded">
                                <div className="flex mb-10">
                                    <p className="mr-32 font-semibold text-[#403E8A]">Riwayat Tambah Produk</p>
                                    <p className="text-[10px] mt-1 text-[#8C8BB4]">April 1,2024</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Nama Produk</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Kayu</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Harga Beli</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp 100.000 / pcs</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Harga Jual</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp 150.000 / Batang</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Stock Produk</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">100 Batang (Stok saat
                                        ditambahkan)</p>
                                </div>
                            </div>
                            <div className="bg-white w-96 py-3 px-2 rounded">
                                <div className="flex mb-10">
                                    <p className="mr-32 font-semibold text-[#403E8A]">Riwayat Tambah Produk</p>
                                    <p className="text-[10px] mt-1 text-[#8C8BB4]">April 1,2024</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Nama Produk</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Kayu</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Harga Beli</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp 100.000 / pcs</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Harga Jual</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp 150.000 / Batang</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Stock Produk</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">100 Batang (Stok saat
                                        ditambahkan)</p>
                                </div>
                            </div>
                            <div className="bg-white w-96 py-3 px-2 rounded">
                                <div className="flex mb-10">
                                    <p className="mr-32 font-semibold text-[#403E8A]">Riwayat Tambah Produk</p>
                                    <p className="text-[10px] mt-1 text-[#8C8BB4]">April 1,2024</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Nama Produk</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Kayu</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Harga Beli</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp 100.000 / pcs</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Harga Jual</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp 150.000 / Batang</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Stock Produk</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">100 Batang (Stok saat
                                        ditambahkan)</p>
                                </div>
                            </div>
                            <div className="bg-white w-96 py-3 px-2 rounded">
                                <div className="flex mb-10">
                                    <p className="mr-32 font-semibold text-[#403E8A]">Riwayat Tambah Produk</p>
                                    <p className="text-[10px] mt-1 text-[#8C8BB4]">April 1,2024</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Nama Produk</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Kayu</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Harga Beli</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp 100.000 / pcs</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Harga Jual</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp 150.000 / Batang</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Stock Produk</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">100 Batang (Stok saat
                                        ditambahkan)</p>
                                </div>
                            </div>
                            <div className="bg-white w-96 py-3 px-2 rounded">
                                <div className="flex mb-10">
                                    <p className="mr-32 font-semibold text-[#403E8A]">Riwayat Tambah Produk</p>
                                    <p className="text-[10px] mt-1 text-[#8C8BB4]">April 1,2024</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Nama Produk</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Kayu</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Harga Beli</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp 100.000 / pcs</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Harga Jual</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp 150.000 / Batang</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Stock Produk</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">100 Batang (Stok saat
                                        ditambahkan)</p>
                                </div>
                            </div>
                            <div className="bg-white w-96 py-3 px-2 rounded">
                                <div className="flex mb-10">
                                    <p className="mr-32 font-semibold text-[#403E8A]">Riwayat Tambah Produk</p>
                                    <p className="text-[10px] mt-1 text-[#8C8BB4]">April 1,2024</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Nama Produk</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Kayu</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Harga Beli</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp 100.000 / pcs</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Harga Jual</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp 150.000 / Batang</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Stock Produk</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">100 Batang (Stok saat
                                        ditambahkan)</p>
                                </div>
                            </div>
                            <div className="bg-white w-96 py-3 px-2 rounded">
                                <div className="flex mb-10">
                                    <p className="mr-32 font-semibold text-[#403E8A]">Riwayat Tambah Produk</p>
                                    <p className="text-[10px] mt-1 text-[#8C8BB4]">April 1,2024</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Nama Produk</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Kayu</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Harga Beli</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp 100.000 / pcs</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Harga Jual</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp 150.000 / Batang</p>
                                </div>

                                <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                                    <p className="text-xs">Stock Produk</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-[#8C8BB4] absolute left-32">100 Batang (Stok saat
                                        ditambahkan)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}