import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import SearchBar from "../../components/components_reused/SearchBar.jsx";
import {useEffect, useState} from "react";
import {getAllRestockHistory} from "../../services/RestockService.jsx";
import {HistoryRestockCard} from "../../components/history_restock_components/HistoryRestockCard.jsx";

export default function RiwayatRestockProdukPage() {
    const [restockHistory, setRestockHistory] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRestockHistory = async () => {
        try {

            setLoading(true);
            const data = await getAllRestockHistory();
            setRestockHistory(data.data);
            setAuth(true);

        } catch (error) {

            setError(error.message);

        } finally {

            setLoading(false);

        }
    };

    useEffect(() => {
        fetchRestockHistory();
    }, []);

    return(
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent/>

            <div className="flex flex-col flex-1 w-full">
                <PartTop/>
                <NamePageComponent nama={"Histori Pembaruan Stok"}/>

                <main className="flex-1 p-5 overflow-y-auto">
                    <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                        <DescPageComponent
                            desc={"Riwayat pengisian ulang produk anda dari waktu ke waktu"}/>
                        <SearchBar/>

                        <div className="bg-[#EEF0F5] justify-between p-3
                        border-b-[3px] border-gray-200 grid grid-cols-3 gap-5 overflow-auto h-[440px]">
                            {isLoading ? (
                                <div className="flex items-center justify-center h-full">
                                    <p className="text-xl">Loading...</p>
                                </div>
                            ) : isAuth ? (
                                <HistoryRestockCard restockHistory={restockHistory}/>
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <p className="text-xl">{ error }</p>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}