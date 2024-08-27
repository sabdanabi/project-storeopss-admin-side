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
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');

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

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />
            <div className="flex flex-col flex-1 w-full">
                <PartTop/>
                <NamePageComponent nama={"Statistik Produk"}/>
                <div>
                    <main className="flex-1 pt-5 px-10 overflow-y-auto">
                        <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200 h-[520px]">
                            <DescPageComponent
                                desc={`Laporan stok ini mencakup recap product pada bulan ${selectedMonth} ${selectedYear}.`}/>
                            <FilterRecapProductComponent onFilterChange={handleFilterChange}/>
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
                                    {data.length > 0 ? (
                                        <BarChartProductSell data={data}/>
                                    ) : (
                                        <div className="flex-col items-center justify-center">
                                            <img src="/assets_img/notfound_transaction_img.png" className="m-auto mt-10 w-[200px]" />
                                            <p className="text-[22px] text-center font-medium mt-6 text-blue-gray-600 ">Data tidak ditemukan</p>
                                            <p className="text-[18px] text-center font-normal mt-4 mb-10 text-blue-gray-200 ">
                                                Tidak dapat menemukan data untuk <span className="font-semibold text-blue-gray-600">{selectedMonth} {selectedYear}</span>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <p className="text-xl">{error}</p>
                                </div>
                            )}
                        </div>
                    </main>
                    <PaginationBarChartProductSell pagination={pagination} onPageChange={handlePageChange}/>
                </div>

            </div>
        </div>
    );
}
