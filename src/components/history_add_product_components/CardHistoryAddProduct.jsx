import PropTypes from "prop-types";

export function CardHistoryAddProduct({addProductHistory}) {
    return (
        <>
            {addProductHistory.map((entry, index) => (
                <div className="bg-white w-85 py-3 px-2 rounded-[8px] h-48 shadow-md" key={`${entry.id}-${index}`}>
                    <div className="flex mb-5 ml-4 mr-4 justify-between items-center">
                        <p className=" font-semibold  text-[20px] text-blue-gray-600">Riwayat Tambah Produk</p>
                        <p className="text-[12px] font-normal text-blue-gray-300 ">{entry.date}</p>
                    </div>

                    <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative ml-4 mr-4">
                        <p className="text-[13px] text-blue-gray-500">Nama Produk</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] text-[13px] absolute left-32">{entry.name}</p>
                    </div>

                    <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative mt-3 ml-4 mr-4">
                        <p className="text-[13px]  text-blue-gray-500">Harga Beli</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] text-[13px] absolute left-32">Rp {entry.purchase_price} total</p>
                    </div>

                    <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative mt-3 ml-4 mr-4">
                        <p className="text-[13px]  text-blue-gray-500">Harga Jual</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] text-[13px] absolute left-32">Rp {entry.selling_price} / pcs/kg</p>
                    </div>

                    <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative mt-3 ml-4 mr-4">
                        <p className="text-[13px]  text-blue-gray-500">Stock Produk</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] text-[13px] absolute left-32">{entry.quantity}(Stok saat
                            ditambahkan)</p>
                    </div>
                </div>
            ))}
        </>
    )
}

CardHistoryAddProduct.propTypes = {
    addProductHistory: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            date: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            purchase_price: PropTypes.number.isRequired,
            selling_price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
};