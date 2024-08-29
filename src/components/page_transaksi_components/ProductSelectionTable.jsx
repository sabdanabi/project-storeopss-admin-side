import { useEffect, useState } from "react";
import { getAllProductTransaktion } from "../../services/TransaksiService.jsx";
import { FilterProdukAddTransaksi } from "./filter_components/FilterProdukAddTransaksi.jsx";
import {toast} from "react-toastify";
import PropTypes from "prop-types";

export function ProductSelectionTable({ onProductSelect }) {
    const [pilihProduct, setPilihProduct] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [counts, setCounts] = useState({});
    const [checklist, setChecklist] = useState({});
    const [searchQuery, setSearchQuery] = useState('');


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredProduct = pilihProduct.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const incrementCount = (id) => {
        setCounts((prevCounts) => {
            const product = pilihProduct.find((product) => product.id === id);
            if (product && prevCounts[id] < product.quantity) {
                return {
                    ...prevCounts,
                    [id]: (prevCounts[id] || 0) + 1
                };
            } else {
                toast.error("Persediaan Habis");
                setTimeout(() => {
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
            toast.error("Tentukan quantity sebelum memilih produk.");
        }
    };

    const handleSelect = () => {
        const selectedProducts = pilihProduct.filter((product) => checklist[product.id]).map((product) => ({
            ...product,
            count: counts[product.id] || 0
        }));
        onProductSelect(selectedProducts);
    };


    const fecthProductsState = async () => {
        try {
            setLoading(true);
            const result = await getAllProductTransaktion();
            setPilihProduct(result.data);
            setAuth(true);
            console.log(pilihProduct)
        } catch (e) {
            console.log(e);
            setError(e.response.data.error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fecthProductsState();
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

    return (
        <>
            <div>
                <FilterProdukAddTransaksi searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
                <div className="mt-4">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-xl">Memuat...</p>
                        </div>
                    ) : isAuth ? (
                        <div>
                            <div className="h-[450px] overflow-auto">
                                <table className="w-[400px] bg-white table-fixed">
                                    <thead>
                                    <tr className="text-xs">
                                        <th className="py-2 text-left">Nama Produk</th>
                                        <th className="py-2 text-center">Harga</th>
                                        <th className="py-2 text-center">Stok</th>
                                        <th className="py-2 text-center">Jumlah</th>
                                        <th className="py-2 text-center">Pilih</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {filteredProduct.map((product) => (
                                        <tr key={product.id} className="border-b text-xs">
                                            <td className="py-1 px-4 text-left">
                                                {product.name.split(" ").length > 2
                                                    ? `${product.name.split(" ").slice(0, 2).join(" ")}...`
                                                    : product.name}
                                            </td>
                                            <td className="text-center">{product.selling_price}</td>
                                            <td className="text-center">{product.quantity}</td>
                                            <td className="text-center">
                                                <button type="button" onClick={() => decrementCount(product.id)}
                                                        className="px-2 border rounded">-
                                                </button>
                                                <span className="mx-2">{counts[product.id]}</span>
                                                <button type="button" onClick={() => incrementCount(product.id)}
                                                        className="px-2 border rounded">+
                                                </button>
                                            </td>
                                            <td className="py-2 px-4 text-center">
                                                <button type="button" onClick={() => toggleChecklist(product.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                         fill="currentColor"
                                                         className={`w-6 h-6 ${checklist[product.id] ? 'text-green-500' : 'text-gray-500'}`}>
                                                        <path fillRule="evenodd"
                                                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <button
                                className="flex px-6 py-2 bg-[#1A4F8B] group rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2 mt-3 absolute"
                                onClick={handleSelect} type={"button"}
                            >
                                <span
                                    className="text-white font-medium text-xs group-hover:text-[#1A4F8B]">Pilih Produk</span>
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-xl">{error}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

ProductSelectionTable.propTypes = {
    onProductSelect: PropTypes.func,
};
