import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import TblTransaksi from "../../components/page_transaksi_components/TblTransaksi.jsx";
import BtnAddTransaksi from "../../components/page_transaksi_components/button/BtnAddTransaksi.jsx";
import { useEffect, useState } from "react";
import { getAllTransaksi, addIncome } from "../../services/TransaksiService.jsx";
import { PaginationTransaksiProduk } from "../../components/page_transaksi_components/PaginationTransaksiProduk.jsx";

export default function TransaksiPage() {
    const [transaksi, setTransaksi] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState('');
    const [pagination, setPagination] = useState({});
    const [selectedRange, setSelectedRange] = useState('Semua');
    const [selectedPaid, setSelectedPaid] = useState(null);

    useEffect(() => {
        fetchDataTransaksi(1, selectedRange, selectedPaid, searchQuery);
    }, [selectedRange, selectedPaid]);

    const handlePageChange = (page) => {
        fetchDataTransaksi(page, selectedRange, selectedPaid, searchQuery);
    };

    const updateProductState = () => {
        fetchDataTransaksi(pagination.current_page, selectedRange, selectedPaid, searchQuery);
    };

    const onFilterChange = (paid) => {
        setSelectedPaid(paid);
        fetchDataTransaksi(1, selectedRange, paid, searchQuery);
    };

    const handleRangeChange = (range) => {
        setSelectedRange(range);
        fetchDataTransaksi(1, range, selectedPaid, searchQuery);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Automatically load products when the search query is empty
        if (query === '') {
            fetchDataTransaksi(1, selectedRange, selectedPaid, '');
        }
    };

    const handleSearchClick = () => {
        fetchDataTransaksi(1, selectedRange, selectedPaid, searchQuery);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchDataTransaksi(1, selectedRange, selectedPaid, searchQuery);
        }
    };

    const fetchDataTransaksi = async (page = 1, range = null, paid = null, searchQuery = '') => {
        try {
            setLoading(true);
            const result = await getAllTransaksi(page, range, paid, searchQuery);
            setTransaksi(result.data);
            setAuth(true);
            setPagination(result.meta);
        } catch (e) {
            console.error("Error fetching transactions:", e);
            setError(e.response?.data?.error || 'Unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />
            <div className="flex flex-col flex-1 w-full overflow-hidden">
                <PartTop />
                <BtnAddTransaksi addIncome={addIncome} updateProductsState={updateProductState} />

                <div>
                    <TblTransaksi
                        handleSearchChange={handleSearchChange}
                        searchQuery={searchQuery}
                        filteredTransaksi={transaksi}
                        updateProductsState={updateProductState}
                        onFilterChange={onFilterChange}
                        pagination={pagination}
                        error={error}
                        isAuth={isAuth}
                        isLoading={isLoading}
                        handleRangeChange={handleRangeChange}
                        selectedRange={selectedRange}
                        handleSearchClick={handleSearchClick}
                        handleKeyDown={handleKeyDown}
                    />
                    <PaginationTransaksiProduk pagination={pagination} onPageChange={handlePageChange} />
                </div>
            </div>
        </div>
    );
}

