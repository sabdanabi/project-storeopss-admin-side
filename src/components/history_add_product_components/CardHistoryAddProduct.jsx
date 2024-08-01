import PropTypes from "prop-types";

export function CardHistoryAddProduct({addProductHistory}) {
    return (
        <>
            {addProductHistory.map((entry, index) => (
                <div className="bg-white w-96 py-3 px-2 rounded h-48" key={`${entry.id}-${index}`}>
                    <div className="flex mb-10">
                        <p className="mr-32 font-semibold text-[#403E8A]">Riwayat Tambah Produk</p>
                        <p className="text-[10px] mt-1 text-[#8C8BB4]">{entry.date}</p>
                    </div>

                    <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                        <p className="text-xs">Nama Produk</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] absolute left-32">{entry.name}</p>
                    </div>

                    <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                        <p className="text-xs">Harga Beli</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp {entry.purchase_price} total</p>
                    </div>

                    <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                        <p className="text-xs">Harga Jual</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] absolute left-32">Rp {entry.selling_price} / pcs/kg</p>
                    </div>

                    <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative">
                        <p className="text-xs">Stock Produk</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] absolute left-32">{entry.quantity}(Stok saat
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