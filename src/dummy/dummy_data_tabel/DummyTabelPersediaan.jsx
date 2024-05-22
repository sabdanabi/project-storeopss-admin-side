import BtnRestockProduk from "../../components/page_persediaan_components/BtnRestockProduk.jsx";
import Popup from "reactjs-popup";
import {useState} from "react";

export default function DummyTabelPersediaan() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    const items = ['Pintu', 'Material', 'Prabotan'];

    return (
        <div className="bg-white flex border-b-[3px] border-gray-200 h-[420px] overflow-auto">
            <table className="w-full h-12">
                <thead className="h-12 border-b-2">
                <tr className="text-sm text-[#9CA4AE]">
                    <td className="px-4">No</td>
                    <td>Produk</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mx-3" alt="sort-icon"/></td>
                    <td>Harga Beli</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sort-icon"/></td>
                    <td>Harga Jual</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sort-icon"/></td>
                    <td>Stock</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sort-icon"/></td>
                    <td>Terjual</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mr-5" alt="sort-icon"/></td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody className="font-semibold">
                <tr className="border-b-2">
                    <td className="px-4"><p className="mr-3">1</p></td>
                    <td>
                        <div className="flex py-3">
                            <img src="/assets_img/img_kayu.png" className="h-12 mr-3" alt="product-image"/>
                            <p className="mr-24">Kayu</p>
                        </div>
                    </td>
                    <td></td>
                    <td>Rp1000.000</td>
                    <td></td>
                    <td>Rp30.000/pcs</td>
                    <td></td>
                    <td>100pcs</td>
                    <td></td>
                    <td>90pcs</td>
                    <td></td>
                    <td>
                        <div className="flex gap-2">
                            <BtnRestockProduk/>

                            <Popup trigger={
                                <button
                                    className="text-[10px] border-2 border-[#2F5F94] h-[33px] w-[68px] rounded-lg font-semibold">
                                    Edit Produk
                                </button>
                            } modal nested>
                                {close => (
                                    <div className='modal'>
                                        <div
                                            className="fixed inset-0 flex justify-center items-center h-screen bg-black/40">
                                            <div
                                                className="bg-white rounded-xl shadow p-5 transition-all w-[600px] h-[620px]">
                                                <div className="flex justify-between">
                                                    <p className="font-semibold text-2xl mb-7 m-auto">Restock Produk</p>
                                                    <button onClick={() => close()} className="h-7">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24"
                                                             strokeWidth={1.5} stroke="currentColor"
                                                             className="w-8 h-8 text-red-600">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <form className="w-full">
                                                    <div className="">
                                                        <div className="">
                                                            <div className="mb-4">
                                                                <label className="text-sm">Nama Produk</label>
                                                                <br/>
                                                                <input
                                                                    placeholder="Masukan nama produk..."
                                                                    name="productName"
                                                                    className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                                                />
                                                            </div>

                                                            <div className="mb-4">
                                                                <label className="text-sm">Harga Beli</label>
                                                                <br/>
                                                                <input
                                                                    placeholder="Masukkan harga beli produk...."
                                                                    name="purchasePrice"
                                                                    className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                                                />
                                                            </div>

                                                            <div className="mb-4">
                                                                <label className="text-sm">Harga Jual/pcs/kg</label>
                                                                <br/>
                                                                <input
                                                                    placeholder="Masukkan harga jual produk...."
                                                                    name="sellingPrice"
                                                                    className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                                                />
                                                            </div>

                                                            <div className="mb-4">
                                                                <label className="text-sm">Stock/pcs/kg</label>
                                                                <br/>
                                                                <input
                                                                    placeholder="Masukkan stock produk...."
                                                                    name="stock"
                                                                    className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                                                />
                                                            </div>

                                                            <div className="mb-4">
                                                                <label className="text-sm">Kategori Produk</label>
                                                                <br/>
                                                                <div
                                                                    className="relative inline-block text-left mt-3 w-full">
                                                                    <div>
                                                                        <button
                                                                            type="button"
                                                                            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                                            onClick={toggleDropdown}
                                                                        >
                                                                            {selectedItem || 'Select an option'}
                                                                            <svg
                                                                                className="-mr-1 ml-2 h-5 w-5"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                viewBox="0 0 20 20"
                                                                                fill="currentColor"
                                                                                aria-hidden="true"
                                                                            >
                                                                                <path
                                                                                    fillRule="evenodd"
                                                                                    d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 011.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                                                                                    clipRule="evenodd"
                                                                                />
                                                                            </svg>
                                                                        </button>
                                                                    </div>

                                                                    {isOpen && (
                                                                        <div
                                                                            className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                                            role="menu"
                                                                            aria-orientation="vertical"
                                                                            aria-labelledby="options-menu"
                                                                        >
                                                                            <div className="py-1" role="none">
                                                                                {items.map((item, index) => (
                                                                                    <button
                                                                                        key={index}
                                                                                        className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                                                                                        onClick={() => handleItemClick(item)}
                                                                                    >
                                                                                        {item}
                                                                                    </button>
                                                                                ))}
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                    <div className="flex justify-center mt-3">
                                                        <button className="flex items-center justify-center px-4 py-2 bg-[#1A4F8B] group w-36
                                                                rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                                                                <span
                                                                    className="text-white font-light group-hover:text-[#1A4F8B]">
                                                                    Simpan
                                                                </span>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Popup>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
