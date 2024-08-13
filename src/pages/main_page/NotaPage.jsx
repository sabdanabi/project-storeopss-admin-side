import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import FilterComponentsNotaPage from "../../components/components_reused/FilterComponentsNotaPage.jsx";
import { useEffect, useState } from "react";
import { getAllTransaksi } from "../../services/TransaksiService.jsx";
import { Spinner } from "@chakra-ui/react";

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

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />
            <div className="flex flex-col flex-1 w-full">
                <PartTop />
                <NamePageComponent nama={"Riwayat Nota"} />

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
                            <DescPageComponent desc={"Nota pada setiap pembelian"} />
                            <FilterComponentsNotaPage
                                searchQuery={searchQuery}
                                handleSearchChange={handleSearchChange}
                                handleStatusFilterChange={handleStatusFilterChange}
                            />

                            <div className="bg-[#EEF0F5] p-3 border-b-[3px] border-gray-200 grid grid-cols-4 gap-5 overflow-auto h-full">
                                {filteredNota.map((nota) => (
                                    <div key={nota.id} className="bg-white w-85 py-2 px-1 rounded-[10px] shadow-md">
                                        <div className="flex ml-4 mr-5 mt-3 justify-between items-center">
                                            <p className="font-semibold text-[17px] text-blue-gray-700">Toko Adel Jaya</p>
                                            <p className="text-[14px] text-[#2B713A] font-semibold">Selesai</p>
                                        </div>
                                        <div className="flex flex-col text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
                                            <p className="font-semibold text-blue-gray-700">Resi kostumer {nota.customer.name}</p>
                                            <p className="font-semibold text-[#8C8BB4] ">{nota.date}</p>
                                        </div>
                                        <hr className="my-1 mt-5 border-t-1 ml-4 mr-4 border-blue-gray-300 mb-1 border-dashed" />
                                        <hr className="my-1 mt-0 border-t-1  ml-4 mr-4 border-blue-gray-300 mb-3 border-dashed" />

                                        <div>
                                            {nota.products && nota.products.length > 0 ? nota.products.map((product, index) => (
                                                <div key={index} className="justify-between flex ml-4 text-[15px] font-medium text-blue-gray-700">
                                                    <div className="flex">
                                                        <p className="mr-2">x{product.quantity}</p>
                                                        <p>{product.name}</p>
                                                    </div>
                                                    <p className="mr-4">
                                                        {(product.price * product.quantity).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                                    </p>
                                                </div>
                                            )) : (
                                                <div className="text-xs py-4 px-6">
                                                    <p>Produk tidak tersedia</p>
                                                </div>
                                            )}
                                        </div>
                                        <hr className="my-1 mt-3 border-t-1  ml-4 mr-4 border-blue-gray-300 mb-3 border-dashed" />
                                        <div className="flex justify-between text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
                                            <p className="font-semibold text-blue-gray-900">Total</p>
                                            <p className="text-[15px] font-semibold text-blue-gray-900">
                                                {nota.products ? `${calculateTotal(nota.products).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}` : ''}
                                            </p>
                                        </div>
                                        <hr className="my-1 mt-3 border-t-1  ml-4 mr-4 border-blue-gray-300 mb-3 border-dashed" />
                                        <div className="flex justify-between text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
                                            <p className="font-semibold text-blue-gray-700">Metode Pembayaran</p>
                                            <p className="text-[15px] font-semibold text-blue-gray-700">
                                                {nota.payment_method}
                                            </p>
                                        </div>
                                        <div className="flex justify-between text-[13px] font-medium text-blue-gray-300 mt-2 relative ml-4 mb-3 mr-4">
                                            <p className="font-semibold text-blue-gray-700">Status</p>
                                            <div className={` 
                                            ${nota.status}`}>
                                                <p className={`text-sm  
                                                ${nota.status === 'Belum lunas' ? 'text-[#7A3636]' : 'text-[#2B713A]'}`}>{nota.status}</p>
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
