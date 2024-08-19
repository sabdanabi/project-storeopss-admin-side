import Popup from "reactjs-popup";
import { getAllProduct } from "../../../services/StockService.jsx";
import {useEffect, useState} from "react";
import {FilterAddTransaksi} from "../FilterAddTransaksi.jsx";

export function BtnPilihProduk({ onProductSelect}) {
    const [isInnerPopupOpen, setInnerPopupOpen] = useState(false);
    const [pilihProduct, setPilihProduct] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [warning, setWarning] = useState("");
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
        const selectedProducts = pilihProduct.filter((product) => checklist[product.id]).map((product) => ({
            ...product,
            count: counts[product.id] || 0
        }));
        onProductSelect(selectedProducts);
        closeInnerPopup();
    };

    const openInnerPopup = () => {
        setWarning("");
        setInnerPopupOpen(true);
    };
    const closeInnerPopup = () => setInnerPopupOpen(false);

    const updateProductsState = async () => {
        try {
            setLoading(true);
            const result = await getAllProduct();
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

    return (
        <div>
            <button onClick={openInnerPopup} type={"button"} className="border-2 text-[#8C95A4] text-center p-2 text-xs rounded-lg">
                Pilih Produk
            </button>
            <Popup open={isInnerPopupOpen} closeOnDocumentClick onClose={closeInnerPopup} modal>
                {innerClose => (
                    <div className="modal">
                        <div className="fixed inset-0 flex justify-center items-center h-screen bg-black/40">
                            <div className="bg-white rounded-xl shadow p-5 transition-all w-[450px] h-[470px]">
                                <div className="flex justify-between">
                                    <p className="font-semibold text-2xl mb-7">Pilih Produk</p>
                                    <button onClick={innerClose} className="h-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-600">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg>
                                    </button>
                                </div>

                                <FilterAddTransaksi searchQuery={searchQuery} handleSearchChange={handleSearchChange}/>
                                <div>
                                    <div className="overflow-auto h-64">
                                        {isLoading ? (
                                            <div className="flex items-center justify-center h-full">
                                                <p className="text-xl">Memuat...</p>
                                            </div>
                                        ) : isAuth ? (
                                            <div>
                                                {filteredProduct.map((product) => (
                                                    <div className="flex border-2 rounded-lg p-2 gap-5 mt-5 relative" key={product.id}>
                                                        {/*<img src={product.image ? product.image : "/assets_img/placeholder_image.jpg"} className="h-10 mt-2" alt="img produk"/>*/}
                                                        <div className="">
                                                            <p className="font-semibold">{product.name}</p>
                                                            <div className="flex text-xs font-medium text-[#727E91]">
                                                                <p className="mr-3">Harga</p>
                                                                <p>{product.selling_price}</p>
                                                            </div>
                                                            <div className="flex font-medium text-[#727E91] text-xs">
                                                                <p className="mr-3">Stok</p>
                                                                <p>{product.quantity}</p>
                                                            </div>
                                                        </div>
                                                        <div className="absolute left-60 top-8">
                                                            <button onClick={() => decrementCount(product.id)} className="px-2 border rounded">-</button>
                                                            <span className="mx-4">{counts[product.id]}</span>
                                                            <button onClick={() => incrementCount(product.id)} className="px-2 border rounded">+</button>
                                                        </div>
                                                        <button className="absolute left-[350px] top-8" onClick={() => toggleChecklist(product.id)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`size-6 ${checklist[product.id] ? 'text-green-500' : 'text-gray-500'}`}>
                                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd"/>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center h-full">
                                                <p className="text-xl">{error}</p>
                                            </div>

                                        )}
                                    </div>
                                    {warning && <div className="text-red-600 mt-4">{warning}</div>}
                                    <button className="flex ml-36 px-7 py-2 bg-[#1A4F8B] group mt-10
                                    rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2" onClick={handleSelect}>
                                        <span className="text-white font-medium text-sm group-hover:text-[#1A4F8B]">Pilih</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    );
}
