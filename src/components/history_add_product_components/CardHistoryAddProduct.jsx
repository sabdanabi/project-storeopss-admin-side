import PropTypes from "prop-types";

export function CardHistoryAddProduct({addProductHistory}) {
    return (
        <>
            {addProductHistory.map((entry, index) => (
                <div className="bg-white w-96 py-3 px-3 rounded h-56" key={`${entry.id}-${index}`}>
                    <div className="flex mb-10">
                        <p className="mr-32 font-semibold text-[#403E8A]">Riwayat Tambah Produk</p>
                        <p className="text-[10px] mt-1 text-[#8C8BB4]">{entry.date}</p>
                    </div>

                        <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative ml-4 mr-4">
                            <p className="text-[13px] text-blue-gray-500">Nama Produk</p>
                            <p className="absolute left-28">:</p>
                            <p className="font-semibold text-[#8C8BB4] text-[13px] absolute left-32">{entry.name}</p>
                        </div>
                    <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative mt-3 ml-4 mr-4">
                        <p className="text-[13px]  text-blue-gray-500">Harga Beli</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] text-[13px] absolute left-32">{(entry.purchase_price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })} total</p>
                    </div>

                    <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative mt-3 ml-4 mr-4">
                        <p className="text-[13px]  text-blue-gray-500">Harga Jual</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] text-[13px] absolute left-32">{(entry.selling_price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })} / pcs/kg</p>
                    </div>

                        <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative mt-3 ml-4 mr-4">
                            <p className="text-[13px]  text-blue-gray-500">Stock Produk</p>
                            <p className="absolute left-28">:</p>
                            <p className="font-semibold text-[#8C8BB4] text-[13px] absolute left-32">{entry.quantity}(Stok
                                saat
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