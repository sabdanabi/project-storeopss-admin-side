import { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import { CardHistoryAddProduct } from "../../components/history_add_product_components/CardHistoryAddProduct.jsx";
import { getHistoryAddProduct } from "../../services/StockService.jsx";
import { PaginationRiwayatTambahProduk } from "../../components/history_add_product_components/PaginationRiwayatTambahProduk.jsx";
import FilterComponentNewProduk from "../../components/components_reused/FilterComponentNewProduk.jsx";
import * as XLSX from "xlsx";

export default function RiwayatTambahProdukPage() {
    const [addProductHistory, setAddProductHistory] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [pagination, setPagination] = useState({});
    const [selectedEntry, setSelectedEntry] = useState(null);
    const { current_page, per_page } = pagination || {};

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleStatusFilterChange = (status) => {
        setStatusFilter(status);
    };

    const filteredHistory = addProductHistory.filter((entry) => {
        const matchesName = entry.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDate = entry.date.includes(searchQuery);
        const matchesStatus = statusFilter ? entry.status === statusFilter : true;
        return (matchesName || matchesDate) && matchesStatus;
    });

    const fetchAddProductHistory = async (page = 1) => {
        try {
            setLoading(true);
            const data = await getHistoryAddProduct(page);
            setAddProductHistory(data.data);
            setAuth(true);
            setPagination(data.meta);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchAllPages = async () => {
        let allData = [];
        let currentPage = 1;
        let totalPages = 1;

        try {
            setLoading(true);
            do {
                const data = await getHistoryAddProduct(currentPage);
                allData = [...allData, ...data.data];
                currentPage = data.meta.current_page + 1;
                totalPages = data.meta.last_page;
            } while (currentPage <= totalPages);
            setAddProductHistory(allData);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const exportToExcel = async () => {
        await fetchAllPages(); // Pastikan semua halaman data diambil

        const tableData = addProductHistory.map((entry, index) => ({
            No: index + 1, // Penomoran berdasarkan total data
            "Nama Produk": entry.name,
            Tanggal: entry.date,
            Stok: entry.quantity,
            "Harga Beli": entry.purchase_price,
            "Harga Jual": entry.selling_price,
        }));

        const popupData = selectedEntry ? [{
            "Nama Produk": selectedEntry.name,
            "Tanggal": selectedEntry.date,
            "Harga Beli": selectedEntry.purchase_price,
            "Harga Jual": selectedEntry.selling_price,
            "Stok Produk": selectedEntry.quantity,
        }] : [];

        const worksheet = XLSX.utils.json_to_sheet(tableData);
        const worksheetPopup = XLSX.utils.json_to_sheet(popupData);

        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Data Tabel");
        if (selectedEntry) {
            XLSX.utils.book_append_sheet(workbook, worksheetPopup, "Data Popup");
        }

        XLSX.writeFile(workbook, "RiwayatTambahProduk.xlsx");
    };

    const handlePageChange = (page) => {
        fetchAddProductHistory(page);
    };

    useEffect(() => {
        fetchAddProductHistory();
    }, []);

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />

            <div className="flex flex-col flex-1 w-full">
                <PartTop />
                <NamePageComponent nama="Riwayat Tambah Produk" />
                <main className="flex-1 pt-5 px-10 overflow-y-auto">
                    <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                        <DescPageComponent desc="Riwayat tambah produk anda dari waktu ke waktu." />
                        <FilterComponentNewProduk
                            searchQuery={searchQuery}
                            handleSearchChange={handleSearchChange}
                            handleStatusFilterChange={handleStatusFilterChange}
                            exportToExcel={exportToExcel}
                        />
                        <div className="bg-white border-b-[3px] border-gray-200 overflow-auto h-96">
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
                                <CardHistoryAddProduct
                                    addProductHistory={filteredHistory}
                                    pagination={pagination}
                                    selectedEntry={selectedEntry}
                                    setSelectedEntry={setSelectedEntry}
                                    current_page={current_page}
                                    per_page={per_page}
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <p className="text-xl">{error}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <PaginationRiwayatTambahProduk pagination={pagination} onPageChange={handlePageChange} />
                </main>
            </div>
        </div>
    );
}
