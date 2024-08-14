import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import { useEffect, useState } from "react";
import { getAllRestockHistory } from "../../services/RestockService.jsx";
import { HistoryRestockCard } from "../../components/history_restock_components/HistoryRestockCard.jsx";
import { Spinner } from '@chakra-ui/react';
import FilterComponentRestock from "../../components/components_reused/FilterComponentRestock.jsx";
import {PaginationHistoryRestock} from "../../components/history_restock_components/PaginationHistoryRestock.jsx";

export default function RiwayatRestockProdukPage() {
    const [restockHistory, setRestockHistory] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [pagination, setPagination] = useState({});

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleStatusFilterChange = (status) => {
        setStatusFilter(status);
    };

    const filteredHistory = restockHistory.filter((entry) => {
        const matchesName = entry.product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDate = entry.date.includes(searchQuery);
        const matchesStatus = statusFilter ? entry.status === statusFilter : true;
        return (matchesName || matchesDate) && matchesStatus;
    });

    const fetchRestockHistory = async (page = 1) => {
        try {
            setLoading(true);
            const data = await getAllRestockHistory(page);
            setRestockHistory(data.data);
            setAuth(true);
            setPagination(data.meta);

        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (page) => {
        fetchRestockHistory(page);
    };

    useEffect(() => {
        fetchRestockHistory();
    }, []);

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />

            <div className="flex flex-col flex-1 w-full">
                <PartTop />
                <NamePageComponent nama={"Riwayat Pembaruan Stok"} />
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
                    <main className="flex-1 pt-5 px-10 overflow-y-auto">
                        <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                            <DescPageComponent
                                desc={"Riwayat pengisian ulang produk anda dari waktu ke waktu"} />
                            <FilterComponentRestock
                                searchQuery={searchQuery}
                                handleSearchChange={handleSearchChange}
                                handleStatusFilterChange={handleStatusFilterChange}
                            />

                            <div className="flex items-center justify-center h-full h-96">
                                <HistoryRestockCard restockHistory={filteredHistory} />
                            </div>
                        </div>
                        <PaginationHistoryRestock pagination={pagination} onPageChange={handlePageChange}/>
                    </main>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-xl">{error}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
