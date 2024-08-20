import { useEffect, useState } from "react";
import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import { getStatisticProductSell } from "../../services/StatisticService.jsx";
import { Spinner } from "@chakra-ui/react";
import { FilterRecapProductComponent } from "../../components/statistic_page_components/FilterRecapProductComponent.jsx";
import { BarChartProductSell } from "../../dummy/dummy_charts/BarChartProductSell.jsx";
import { PaginationBarChartProductSell } from "../../components/statistic_page_components/PaginationBarChartProductSell.jsx";

export default function StatisticPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isAuth, setAuth] = useState(false);
    const [pagination, setPagination] = useState({});
    const [selectedYear, setSelectedYear] = useState(''); // Define selectedYear
    const [selectedMonth, setSelectedMonth] = useState(''); // Define selectedMonth

    const fetchData = async (page = 1, year = null, month = null) => {
        try {
            const result = await getStatisticProductSell(year, month, 'asc', page);
            setData(result.data.products);
            setPagination(result.meta);
            setAuth(true);
        } catch (err) {
            setError('Gagal mengambil data');
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (year, month) => {
        setSelectedYear(year);
        setSelectedMonth(month);
        fetchData(1, year, month);
    };

    const handlePageChange = (page) => {
        fetchData(page, selectedYear, selectedMonth);
    };

    useEffect(() => {
        fetchData(1);
    }, []);

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />
            <div className="flex flex-col flex-1 w-full">
                <PartTop />
                <NamePageComponent nama={"Statistik Produk"} />
                {loading ? (
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
                    <div>
                        <main className="flex-1 pt-5 px-10 overflow-y-auto">
                            <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200 h-[520px]">
                                <DescPageComponent
                                    desc={`Laporan stok ini mencakup recap product pada bulan ${selectedMonth} ${selectedYear}.`} />
                                <FilterRecapProductComponent onFilterChange={handleFilterChange} />
                                {data.length > 0 ? (
                                    <BarChartProductSell data={data} />
                                ) : (
                                    <div className="flex items-center justify-center h-full">
                                        <p className="text-xl">No Data</p>
                                    </div>
                                )}
                            </div>
                        </main>
                        <PaginationBarChartProductSell pagination={pagination} onPageChange={handlePageChange} />
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-xl">{error}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
