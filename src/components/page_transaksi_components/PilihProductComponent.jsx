import { useState } from "react";

export function PilihProductComponent({ products, error, isLoading, isAuth }) {
    const [counts, setCounts] = useState(products.reduce((acc, product) => {
        acc[product.id] = 0;
        return acc;
    }, {}));

    const [checklist, setChecklist] = useState(products.reduce((acc, product) => {
        acc[product.id] = false;
        return acc;
    }, {}));

    const incrementCount = (id) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [id]: prevCounts[id] + 1
        }));
    };

    const decrementCount = (id) => {
        setCounts((prevCounts) => {
            if (prevCounts[id] > 0) {
                return {
                    ...prevCounts,
                    [id]: prevCounts[id] - 1
                };
            }
            return prevCounts;
        });
    };

    const toggleChecklist = (id) => {
        setChecklist((prevChecklist) => ({
            ...prevChecklist,
            [id]: !prevChecklist[id]
        }));
    };

    const handlePilihClick = () => {
        const selectedProducts = products.filter(product => checklist[product.id])
            .map(product => ({
                ...product,
                count: counts[product.id]
            }));
        onSubmit(selectedProducts);
    };

    return (
        <div>
            <div className="overflow-auto h-64">
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-xl">Loading...</p>
                    </div>
                ) : isAuth ? (
                    <div>
                        {products.map((product) => (
                            <div className="flex border-2 rounded-lg p-2 gap-5 mt-5 relative"
                                 key={product.id}>
                                <img src="/assets_img/img_kayu.png" alt="img produk" className=""/>
                                <div className="">
                                    <p className="font-semibold">{product.name}</p>
                                    <div className="flex text-xs font-medium text-[#727E91]">
                                        <p className="mr-3">Harga</p>
                                        <p>{product.selling_price}</p>
                                    </div>
                                    <div className="flex font-medium text-[#727E91] text-xs">
                                        <p className="mr-3">Stock</p>
                                        <p>{product.quantity}</p>
                                    </div>
                                </div>
                                <div className="absolute left-60 top-8">
                                    <button onClick={() => decrementCount(product.id)}
                                            className="px-2 border rounded">-
                                    </button>
                                    <span className="mx-4">{counts[product.id]}</span>
                                    <button onClick={() => incrementCount(product.id)}
                                            className="px-2 border rounded">+
                                    </button>
                                </div>
                                <button
                                    className="absolute left-[350px] top-8"
                                    onClick={() => toggleChecklist(product.id)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                         fill="currentColor"
                                         className={`size-6 ${checklist[product.id] ? 'text-green-500' : 'text-gray-500'}`}>
                                        <path fillRule="evenodd"
                                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                              clipRule="evenodd"/>
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

            <button className="flex ml-36 px-7 py-2 bg-[#1A4F8B] group mt-10
                               rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                <span className="text-white font-medium text-sm group-hover:text-[#1A4F8B]">Pilih</span>
            </button>
        </div>
    );
}
