import PropTypes from "prop-types";
import { useState } from "react";
import Popup from "reactjs-popup";
import { getRecapProductById } from "../../services/RecapProductService";
import { Spinner } from "@chakra-ui/react";

export default function TblLaporanStock({ products, selectedMonth, selectedYear }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleDetailClick = async (productId) => {
        setIsLoading(true);
        setError('');
        try {
            const productDetail = await getRecapProductById(productId);
            setSelectedProduct(productDetail.data);
        } catch (error) {
            setError("Gagal mengambil data produk.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full">
            {products.length > 0 ? (
                <table className="w-full">
                    <thead className="h-12 border-b-2">
                    <tr className="text-sm text-[#9CA4AE]">
                        <td className="px-4">No</td>
                        <td>Produk</td>
                        <td><img src="/assets_img/icon_row_table.png" className="" alt="sdf" /></td>
                        <td>Stok Awal</td>
                        <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sdf" /></td>
                        <td>Barang Masuk</td>
                        <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sdf" /></td>
                        <td>Barang Keluar</td>
                        <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sdf" /></td>
                        <td>Stok Akhir</td>
                        <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sdf" /></td>
                        <td>Aksi</td>
                    </tr>
                    </thead>
                    <tbody className="font-semibold text-blue-gray-700 text-[15px]">
                    {products.map((product, index) => (
                        <tr className="border-b-2" key={product.id}>
                            <td className="px-4"><p className="mr-3">{index + 1}</p></td>
                            <td>
                                <div className="flex py-3">
                                    <p className="mr-20">{product.name}</p>
                                </div>
                            </td>
                            <td></td>
                            <td>{product.first_quantity}</td>
                            <td></td>
                            <td>{product.incoming_quantity}</td>
                            <td></td>
                            <td>{product.outgoing_quantity}</td>
                            <td></td>
                            <td>{product.last_quantity}</td>
                            <td></td>
                            <td>
                                <button
                                    className="text-[9px] hover:bg-[#d7e0e8] text-blue-gray-500 bg-[#dde6efc6] h-[30px] w-[62px] rounded-lg font-semibold"
                                    onClick={() => handleDetailClick(product.id)}
                                >
                                    Detail
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <div className="flex-col items-center justify-center">
                    <img src="/assets_img/notfound_transaction_img.png" className="m-auto mt-10 w-[150px]" />
                    <p className="text-[22px] text-center font-medium mt-6 text-blue-gray-600">Data tidak ditemukan</p>
                    <p className="text-[18px] text-center font-normal mt-4 mb-10 text-blue-gray-200">
                        Tidak dapat menemukan data untuk <span className="font-semibold text-blue-gray-600">{selectedMonth} {selectedYear}</span>
                    </p>
                </div>
            )}

            <Popup open={!!selectedProduct} onClose={() => setSelectedProduct(null)} modal nested>
                <div className="modal bg-white p-5 px-8 rounded-lg shadow-lg w-[950px] h-[450px]">
                    <div className="flex justify-between">
                        <p className="font-semibold text-lg mb-4">Detail Laporan Stock</p>
                        <button onClick={() => setSelectedProduct(null)} className="h-7 close">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth={1.5} stroke="currentColor"
                                 className="w-8 h-8 text-red-600">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                        </button>
                    </div>
                    {isLoading ? (
                        <div className="flex items-center justify-center h-full w-full">
                            <Spinner
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            />
                        </div>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : selectedProduct ? (
                        <div>
                            <h2 className="text-base font-semibold mb-2">{selectedProduct.name}</h2>
                            <p>Stock Akhir: {selectedProduct.quantity || 'N/A'}</p>
                            <p>Kategori Produk: {selectedProduct.category || 'N/A'}</p>
                            <div className="flex">
                                <div>
                                    <h3 className="mt-4 font-semibold">Transaksi:</h3>
                                    <div className="h-56 overflow-auto w-96">
                                        <table className="w-full">
                                            <thead className="h-10 border-b-2">
                                            <tr className="text-sm text-[#9CA4AE]">
                                                <td>Tanggal Transaksi</td>
                                                <td>Jumlah Produk Transaksi</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {selectedProduct.transactions && selectedProduct.transactions.length > 0 ? (
                                                selectedProduct.transactions.map(trans => (
                                                    <tr key={trans.id} className="border-b-2 text-sm">
                                                        <td className="py-2">{trans.date}</td>
                                                        <td className="pl-16">{trans.quantity}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="2">Tidak ada transaksi</td>
                                                </tr>
                                            )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className=" ml-8">
                                    <h3 className="mt-4 font-semibold">Restok:</h3>
                                    <div className="h-56 overflow-auto w-96">
                                        <table className="w-full">
                                            <thead className="h-10 border-b-2">
                                            <tr className="text-sm text-[#9CA4AE]">
                                                <td>Tanggal Restock</td>
                                                <td>Jumlah Produk Restock</td>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {selectedProduct.restock && selectedProduct.restock.length > 0 ? (
                                                selectedProduct.restock.map(restock => (
                                                    <tr key={restock.id} className="border-b-2 text-sm">
                                                        <td className="py-2">{restock.date}</td>
                                                        <td className="pl-16">{restock.quantity}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="2">Tidak ada restok</td>
                                                </tr>
                                            )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Data produk tidak ditemukan.</p>
                    )}
                </div>
            </Popup>
        </div>
    );
}

TblLaporanStock.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        first_quantity: PropTypes.number.isRequired,
        incoming_quantity: PropTypes.number.isRequired,
        outgoing_quantity: PropTypes.number.isRequired,
        last_quantity: PropTypes.number.isRequired,
    })).isRequired,
};
