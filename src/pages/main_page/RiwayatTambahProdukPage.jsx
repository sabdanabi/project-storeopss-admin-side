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

export default function RiwayatTambahProdukPage() {
    const [addProductHistory, setAddProductHistory] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [pagination, setPagination] = useState({});

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Mengelola perubahan filter status
    const handleStatusFilterChange = (status) => {
        setStatusFilter(status);
    };

    // Filter riwayat berdasarkan pencarian dan status
    const filteredHistory = addProductHistory.filter((entry) => {
        const matchesName = entry.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDate = entry.date.includes(searchQuery);
        const matchesStatus = statusFilter ? entry.status === statusFilter : true;
        return (matchesName || matchesDate) && matchesStatus;
    });

    // Mengambil data riwayat tambah produk dari API
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

    // Mengelola perubahan halaman pada pagination
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
                <PartTop/>
                <NamePageComponent nama="Riwayat Tambah Produk"/>
                <main className="flex-1 pt-5 px-10 overflow-y-auto">
                    <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                        <DescPageComponent desc="Riwayat tambah produk anda dari waktu ke waktu."/>
                        <FilterComponentNewProduk
                            searchQuery={searchQuery}
                            handleSearchChange={handleSearchChange}
                            handleStatusFilterChange={handleStatusFilterChange}
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
                                <CardHistoryAddProduct addProductHistory={filteredHistory} pagination={pagination}/>
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <p className="text-xl">{error}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <PaginationRiwayatTambahProduk pagination={pagination} onPageChange={handlePageChange}/>
                </main>

            </div>
        </div>
    );
}
