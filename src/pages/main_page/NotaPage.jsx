import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import FilterComponentsNotaPage from "../../components/components_reused/FilterComponentsNotaPage.jsx";
import { useEffect, useState } from "react";
import {getAllNotaTransaksi, getAllTransaksi} from "../../services/TransaksiService.jsx";
import { Spinner } from "@chakra-ui/react";
import * as XLSX from "xlsx";
import {PagintionRiwayatNota} from "../../components/riwayat_nota_components/PagintionRiwayatNota.jsx";

export default function NotaPage() {
    const [nota, setNota] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState('');
    // const [filteredStatus, setFilteredStatus] = useState(null);
    const [selectedNota, setSelectedNota] = useState(null);
    const [pagination, setPagination] = useState({});
    const { current_page, per_page } = pagination || {};
    const [selectedRange, setSelectedRange] = useState('Semua');
    const [selectedPaid, setSelectedPaid] = useState(null);

    useEffect(() => {
        if (searchQuery === '') {
            fetchNotaTransaksi(1, selectedRange, selectedPaid, '');
        }

    }, [selectedRange, selectedPaid, searchQuery]);

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query === '') {
            fetchNotaTransaksi(1, selectedRange, selectedPaid, '');
        }
    };

    const handleSearchClick = () => {
        fetchNotaTransaksi(1, selectedRange, selectedPaid, searchQuery);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchNotaTransaksi(1, selectedRange, selectedPaid, searchQuery);
        }
    };

    const handlePageChange = (page) => {
        fetchNotaTransaksi(page);
    };

    // const handleStatusFilterChange = (status) => {
    //     setFilteredStatus(status === 'Semua' ? null : status);
    // };

    const calculateTotal = (products) => {
        return products.reduce((total, product) => total + product.quantity * product.price, 0);
    };

    const handleDetailClick = (nota) => {
        setSelectedNota(nota);
    };

    const handleCloseModal = () => {
        setSelectedNota(null);
    };

    const onFilterChange = (paid) => {
        setSelectedPaid(paid);
        fetchNotaTransaksi(1, selectedRange, paid, searchQuery);
    };

    const handleRangeChange = (range) => {
        setSelectedRange(range);
        fetchNotaTransaksi(1, range, selectedPaid, searchQuery);
    };

    // const filteredNota = nota.filter((entry) => {
    //     const customerName = entry.customer?.name || '';
    //     const nameMatch = customerName.toLowerCase().includes(searchQuery.toLowerCase());
    //     const dateMatch = entry.date?.includes(searchQuery) || false;
    //     return nameMatch || dateMatch;
    // });

    const fetchNotaTransaksi = async (page = 1, range = null, paid = null, searchQuery = '') => {
        try {
            setLoading(true);
            const result = await getAllTransaksi(page, range, paid, searchQuery);
            setNota(result.data);
            setAuth(true);
            setPagination(result.meta);
        } catch (e) {
            console.error("Error fetching transactions:", e);
            setError(e.response?.data?.error || 'Unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    const fetchAllNotaTransaksi = async () => {
        try {
            setLoading(true);
            const result = await getAllNotaTransaksi();
            setAuth(true);
            return result;
        } catch (e) {
            console.log(e);
            setError(e.response?.data?.error || 'Unknown error occurred');
        } finally {
            setLoading(false);
        }
    };

    const exportToExcel = async () => {
        const result = await fetchAllNotaTransaksi();

        if (result && result.data) {
            const dataToExport = result.data.map((entry, index) => ({
                No: index + 1,
                Resi_Kostumer: entry.customer.name,
                Tanggal: entry.date,
                Status: entry.status,
                Products: entry.products.map((product) => `x${product.quantity} ${product.name} @ ${product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}`).join(', '),
                Total: calculateTotal(entry.products).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }),
                Metode_Pembayaran: entry.payment_method,
            }));

            const worksheet = XLSX.utils.json_to_sheet(dataToExport);
            const workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, "Riwayat_Tambah_Produk");

            XLSX.writeFile(workbook, "Riwayat_Tambah_Produk.xlsx");
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent/>
            <div className="flex flex-col flex-1 w-full">
                <PartTop/>
                <NamePageComponent nama={"Riwayat Nota"}/>
                <main className="flex-1 px-10 pt-5 overflow-y-auto">
                    <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                        <DescPageComponent desc={"Nota pada setiap pembelian"}/>
                        <FilterComponentsNotaPage
                            searchQuery={searchQuery}
                            handleSearchChange={handleSearchChange}
                            // handleStatusFilterChange={handleStatusFilterChange}
                            exportToExcel={exportToExcel}
                            handleRangeChange={handleRangeChange}
                            selectedRange={selectedRange}
                            onFilterChange={onFilterChange}
                            handleSearchClick={handleSearchClick}
                            handleKeyDown={handleKeyDown}
                        />

                        <div className="bg-white border-b-[3px] border-gray-200 overflow-auto h-80">
                            {isLoading ? (
                                <div className="flex items-center justify-center h-full">
                                    <Spinner
                                        thickness="4px"
                                        speed="0.65s"
                                        emptyColor="gray.200"
                                        color="blue.500"
                                        size="xl"
                                    />
                                </div>
                            ) : isAuth ? (
                                <table className="w-full h-12">
                                    <thead className="h-12 border-b-2">
                                    <tr className="text-sm text-[#9CA4AE]">
                                        <td className="px-4">No</td>
                                        <td className="px-4">Resi Kostumer</td>
                                        <td className="px-4">Tanggal</td>
                                        <td className="px-4">Status</td>
                                        <td className="px-4">Aksi</td>
                                    </tr>
                                    </thead>
                                    <tbody className="text-sm font-semibold text-blue-gray-700">
                                    {nota.map((nota, index) => (
                                        <tr className="border-b-2 h-10 text-xs" key={`${nota.id}-${index}`}>
                                            <td className="px-4">{(current_page - 1) * per_page + index + 1}</td>
                                            <td className="px-4 py-2">{nota.customer.name}</td>
                                            <td className="px-4 py-2">{nota.date}</td>
                                            <td className="px-4 py-2">
                                            <span
                                                className={`text-sm ${nota.status === 'Belum lunas' ? 'text-[#7A3636]' : 'text-[#2B713A]'}`}>{nota.status}</span>
                                            </td>
                                            <td className="px-4 py-2">
                                                <button
                                                    className="text-[10px] hover:bg-[#d7e0e8] text-blue-gray-500 bg-[#dde6efc6] h-[33px] w-[68px] rounded-lg font-semibold"
                                                    onClick={() => handleDetailClick(nota)}
                                                >
                                                    Detail
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            ) : (
                                <div className="flex items-center justify-center h-full">
                                    <p className="text-xl">{error}</p>
                                </div>
                            )}

                            {selectedNota && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                                    <div className="bg-white py-4 rounded-lg max-w-lg w-full px-16">
                                            <div className="flex justify-between">
                                                <p className="font-semibold text-2xl mb-7">Detail Nota</p>
                                                <button onClick={handleCloseModal} className="h-7">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-8 h-8 text-red-600"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                        />
                                                    </svg>
                                                </button>
                                            </div>

                                            <div className="flex justify-center p-3 w-96">
                                                <div id="notaTransaksi"
                                                     className="bg-white w-72 py-2 px-1 rounded-[10px] shadow-md notaTransaksi">
                                                    <div className="flex ml-4 mr-5 mt-3 justify-between items-center">
                                                        <p className="font-semibold text-[17px] text-blue-gray-700 bold">Toko
                                                            Adel Jaya</p>
                                                        <p className={`text-[14px] font-semibold ${selectedNota.is_finished ? "text-[#2B713A]" : "text-[#7A3636]"}`}>
                                                            {selectedNota.is_finished ? "Selesai" : "Belum selesai"}
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
                                                        <p className="font-semibold text-blue-gray-700 bold">{selectedNota.invoice}</p>
                                                        <p className="font-semibold text-blue-gray-700 bold">Resi
                                                            kostumer {selectedNota.customer.name}</p>
                                                        <p className="font-semibold text-[#8C8BB4] bold">{selectedNota.date}</p>
                                                    </div>
                                                    <hr className="my-1 mt-5 border-t-2 border-blue-gray-300 mb-1 border-dashed"/>
                                                    <hr className="my-1 mt-0 border-t-2 border-blue-gray-300 mb-3 border-dashed"/>

                                                    <div>
                                                        {selectedNota.products && selectedNota.products.length > 0 ? selectedNota.products.map((product, index) => (
                                                            <div key={index}
                                                                 className="justify-between flex ml-4 text-[15px] font-medium text-blue-gray-700">
                                                                <div className="flex gap-2">
                                                                    <p className="mr-3 bold">x</p>
                                                                    <p className="mr-2 bold">{product.quantity}</p>
                                                                    <p className="bold">{product.name}</p>
                                                                </div>
                                                                <p className="mr-4 bold">
                                                                    {(product.price * product.quantity).toLocaleString('id-ID', {
                                                                        style: 'currency',
                                                                        currency: 'IDR'
                                                                    })}
                                                                </p>
                                                            </div>
                                                        )) : (
                                                            <div className="text-xs py-4 px-6">
                                                                <p>Produk tidak tersedia</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <hr className="my-1 mt-3 border-t-2 border-blue-gray-300 mb-3 border-dashed"/>
                                                    <div
                                                        className="flex justify-between text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
                                                        <p className="font-semibold text-blue-gray-900 bold">Total</p>
                                                        <p className="text-[15px] font-semibold text-blue-gray-900 bold">
                                                            {selectedNota.products ? `${calculateTotal(selectedNota.products).toLocaleString('id-ID', {
                                                                style: 'currency',
                                                                currency: 'IDR'
                                                            })}` : ''}
                                                        </p>
                                                    </div>
                                                    <hr className="my-1 mt-3 border-t-2 border-blue-gray-300 mb-3 border-dashed"/>
                                                    <div
                                                        className="flex justify-between text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
                                                        <p className="font-semibold text-blue-gray-700 bold">Metode
                                                            Pembayaran</p>
                                                        <p className="text-[15px] font-semibold text-blue-gray-700 bold">
                                                            {selectedNota.payment_method}
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="flex justify-between text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
                                                        <p className="font-semibold text-blue-gray-700 bold">Opsi
                                                            Pengambilan</p>
                                                        <p className="text-[15px] font-semibold text-blue-gray-700 bold">
                                                            {selectedNota.products[0].option}
                                                        </p>
                                                    </div>
                                                    <div id="status"
                                                         className="flex justify-between text-[13px] font-medium text-blue-gray-300 mt-2 relative ml-4 mb-3 mr-4">
                                                        <p className="font-semibold text-blue-gray-700 bold">Status Pembelian</p>
                                                        <div className={` 
                                            ${selectedNota.status}`}>
                                                            <p className={`text-sm  
                                                ${selectedNota.status === 'Belum lunas' ? 'text-[#7A3636]' : 'text-[#2B713A]'} bold`}>{selectedNota.status}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>
                    <PagintionRiwayatNota pagination={pagination} onPageChange={handlePageChange}/>
                </main>
            </div>
        </div>
    )
        ;
}
