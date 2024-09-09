import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import { useEffect, useState } from "react";
import { getAllRestockHistory, getRestockHistory } from "../../services/RestockService.jsx";
import { HistoryRestockCard } from "../../components/history_restock_components/HistoryRestockCard.jsx";
import { Spinner } from "@chakra-ui/react";
import FilterComponentRestock from "../../components/components_reused/FilterComponentRestock.jsx";
import { PaginationHistoryRestock } from "../../components/history_restock_components/PaginationHistoryRestock.jsx";
import * as XLSX from "xlsx";

export default function RiwayatRestockProdukPage() {
    const [restockHistory, setRestockHistory] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [pagination, setPagination] = useState({});
    const [selectedRange, setSelectedRange] = useState('Semua');
    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);

    const handlePageChange = (page) => {
        fetchRestockHistory(page);
    };

    useEffect(() => {
        if (searchQuery === '') {
            fetchRestockHistory(1,selectedRange, '', from, to);
        }
    }, [selectedRange, searchQuery, from, to]);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query === '') {
            fetchRestockHistory(1,selectedRange, '');
        }
    };

    const handleSearchClick = () => {
        fetchRestockHistory(1,selectedRange, searchQuery);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchRestockHistory(1,selectedRange, searchQuery);
        }
    };

    const handleRangeChange = (range) => {
        setSelectedRange(range);
        fetchRestockHistory(1, range === 'Semua' ? '' : range, searchQuery);
    };

    const handleFromDateChange = (date) => {
        setFrom(date);
    };

    const handleToDateChange = (date) => {
        setTo(date);
    };

    // const filteredHistory = restockHistory.filter((entry) => {
    //     const matchesName = entry.product.name.toLowerCase().includes(searchQuery.toLowerCase());
    //     const matchesDate = entry.date.includes(searchQuery);
    //     return matchesName || matchesDate;
    // });

    const fetchRestockHistory = async (page = 1,  range = null, searchQuery = '', from = null, to = null) => {
        try {
            setLoading(true);
            const data = await getRestockHistory(page, range, searchQuery, from, to);
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
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    const exportToExcel = async () => {
        const result = await fetchAllRestockHistory();
        const dataToExport = result.data.map((entry, index) => ({
            No: index + 1,
            Nama_Produk: entry.product.name,
            Tanggal: entry.date,
            Pemasok: entry.supplier.name,
            Jumlah: entry.product.new_quantity,
        }));

        const worksheet = XLSX.utils.json_to_sheet(dataToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Riwayat_Restock_Produk");

        XLSX.writeFile(workbook, "Riwayat_Restock_Produk.xlsx");
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />

            <div className="flex flex-col flex-1 w-full">
                <PartTop />
                <NamePageComponent nama={"Riwayat Pembaruan Stok"} />
                <main className="flex-1 pt-5 px-10 overflow-y-auto">
                    <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                        <DescPageComponent
                            desc={"Riwayat pengisian ulang produk anda dari waktu ke waktu"}
                        />
                        <FilterComponentRestock
                            searchQuery={searchQuery}
                            handleSearchChange={handleSearchChange}
                            exportToExcel={exportToExcel}
                            handleRangeChange={handleRangeChange}
                            selectedRange={selectedRange}
                            handleSearchClick={handleSearchClick}
                            handleKeyDown={handleKeyDown}
                            handleFromDateChange={handleFromDateChange}
                            handleToDateChange={handleToDateChange}
                            fromDate={from} toDate={to}
                        />

                        <div className="flex justify-center h-80 overflow-auto">
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
                                restockHistory.length > 0 ? (
                                    <HistoryRestockCard restockHistory={restockHistory} pagination={pagination} />
                                ) : (
                                    <div className="flex-col items-center justify-center">
                                        <img src="/assets_img/notfound_transaction_img.png" className="m-auto mt-10 w-[200px]" />
                                        <p className="text-[22px] text-center font-medium mt-6 text-blue-gray-600">
                                            Riwayat tidak ditemukan
                                        </p>
                                        <p className="text-[18px] text-center font-normal mt-4 mb-10 text-blue-gray-200">
                                            Tidak dapat menemukan riwayat restock produk {"     "}
                                            <span className="font-semibold text-blue-gray-600">
                                                {searchQuery}
                                            </span>
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
                    <PaginationHistoryRestock pagination={pagination} onPageChange={handlePageChange} />
                </main>
            </div>
        </div>
    );
}
