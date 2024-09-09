import PropTypes from "prop-types";

export function CardHistoryAddProduct({ addProductHistory, selectedEntry, current_page,
                                          setSelectedEntry, per_page }) {

    const handleDetailClick = (entry) => {
        setSelectedEntry(entry);
    };

    const handleCloseModal = () => {
        setSelectedEntry(null);
    };

    return (
        <>
            <table className="w-full h-12">
                <thead className="h-10 border-b-2">
                    <tr className="text-sm text-[#9CA4AE]">
                        <td className="px-4">No</td>
                        <td className="px-4">Nama Produk</td>
                        <td className="px-4">Tanggal</td>
                        <td className="px-4">Harga Beli/satuan</td>
                        <td className="px-4">Harga Jual/satuan</td>
                        <td className="px-4">Stok</td>
                        {/*<td className="px-4">Aksi</td>*/}
                    </tr>
                </thead>
                <tbody className="font-semibold text-[15px] text-blue-gray-700">
                    {addProductHistory.map((entry, index) => (
                        <tr className="border-b-2  h-13 text-xs" key={`${entry.id}-${index}`}>
                            <td className="px-4"><p className="mr-3">{(current_page - 1) * per_page + index + 1}</p></td>
                            <td className="py-2 px-4 border-b">{entry.name}</td>
                            <td className="py-2 px-4 border-b">{entry.date}</td>
                            <td className="py-2 px-4 border-b">{(entry.purchase_price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                            <td className="py-2 px-4 border-b">{(entry.selling_price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                            <td className="py-2 px-4 border-b">{entry.quantity}</td>
                            {/*<td className="py-2 px-4 border-b">*/}
                            {/*    <button*/}
                            {/*        className="text-[10px] hover:bg-[#d7e0e8] text-blue-gray-500 bg-[#dde6efc6] h-[33px] w-[68px] rounded-lg font-semibold"*/}
                            {/*        onClick={() => handleDetailClick(entry)}*/}
                            {/*    >*/}
                            {/*        Detail*/}
                            {/*    </button>*/}
                            {/*</td>*/}
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedEntry && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded-lg max-w-lg w-full">
                        <div className="flex justify-between items-center mb-4">
                            <p className="font-semibold text-[20px] text-blue-gray-600">Riwayat Tambah Produk</p>
                            <button
                                className="text-red-500 font-bold"
                                onClick={handleCloseModal}
                            >
                                X
                            </button>
                        </div>

                        <div className="bg-white w-85 py-3 px-2 rounded-[8px] shadow-md">
                            <div className="flex justify-between items-center mb-4">
                                <p className="font-semibold ml-4  text-[#8C8BB4] text-[15px]">{selectedEntry.name}</p>
                                <p className="text-[12px] font-normal text-blue-gray-300">{selectedEntry.date}</p>
                            </div>

                            <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative mt-3 ml-4 mr-4">
                                <p className="text-[13px]  text-blue-gray-500">Harga Beli<span
                                    className="text-xs">/satuan</span></p>
                                <p className="absolute left-28">:</p>
                                <p className="font-semibold text-[#8C8BB4] text-[13px] absolute left-32">Rp {selectedEntry.purchase_price}</p>
                            </div>

                            <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative mt-3 ml-4 mr-4">
                                <p className="text-[13px]  text-blue-gray-500">Harga Jual<span
                                    className="text-xs">/satuan</span></p>
                                <p className="absolute left-28">:</p>
                                <p className="font-semibold text-[#8C8BB4] text-[13px] absolute left-32">Rp {selectedEntry.selling_price}</p>
                            </div>

                            <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative mt-3 ml-4 mr-4">
                                <p className="text-[13px] text-blue-gray-500">Stock Produk</p>
                                <p className="absolute left-28">:</p>
                                <p className="font-semibold text-[#8C8BB4] text-[13px] absolute left-32">{selectedEntry.quantity} (Stok saat ditambahkan)</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

CardHistoryAddProduct.propTypes = {
    addProductHistory: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            date: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            purchase_price: PropTypes.number.isRequired,
            selling_price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    selectedEntry: PropTypes.object,
    current_page: PropTypes.number.isRequired,
    setSelectedEntry: PropTypes.func.isRequired,
    per_page: PropTypes.number.isRequired,
};