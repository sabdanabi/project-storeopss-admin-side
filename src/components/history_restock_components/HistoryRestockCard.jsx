import PropTypes from "prop-types";
import {useState} from "react";

export function HistoryRestockCard({ restockHistory, pagination }) {
    const [selectedEntry, setSelectedEntry] = useState(null);
    const { current_page, per_page } = pagination || {};

    const handleDetailClick = (entry) => {
        setSelectedEntry(entry);
    };

    const handleCloseModal = () => {
        setSelectedEntry(null);
    };

    return (
        <>
            <table className="w-full h-12">
                <thead className="h-12 border-b-2">
                    <tr className="text-sm text-[#9CA4AE]">
                        <td className="px-4">No</td>
                        <td className="px-4">Nama Produk</td>
                        <td className="px-4">Tanggal</td>
                        <td className="px-4">Pemasok</td>
                        <td className="px-4">Jumlah</td>
                        <td className="px-4">Aksi</td>
                    </tr>
                </thead>
                <tbody className="font-semibold text-blue-gray-700">
                    {restockHistory.map((entry, index) => (
                        <tr className="border-b-2 h-18" key={`${entry.id}-${index}`}>
                            <td className="px-4">{(current_page - 1) * per_page + index + 1}</td>
                            <td className="py-2 px-4 border-b">{entry.product.name}</td>
                            <td className="py-2 px-4 border-b">{entry.date}</td>         
                            <td className="py-2 px-4 border-b">{entry.supplier.name}</td>          
                            <td className="py-2 px-4 border-b">{entry.product.new_quantity} pcs/kg</td>                        
                            <td className="py-2 px-4 border-b">
                                <button
                                    className="text-[10px] hover:bg-[#d7e0e8] text-blue-gray-500 bg-[#dde6efc6] h-[33px] w-[68px] rounded-lg font-semibold"
                                    onClick={() => handleDetailClick(entry)}
                                >
                                    Detail
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedEntry && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded-lg max-w-lg w-full">
                        <div className="flex justify-between items-center mb-4">
                            <p className="font-semibold text-[20px] text-blue-gray-600">Detail Restock Produk</p>
                            <button
                                className="text-red-500 font-bold"
                                onClick={handleCloseModal}
                            >
                                X
                            </button>
                        </div>

                        <div className="bg-white w-85 py-3 px-2 rounded-[8px] shadow-md">
                            <div className="flex justify-between items-center mb-4">
                                <p className="font-semibold ml-4 text-[#8C8BB4] text-[15px]">{selectedEntry.product.name}</p>
                                <p className="text-[12px] font-normal text-blue-gray-300">{selectedEntry.date}</p>
                            </div>

                            <div className="flex text-xs font-medium text-[#403E8A] mb-2 mt-3 ml-4 mr-4">
                                <p className="text-[13px] w-[130px] text-blue-gray-500">Pemasok</p>
                                <p className="">:</p>
                                <p className="font-semibold text-[#8C8BB4] ml-5 text-[13px]">{selectedEntry.supplier.name}</p>
                            </div>

                            <div className="flex text-xs font-medium text-[#403E8A] mb-2  mt-3 ml-4 mr-4">
                                <p className="text-[13px] w-[130px] text-blue-gray-500">Alamat</p>
                                <p className="">:</p>
                                <p className="font-semibold text-[#8C8BB4] text-[13px] ml-5 ">{selectedEntry.destination_address}</p>
                            </div>

                            <div className="flex text-xs font-medium text-[#403E8A] mb-2 mt-3 ml-4 mr-4">
                                <p className="text-[13px] w-[130px] text-blue-gray-500">Kontak</p>
                                <p className="">:</p>
                                <p className="font-semibold text-[#8C8BB4] text-[13px] ml-5 ">{selectedEntry.supplier.phone}</p>
                            </div>

                            <div className="flex text-xs font-medium text-[#403E8A] mb-2 mt-3 ml-4 mr-4">
                                <p className="text-[13px] w-[130px] text-blue-gray-500">Metode Pembayaran</p>
                                <p className="">:</p>
                                <p className="font-semibold text-[#8C8BB4] text-[13px] ml-5 ">{selectedEntry.payment_method}</p>
                            </div>

                            <p className="font-medium text-[16px] ml-4 mt-5 text-blue-gray-700">Informasi Produk</p>

                            <div className="flex text-xs font-medium text-[#403E8A] mb-2 mt-3 ml-4 mr-4">
                                <p className="text-[13px] w-[130px] text-blue-gray-500">Produk</p>
                                <p className="">:</p>
                                <p className="font-semibold text-[#8C8BB4] text-[13px] ml-5 ">{selectedEntry.product.name}</p>
                            </div>

                            <div className="flex text-xs font-medium text-[#403E8A] mb-2 mt-3 ml-4 mr-4">
                                <p className="text-[13px]  w-[130px] text-blue-gray-500">Jumlah</p>
                                <p className="">:</p>
                                <p className="font-semibold text-[#8C8BB4] text-[13px] ml-5 ">{selectedEntry.product.new_quantity} pcs/kg</p>
                            </div>

                            <div className="flex text-xs font-medium text-[#403E8A] mb-2 mt-3 ml-4 mr-4">
                                <p className="text-[13px] w-[130px] text-blue-gray-500">Harga</p>
                                <p className="">:</p>
                                <p className="font-semibold text-[#8C8BB4] text-[13px] ml-5 ">{(selectedEntry.product.total_puchase_price).toLocaleString('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR'
                                })}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

HistoryRestockCard.propTypes = {
    restockHistory: PropTypes.array.isRequired,
    pagination: PropTypes.shape({
        current_page: PropTypes.number.isRequired,
        last_page: PropTypes.number.isRequired,
        links: PropTypes.arrayOf(
            PropTypes.shape({
                url: PropTypes.string,
                label: PropTypes.string.isRequired,
                active: PropTypes.bool.isRequired,
            })
        ).isRequired,
    }).isRequired,
};
