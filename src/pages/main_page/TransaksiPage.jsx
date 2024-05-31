import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import TblTransaksi from "../../components/page_transaksi_components/TblTransaksi.jsx";
import BtnAddTransaksi from "../../components/page_transaksi_components/BtnAddTransaksi.jsx";
import {useEffect, useState} from "react";
import {getAllTransaksi} from "../../services/TransaksiService.jsx";
export default function TransaksiPage() {
    const [transaksi, setTransaksi] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredTransaksi = transaksi.filter((entry) => {
        return entry.customer.name.toLowerCase().includes(searchQuery.toLowerCase());
    });


    useEffect(() => {
        updateProductsState();
    }, []);

    const updateProductsState = async () => {
        try {

            setLoading(true);
            const result = await getAllTransaksi();
            setTransaksi(result.data);
            setAuth(true);

        } catch(e) {

            console.log(e);
            setError(e.response.data.error);

        } finally {
            setLoading(false);
        }
    }

    return(
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent/>
            <div className="flex flex-col flex-1 w-full overflow-hidden">
                <PartTop/>
                <BtnAddTransaksi/>
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-xl">Loading...</p>
                    </div>
                ) : isAuth ? (
                    <TblTransaksi handleSearchChange={handleSearchChange}
                                  filteredTransaksi={filteredTransaksi}
                                  searchQuery={searchQuery}/>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-xl">{ error }</p>
                    </div>
                )}
            </div>
        </div>
    )
}