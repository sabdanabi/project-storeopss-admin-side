import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import FilterComponentsNotaPage from "../../components/components_reused/FilterComponentsNotaPage.jsx";
import {useEffect, useState} from "react";
import {getAllTransaksi} from "../../services/TransaksiService.jsx";
import {Spinner} from "@chakra-ui/react";

export default function NotaPage() {
    const [nota, setNota] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredStatus, setFilteredStatus] = useState(null);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredNota = nota.length > 0 ? nota.filter((entry) => {
        const nameMatch = entry.customer.name.toLowerCase().includes(searchQuery.toLowerCase());
        const statusMatch = !filteredStatus || entry.status === filteredStatus;
        return nameMatch && statusMatch;
    }) : [];

    useEffect(() => {
        updateProductsState();
    }, []);

    const updateProductsState = async () => {
        try {
            setLoading(true);
            const result = await getAllTransaksi();
            setNota(result.data);
            setAuth(true);
        } catch (e) {
            console.log(e);
            setError(e.response?.data?.error || 'Unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    const handleStatusFilterChange = (status) => {
        setFilteredStatus(status === 'Semua' ? null : status);
    };

    function calculateTotal(products) {
        return products.reduce((total, product) => total + product.quantity * product.price, 0);
    }

    return(
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />
            <div className="flex flex-col flex-1 w-full">
                <PartTop />
                <NamePageComponent nama={"Nota"} />

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
                ): isAuth ? (
                    <main className="flex-1 p-5 overflow-y-auto">
                        <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                            <DescPageComponent desc={"Nota pada setiap pembelian"}/>
                            <FilterComponentsNotaPage
                                searchQuery={searchQuery}
                                handleSearchChange={handleSearchChange}
                                handleStatusFilterChange={handleStatusFilterChange}
                            />

                            <div className="bg-[#EEF0F5] justify-between p-3 border-b-[3px] border-gray-200 grid grid-cols-3 gap-5 overflow-auto h-[440px]">
                                {filteredNota.map((nota) => (
                                    <div key={nota.id} className="bg-white w-96 py-2 px-1 rounded">
                                        <div className="flex mb-10 w-full relative">
                                            <p className="mr-32 font-semibold text-[#403E8A]">Adel Jaya</p>
                                            <p className="text-[14px] text-[#2B713A] font-semibold absolute left-[310px] top-1">Selesai</p>
                                        </div>

                                        <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                                            <p>Tanggal waktu</p>
                                            <p className="absolute left-28">:</p>
                                            <p className="font-semibold text-[#8C8BB4] absolute left-32">{nota.date}</p>
                                        </div>

                                        <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                                            <p>Status</p>
                                            <p className="absolute left-28">:</p>
                                            <div className={`bg-[#BEDBCF] flex justify-center p-1 px-4 rounded absolute left-32 
                                            ${nota.status === 'Belum lunas' ? 'bg-[#FFA9B3]' : 'bg-[#BEDBCF]'}`}>
                                                <p className={`text-sm  
                                                ${nota.status === 'Belum lunas' ? 'text-[#7A3636]' : 'text-[#2B713A]'}`}>{nota.status}</p>
                                            </div>
                                        </div>

                                        <div className="flex text-[11px] font-medium text-[#403E8A] mb-5 relative mt-5">
                                            <p>Pelanggan</p>
                                            <p className="absolute left-28">:</p>
                                            <p className="font-semibold text-[#8C8BB4] absolute left-32">{nota.customer.name}</p>
                                        </div>

                                        <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                                            <p>Metode Pembayaran</p>
                                            <p className="absolute left-28">:</p>
                                            <p className="font-semibold text-[#8C8BB4] absolute left-32">{nota.payment_method}</p>
                                        </div>

                                        <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                                            <p>Catatan</p>
                                            <p className="absolute left-28">:</p>
                                            <p className="font-semibold text-[#8C8BB4] absolute left-32">-</p>
                                        </div>

                                        <div>
                                            <div className="flex text-xs bg-[#EEEEEE] py-4 px-6 font-semibold">
                                                <p>Produk</p>
                                                <p className="mx-14">Jumlah</p>
                                                <p className="mr-14">Harga</p>
                                                <p>Subtotal</p>
                                            </div>
                                            {nota.products && nota.products.length > 0 ? nota.products.map((product, index) => (
                                                <div key={index} className="text-xs py-4 px-6">
                                                    <ul className="flex">
                                                        <li>{product.name}</li>
                                                        <li className="mx-16">{product.quantity}</li>
                                                        <li className="mr-10">Rp{product.price}</li>
                                                        <li>Rp{product.quantity * product.price}</li>
                                                    </ul>
                                                </div>
                                            )) : (
                                                <div className="text-xs py-4 px-6">
                                                    <p>Produk tidak tersedia</p>
                                                </div>
                                            )}
                                            <hr className="my-1 border-t-1 border-black mb-3"/>
                                            <div className="flex text-xs bg-[#BEDBCF] ml-56 py-3 px-3">
                                                <p className="mr-10">Total</p>
                                                <p className="flex-grow">Rp{nota.products ? calculateTotal(nota.products) : 0}</p>
                                            </div>

                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
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
