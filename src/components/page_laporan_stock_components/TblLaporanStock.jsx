import PropTypes from "prop-types";
import { useState } from "react";
import Popup from "reactjs-popup";
import { getRecapProductById } from "../../services/RecapProductService";
import { Spinner } from "@chakra-ui/react";

export default function TblLaporanStock({ products, selectedMonth, selectedYear }) {
    const [selectedProduct, setSelectedProduct] = useState(null); // State untuk menyimpan produk yang dipilih
    const [isLoading, setIsLoading] = useState(false); // State untuk mengelola loading di popup
    const [error, setError] = useState(''); // State untuk mengelola error di popup

    // Fungsi untuk menangani klik pada tombol "Detail"
    const handleDetailClick = async (productId) => {
        setIsLoading(true);
        setError(''); // Reset error saat memuat data
        try {
            const productDetail = await getRecapProductById(productId);
            console.log(productDetail.data)
            setSelectedProduct(productDetail.data); // Simpan detail produk yang diambil
        } catch (error) {
            setError("Gagal mengambil data produk."); // Atur pesan error jika gagal
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
                                    {/* <img src={product.image} className="h-12 mr-3" alt=""/> */}
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
                                {/* Tombol Detail untuk membuka popup */}
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
                <div className="modal bg-white p-5 rounded-lg shadow-lg">
                    <button className="close" onClick={() => setSelectedProduct(null)}>&times;</button>
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
                            <h2 className="text-xl font-semibold mb-4">{selectedProduct.name}</h2>
                            <p>Jumlah: {selectedProduct.quantity || 'N/A'} {selectedProduct.unit || 'unit'}</p>
                            <p>Kategori: {selectedProduct.category || 'N/A'}</p>
                            <h3 className="mt-4 font-semibold">Transaksi:</h3>
                            <ul>
                                {selectedProduct.transactions && selectedProduct.transactions.length > 0 ? (
                                    selectedProduct.transactions.map(trans => (
                                        <li key={trans.transactions_id}>
                                            {trans.date}: {trans.quantity} pcs (Invoice: {trans.invoice})
                                        </li>
                                    ))
                                ) : (
                                    <li>Tidak ada transaksi</li>
                                )}
                            </ul>
                            <h3 className="mt-4 font-semibold">Restok:</h3>
                            <ul>
                                {selectedProduct.restock && selectedProduct.restock.length > 0 ? (
                                    selectedProduct.restock.map((restock, index) => (
                                        <li key={index}>
                                            {restock.date}: {restock.quantity} pcs
                                        </li>
                                    ))
                                ) : (
                                    <li>Tidak ada restok</li>
                                )}
                            </ul>
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
