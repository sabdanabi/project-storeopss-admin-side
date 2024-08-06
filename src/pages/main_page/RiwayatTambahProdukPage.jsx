import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import {useEffect, useState} from "react";
import {CardHistoryAddProduct} from "../../components/history_add_product_components/CardHistoryAddProduct.jsx";
import {getHistoryAddProduct} from "../../services/StockService.jsx";
import { Spinner } from '@chakra-ui/react'
import {FilterProductBaru} from "../../components/history_add_product_components/FilterProductBaru.jsx";

export default function RiwayatTambahProdukPage() {
    const [addProductHistory, setaddProductHistory] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredHistory = addProductHistory.filter((entry) => {
        const matchesName = entry.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDate = entry.date.includes(searchQuery);
        return matchesName || matchesDate;
    });


    const fetchAddProductHistory = async () => {
        try {

            setLoading(true);
            const data = await getHistoryAddProduct();
            setaddProductHistory(data.data);
            setAuth(true);

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {
        fetchAddProductHistory();
    }, []);

    return(
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent/>

            <div className="flex flex-col flex-1 w-full">
                <PartTop/>
                <NamePageComponent nama={"History Produk Masuk"}/>
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
                    <main className="flex-1 p-5 overflow-y-auto">
                        <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                            <DescPageComponent
                                desc={"Riwayat tambah produk anda dari waktu ke waktu."}/>
                            <FilterProductBaru handleSearchChange={handleSearchChange} searchQuery={searchQuery}/>

                            <div className="bg-[#EEF0F5] justify-between p-3
                        border-b-[3px] border-gray-200 grid grid-cols-3 gap-4 overflow-auto">
                                <CardHistoryAddProduct addProductHistory={filteredHistory}/>
                            </div>
                        </div>
                    </main>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-xl">{ error }</p>
                    </div>
                )}

            </div>
        </div>
    )
}