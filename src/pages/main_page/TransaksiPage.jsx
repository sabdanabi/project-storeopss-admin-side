 import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import TblTransaksi from "../../components/page_transaksi_components/TblTransaksi.jsx";
import BtnAddTransaksi from "../../components/page_transaksi_components/button/BtnAddTransaksi.jsx";
import { useEffect, useState } from "react";
import { getAllTransaksi, addIncome } from "../../services/TransaksiService.jsx";
import { Spinner } from '@chakra-ui/react'
 import {PaginationTransaksiProduk} from "../../components/page_transaksi_components/PaginationTransaksiProduk.jsx";


export default function TransaksiPage() {
    const [transaksi, setTransaksi] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredStatus, setFilteredStatus] = useState(null);
    const [pagination, setPagination] = useState({});


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredTransaksi = transaksi.length > 0 ? transaksi.filter((entry) => {
        const nameMatch = entry.customer.name.toLowerCase().includes(searchQuery.toLowerCase());
        const statusMatch = !filteredStatus || entry.status === filteredStatus;
        return nameMatch && statusMatch;
    }) : [];

    useEffect(() => {
        fetchDataTranksaksi();
    }, []);

    const fetchDataTranksaksi = async (page = 1) => {
        try {
            setLoading(true);
            const result = await getAllTransaksi(page);
            setTransaksi(result.data);
            setAuth(true);
            setPagination(result.meta);
        } catch (e) {
            console.log(e);
            setError(e.response?.data?.error || 'Unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (page) => {
        fetchDataTranksaksi(page);
    };

    const updateProductState = () => {
        fetchDataTranksaksi(pagination.current_page);
    };
    const handleStatusFilterChange = (status) => {
        setFilteredStatus(status === 'Semua' ? null : status);
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />
            <div className="flex flex-col flex-1 w-full overflow-hidden">
                <PartTop/>
                <BtnAddTransaksi addIncome={addIncome}
                                 updateProductsState={fetchDataTranksaksi}/>

                <div>
                    <TblTransaksi
                        handleSearchChange={handleSearchChange}
                        filteredTransaksi={filteredTransaksi}
                        searchQuery={searchQuery}
                        updateProductsState={updateProductState}
                        handleStatusFilterChange={handleStatusFilterChange}
                        pagination={pagination}
                        error={error}
                        isAuth={isAuth}
                        isLoading={isLoading}
                    />
                    <PaginationTransaksiProduk pagination={pagination} onPageChange={handlePageChange}/>
                </div>


            </div>
        </div>
    );
}
