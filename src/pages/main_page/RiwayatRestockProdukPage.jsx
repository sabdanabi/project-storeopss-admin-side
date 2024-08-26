import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import { useEffect, useState } from "react";
import {getAllRestockHistory, getRestockHistory} from "../../services/RestockService.jsx";
import { HistoryRestockCard } from "../../components/history_restock_components/HistoryRestockCard.jsx";
import { Spinner } from '@chakra-ui/react';
import FilterComponentRestock from "../../components/components_reused/FilterComponentRestock.jsx";
import {PaginationHistoryRestock} from "../../components/history_restock_components/PaginationHistoryRestock.jsx";
import * as XLSX from "xlsx";

export default function RiwayatRestockProdukPage() {
    const [restockHistory, setRestockHistory] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [pagination, setPagination] = useState({});
    const [selectedRange, setSelectedRange] = useState('Semua');


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleStatusFilterChange = (status) => {
        setStatusFilter(status);
    };

    const handleRangeChange = (range) => {
        setSelectedRange(range);
        fetchRestockHistory(1, range === 'Semua' ? '' : range);
    };

    const filteredHistory = restockHistory.filter((entry) => {
        const matchesName = entry.product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDate = entry.date.includes(searchQuery);
        const matchesStatus = statusFilter ? entry.status === statusFilter : true;
        return (matchesName || matchesDate) && matchesStatus;
    });

    const fetchRestockHistory = async (page = 1,  range = null) => {
        try {
            setLoading(true);
            const data = await getRestockHistory(page, range);
            setRestockHistory(data.data);
            setAuth(true);
            setPagination(data.meta);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const fetchAllRestockHistory = async () => {
        try {
            setLoading(true);
            const result = await getAllRestockHistory();
            setAuth(true);
            return result;
        } catch (e) {
            console.log(e);
            setError(e.response.data.error);
        } finally {
            setLoading(false);
        }
    };

    const exportToExcel = async () => {
        const result = await fetchAllRestockHistory();
        const dataToExport = result.data.map((entry, index) => ({
            No: index + 1,
            Nama_Produk: entry.name,
            Tanggal: entry.date,
            Pemasok: entry.supplier.name,
            Jumlah: entry.product.new_quantity,
        }));

        const worksheet = XLSX.utils.json_to_sheet(dataToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Riwayat_Tambah_Produk");

        XLSX.writeFile(workbook, "Riwayat_Tambah_Produk.xlsx");
    };

    const handlePageChange = (page) => {
        fetchRestockHistory(page);
    };

    useEffect(() => {
        fetchRestockHistory(1, selectedRange);
    }, [1, selectedRange]);

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />

            <div className="flex flex-col flex-1 w-full">
                <PartTop/>
                <NamePageComponent nama={"Riwayat Pembaruan Stok"}/>
                <main className="flex-1 pt-5 px-10 overflow-y-auto">
                    <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                        <DescPageComponent
                            desc={"Riwayat pengisian ulang produk anda dari waktu ke waktu"}/>
                        <FilterComponentRestock
                            searchQuery={searchQuery}
                            handleSearchChange={handleSearchChange}
                            handleStatusFilterChange={handleStatusFilterChange}
                            exportToExcel={exportToExcel}
                            handleRangeChange={handleRangeChange}
                            selectedRange={selectedRange}
                        />

                        <div className="flex justify-center h-96">
                            {isLoading ? (
                                <div className="flex items-center justify-center h-full">
                                    <Spinner
                                        thickness='4px'
                                        speed='0.65s'
                                        emptyColor='gray.200'
                                        color='blue.500'
                                        size='xl'
                                    />
                                </div>
                            ) : isAuth ? (
                                <HistoryRestockCard restockHistory={filteredHistory} pagination={pagination}/>
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <p className="text-xl">{error}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <PaginationHistoryRestock pagination={pagination} onPageChange={handlePageChange}/>
                </main>

            </div>
        </div>
    );
}
