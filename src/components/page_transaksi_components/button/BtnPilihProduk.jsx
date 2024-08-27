import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FilterProdukAddTransaksi } from "../filter_components/FilterProdukAddTransaksi.jsx";
import { getAllProductTransaktion } from "../../../services/TransaksiService.jsx";

const ITEMS_PER_PAGE = 10;

export function ProductSelectionTable({ onProductSelect }) {
    const [pilihProduct, setPilihProduct] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [warning, setWarning] = useState("");
    const [counts, setCounts] = useState({});
    const [checklist, setChecklist] = useState({});
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); 
    };

    const filteredProduct = pilihProduct.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const incrementCount = (id) => {
        setCounts((prevCounts) => {
            const product = pilihProduct.find((product) => product.id === id);
            if (product && prevCounts[id] < product.quantity) {
                return {
                    ...prevCounts,
                    [id]: (prevCounts[id] || 0) + 1
                };
            } else {
                setWarning("Stok habis.");
                setTimeout(() => {
                    setWarning("");
                }, 2000);
                return prevCounts;
            }
        });
    };

    const decrementCount = (id) => {
        setCounts((prevCounts) => {
            const newCount = (prevCounts[id] || 0) - 1;
            const updatedCounts = {
                ...prevCounts,
                [id]: newCount > 0 ? newCount : 0
            };
            if (newCount <= 0) {
                setChecklist((prevChecklist) => ({
                    ...prevChecklist,
                    [id]: false
                }));
            }
            return updatedCounts;
        });
    };

    const toggleChecklist = (id) => {
        if (counts[id] > 0) {
            setChecklist((prevChecklist) => ({
                ...prevChecklist,
                [id]: !prevChecklist[id]
            }));
        } else {
            setWarning("Tentukan quantity sebelum memilih produk.");
            setTimeout(() => {
                setWarning("");
            }, 2000);
        }
    };

    const handleSelect = () => {
        const selectedProducts = pilihProduct
            .filter((product) => checklist[product.id])
            .map((product) => ({
                ...product,
                count: counts[product.id] || 0
            }));
        onProductSelect(selectedProducts);
    };

    const updateProductsState = async () => {
        try {
            setLoading(true);
            const result = await getAllProductTransaktion();
            setPilihProduct(result.data);
            setAuth(true);
        } catch (e) {
            console.log(e);
            setError(e.response.data.error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        updateProductsState();
    }, []);

    useEffect(() => {
        setCounts(pilihProduct.reduce((acc, product) => {
            acc[product.id] = 0;
            return acc;
        }, {}));
        setChecklist(pilihProduct.reduce((acc, product) => {
            acc[product.id] = false;
            return acc;
        }, {}));
    }, [pilihProduct]);

    const totalItems = filteredProduct.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    const paginatedProducts = filteredProduct.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div>
            <FilterProdukAddTransaksi searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
            <div>
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-xl">Memuat...</p>
                    </div>
                ) : isAuth ? (
                    <div className="overflow-auto">
                        <table className="w-[700px] bg-white mt-7 table-fixed">
                            <thead>
                                <tr>
                                    <th className="py-2 text-left">Nama Produk</th>
                                    <th className="py-2 text-center">Harga</th>
                                    <th className="py-2 text-center">Stok</th>
                                    <th className="py-2 text-center">Jumlah</th>
                                    <th className="py-2 text-center">Pilih</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedProducts.map((product) => (
                                    <tr key={product.id} className="border-b">
                                        <td className="py-2 px-4 text-left">{product.name}</td>
                                        <td className="py-2 px-4 text-center">{product.selling_price}</td>
                                        <td className="py-2 px-4 text-center">{product.quantity}</td>
                                        <td className="py-2 px-4 text-center">
                                            <button onClick={() => decrementCount(product.id)} className="px-2 border rounded">-</button>
                                            <span className="mx-2">{counts[product.id]}</span>
                                            <button onClick={() => incrementCount(product.id)} className="px-2 border rounded">+</button>
                                        </td>
                                        <td className="py-2 px-4 text-center">
                                            <button onClick={() => toggleChecklist(product.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-6 ${checklist[product.id] ? 'text-green-500' : 'text-gray-500'}`}>
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd"/>
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="flex justify-between items-center mt-4 w-[300px]">
                            <button 
                                onClick={() => handlePageChange(currentPage - 1)} 
                                disabled={currentPage === 1}
                                className="px-4 py-2 bg-gray-300 rounded"
                            >
                                Prev
                            </button>
                            <span>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button 
                                onClick={() => handlePageChange(currentPage + 1)} 
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 bg-gray-300 rounded"
                            >
                                Next
                            </button>
                        </div>
                        <button
                            className="flex px-7 py-2 bg-[#1A4F8B] group mt-10 rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2"
                            onClick={handleSelect}
                        >
                            <span className="text-white font-medium text-sm group-hover:text-[#1A4F8B]">Pilih Produk</span>
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-xl">{error}</p>
                    </div>
                )}
            </div>
            {warning && <div className="text-red-600 mt-4">{warning}</div>}
        </div>
    );
}

ProductSelectionTable.propTypes = {
    onProductSelect: PropTypes.func.isRequired,
};
