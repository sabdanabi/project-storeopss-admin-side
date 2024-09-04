import { useEffect, useState } from "react";
import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import { getRecapProduct } from "../../services/RecapProductService.jsx";
import { FilterComponentLaporanPage } from "../../components/page_laporan_stock_components/FilterComponentLaporanPage.jsx";
import { Spinner } from "@chakra-ui/react";
import { PaginationRecapProduct } from "../../components/page_laporan_stock_components/PaginationRecapProduct.jsx";
import TblLaporanStock from "../../components/page_laporan_stock_components/TblLaporanStock.jsx";

export default function LaporanStockPage() {
    const [products, setProducts] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [pagination, setPagination] = useState({});
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearch, setIsSearch] = useState(false);

    const handlePageChange = (page) => {
        fetchRecapProducts(page, selectedYear, selectedMonth, searchQuery);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        if (e.target.value === '') {
            fetchRecapProducts(1, selectedYear, selectedMonth);
        }
    };

    const onSearchClick = () => {
        setIsSearch(true);
    };

    const handleFilterChange = (year, month) => {
        setSelectedYear(year);
        setSelectedMonth(month);
        fetchRecapProducts(1, year, month, searchQuery);
    };

    useEffect(() => {
        if (isSearch) {
            fetchRecapProducts(1, selectedYear, selectedMonth, searchQuery);
            setIsSearch(false);
        } else if (searchQuery === '') {
            fetchRecapProducts(1, selectedYear, selectedMonth);
        }
    }, [searchQuery, isSearch, selectedYear, selectedMonth]);

    const fetchRecapProducts = async (page = 1, year = null, month = null, searchQuery = '') => {
        try {
            setLoading(true);
            const result = await getRecapProduct(year, month, page, searchQuery);

            if (result.error) {
                setError(result.error);
                setAuth(false);
            } else {
                setProducts(result.data.products);
                setPagination(result.meta);
                setAuth(true);
            }
        } catch (e) {
            console.log(e);
            setError(e.response?.data?.error || "An error occurred");
            setAuth(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />
            <div className="flex flex-col flex-1 w-full">
                <PartTop />
                <NamePageComponent nama={"Laporan Stock"} subtitle={"dapatkan laporan stock anda secara real time"} />
                <main className="flex-1 px-10 pt-5">
                    <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200 mb-7">
                        <DescPageComponent
                            desc={`Laporan stok ini mencakup pada ${selectedMonth} ${selectedYear}`}/>
                        <FilterComponentLaporanPage
                            handleSearchChange={handleSearchChange}
                            searchQuery={searchQuery}
                            onSearchClick={onSearchClick}
                            onFilterChange={handleFilterChange}
                            selectedYear={selectedYear}
                            selectedMonth={selectedMonth}/>
                        <div className="bg-white flex border-b-[3px] border-gray-200 overflow-auto h-80">
                            {isLoading ? (
                                <div className="flex items-center justify-center h-full w-full">
                                    <Spinner
                                        thickness='4px'
                                        speed='0.65s'
                                        emptyColor='gray.200'
                                        color='blue.500'
                                        size='xl'
                                    />
                                </div>
                            ) : isAuth ? (
                                <TblLaporanStock pagination={pagination} products={products} selectedMonth={selectedMonth} selectedYear={selectedYear}/>
                            ) : (
                                <div className="flex items-center justify-center h-full w-full">
                                    <p className="text-xl">{error}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    <PaginationRecapProduct pagination={pagination} onPageChange={handlePageChange} />
                </main>
            </div>
        </div>
    );
}
