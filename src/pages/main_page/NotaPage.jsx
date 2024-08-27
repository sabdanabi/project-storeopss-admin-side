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

    const filteredNota = nota.filter((entry) => {
        const customerName = entry.customer?.name || '';
        const nameMatch = customerName.toLowerCase().includes(searchQuery.toLowerCase());
        const dateMatch = entry.date?.includes(searchQuery) || false;
        return nameMatch || dateMatch;
    });

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
            <SideNavbarComponent />
            <div className="flex flex-col flex-1 w-full">
                <PartTop />
                <NamePageComponent nama={"Riwayat Nota"} />
                <main className="flex-1 px-10 pt-5 overflow-y-auto">
                    <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                        <DescPageComponent desc={"Nota pada setiap pembelian"} />
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

                        <div className="bg-white border-b-[3px] border-gray-200 overflow-auto">
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
                                    {filteredNota.map((nota, index) => (
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
                                    <div className="bg-white p-4 rounded-lg max-w-lg w-full">
                                        <div className="flex justify-between items-center mb-4">
                                            <p className="font-semibold text-[20px] text-blue-gray-600">Detail Nota</p>
                                            <button
                                                className="text-red-500 font-bold"
                                                onClick={handleCloseModal}
                                            >
                                                X
                                            </button>
                                        </div>

                                        <div className="bg-white w-85 py-2 px-1 rounded-[10px] shadow-md">
                                            <div className="flex ml-4 mr-5 mt-3 justify-between items-center">
                                                <p className="font-semibold text-[17px] text-blue-gray-700">Toko Adel Jaya</p>
                                                <p className="text-[14px] text-[#2B713A] font-semibold">{selectedNota.status}</p>
                                            </div>
                                            <div className="flex flex-col text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
                                                <p className="font-semibold text-blue-gray-700">Resi kostumer {selectedNota.customer.name}</p>
                                                <p className="font-semibold text-blue-gray-700">Tanggal: {selectedNota.date}</p>
                                                <p>Produk:</p>
                                                {selectedNota.products.map((product, index) => (
                                                    <div key={index} className="pl-2">
                                                        <p>
                                                            - x{product.quantity} {product.name} @ {product.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                                        </p>
                                                    </div>
                                                ))}
                                                <p className="font-semibold text-blue-gray-700 mt-2">Total: {calculateTotal(selectedNota.products).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <PagintionRiwayatNota pagination={pagination} onPageChange={handlePageChange} />
                </main>
            </div>
        </div>
    );
}
