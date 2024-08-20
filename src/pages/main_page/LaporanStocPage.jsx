import { useEffect, useState } from "react";
import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import TblLaporanStock from "../../components/page_laporan_stock_components/TblLaporanStock.jsx";
import {getRecapProduct} from "../../services/RecapProductService.jsx";
import {
    FilterComponentLaporanPage
} from "../../components/page_laporan_stock_components/FilterComponentLaporanPage.jsx";
import {Spinner} from "@chakra-ui/react";
import {PaginationRecapProduct} from "../../components/page_laporan_stock_components/PaginationRecapProduct.jsx";
import DummyTabelLaporanStock from "../../dummy/dummy_data_tabel/DummyTabelLaporanStock.jsx";

export default function LaporanStockPage() {
    const [products, setProducts] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [pagination, setPagination] = useState({});


    const fetchRecapProducts = async (page = 1) => {
        try {
            setLoading(true);
            const result = await getRecapProduct(page);
            if (result.error) {
                setError(result.error);
                setAuth(false);
                setPagination(result.meta);

            } else {
                setProducts(result.data);
                setAuth(true);
            }
        } catch (e) {
            console.log(e);
            setError(e.response.data.error);
            setAuth(false);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (page) => {
        fetchRecapProducts(page);
    };

    useEffect(() => {
        fetchRecapProducts(pagination.current_page);
    }, []);

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />
            <div className="flex flex-col flex-1 w-full">
                <PartTop />
                <NamePageComponent nama={"Laporan Stock"} subtitle={"dapatkan laporan stock anda secara real time"}/>
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
                    <main className="flex-1 px-10 pt-5 ">
                        <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                            <DescPageComponent desc={"Laporan stok ini mencakup periode dari tanggal 1 Maret 2024 hingga 31 Maret 2024."} />
                            <FilterComponentLaporanPage/>
                            <DummyTabelLaporanStock products={products} />
                        </div>
                    </main>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-xl">{error}</p>
                    </div>
                )}

                <PaginationRecapProduct pagination={pagination} onPageChange={handlePageChange}/>
            </div>
        </div>
    );
}
