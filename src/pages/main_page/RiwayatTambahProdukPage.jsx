import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import { CardHistoryAddProduct } from "../../components/history_add_product_components/CardHistoryAddProduct.jsx";
import {getHistoryAddProduct, getHistoryAddProductAll} from "../../services/StockService.jsx";
import FilterComponentNewProduk from "../../components/components_reused/FilterComponentNewProduk.jsx";
import * as XLSX from "xlsx";
import {PaginationRiwayatTambahProduk} from "../../components/history_add_product_components/PaginationRiwayatTambahProduk.jsx";

export default function RiwayatTambahProdukPage() {
    const [addProductHistory, setAddProductHistory] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [pagination, setPagination] = useState({});
    const [selectedEntry, setSelectedEntry] = useState(null);
    const { current_page, per_page } = pagination || {};
    const [selectedRange, setSelectedRange] = useState('Semua');


    const handlePageChange = (page) => {
        fetchAddProductHistory(page);
    };

    useEffect(() => {
        if (searchQuery === '') {
            fetchAddProductHistory(1, selectedRange, '');
        }
    }, [selectedRange, searchQuery]);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query === '') {
            fetchAddProductHistory(1, selectedRange, '');
        }
    };

    const handleSearchClick = () => {
        fetchAddProductHistory(1, selectedRange, searchQuery);
    };

    const handleRangeChange = (range) => {
        setSelectedRange(range);
        fetchAddProductHistory(1, range === 'Semua' ? '' : range, searchQuery);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchAddProductHistory(1, selectedRange, searchQuery);
        }
    };

    const filteredHistory = addProductHistory.filter((entry) => {
        const matchesName = entry.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDate = entry.date.includes(searchQuery);
        return matchesName || matchesDate;
    });

    const fetchAddProductHistory = async (page = 1, range = null, searchQuery = '') => {
        try {
            setLoading(true);
            const data = await getHistoryAddProduct(page, range, searchQuery);
            setAddProductHistory(data.data);
            setAuth(true);
            setPagination(data.meta);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchAllHistoryAddProduct = async () => {
        try {
            setLoading(true);
            const result = await getHistoryAddProductAll();
            setAuth(true);
            return result;
        } catch (e) {
            console.log(e);
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    const exportToExcel = async () => {
        const result = await fetchAllHistoryAddProduct();
        const dataToExport = result.data.map((entry, index) => ({
            No: index + 1,
            Nama_Produk: entry.name,
            Tanggal: entry.date,
            Harga_Beli: entry.purchase_price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }),
            Harga_Jual: entry.selling_price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }),
            Stock_Produk: entry.quantity,
        }));

        const worksheet = XLSX.utils.json_to_sheet(dataToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Riwayat_Tambah_Produk");

        XLSX.writeFile(workbook, "Riwayat_Tambah_Produk.xlsx");
    };
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />

            <div className="flex flex-col flex-1 w-full">
                <PartTop />
                <NamePageComponent nama="Riwayat Tambah Produk" />
                <main className=" pt-5 px-10 overflow-y-auto mb-5">
                    <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                        <DescPageComponent desc="Riwayat tambah produk anda dari waktu ke waktu." />
                        <FilterComponentNewProduk
                            searchQuery={searchQuery}
                            handleSearchChange={handleSearchChange}
                            exportToExcel={exportToExcel}
                            handleRangeChange={handleRangeChange}
                            selectedRange={selectedRange}
                            handleSearchClick={handleSearchClick}
                            handleKeyDown={handleKeyDown}
                        />
                        <div className="bg-white border-b-[3px] border-gray-200 overflow-auto">
                            {isLoading ? (
                                <div className="flex items-center justify-center h-full">
                                    <Spinner
                                        thickness="4px"
                                        speed="0.65s"
                                        emptyColor="gray.200"
                                        color="blue.500"
                                        size="xl"
                                    />
                                </div>
                            ) : isAuth ? (
                                filteredHistory.length > 0 ? (
                                    <CardHistoryAddProduct
                                        addProductHistory={filteredHistory}
                                        pagination={pagination}
                                        selectedEntry={selectedEntry}
                                        setSelectedEntry={setSelectedEntry}
                                        current_page={current_page}
                                        per_page={per_page}
                                    />
                                ) : (
                                    <div className="flex-col items-center justify-center">
                                        <img src="/assets_img/notfound_transaction_img.png" className="m-auto mt-10 w-[200px]" />
                                        <p className="text-[22px] text-center font-medium mt-6 text-blue-gray-600">Riwayat tidak ditemukan</p>
                                        <p className="text-[18px] text-center font-normal mt-4 mb-10 text-blue-gray-200">
                                            Tidak dapat menemukan riwayat tambah produk <span className="font-semibold text-blue-gray-600">{searchQuery}</span>
                                        </p>
                                    </div>
                                )
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <p className="text-xl">{error}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
                <PaginationRiwayatTambahProduk pagination={pagination} onPageChange={handlePageChange}/>
            </div>
        </div>
    );
}
