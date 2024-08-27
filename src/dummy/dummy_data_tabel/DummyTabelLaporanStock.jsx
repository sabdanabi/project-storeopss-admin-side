import PropTypes from "prop-types";

export default function DummyTabelLaporanStock({products, selectedMonth, selectedYear}) {
    return (
        <div className="w-full">
            {products.length > 0 ? (
                <table className="w-full">
                    <thead className="h-12 border-b-2">
                    <tr className="text-sm text-[#9CA4AE]">
                        <td className="px-4">No</td>
                        <td>Produk</td>
                        <td><img src="/assets_img/icon_row_table.png" className="mx-3" alt="sdf"/></td>
                        <td>Stok Awal</td>
                        <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sdf"/></td>
                        <td>Barang Masuk</td>
                        <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sdf"/></td>
                        <td>Barang Keluar</td>
                        <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sdf"/></td>
                        <td>Stok Akhir</td>
                    </tr>
                    </thead>
                    <tbody className="font-semibold text-blue-gray-700 text-[15px]">
                    {products.map((product, index) => (
                        <tr className=" border-b-2" key={product.id}>
                            <td className="px-4"><p className="mr-3">{index + 1}</p></td>
                            <td>
                                <div className="flex py-3">
                                    {/* <img src={product.image} className="h-12 mr-3" alt=""/> */}
                                    <p className="mr-24">{product.name}</p>
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
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <div className="flex-col items-center justify-center">
                    <img src="/assets_img/notfound_transaction_img.png" className="m-auto mt-10 w-[150px]"/>
                    <p className="text-[22px] text-center font-medium mt-6 text-blue-gray-600 ">Data tidak ditemukan</p>
                    <p className="text-[18px] text-center font-normal mt-4 mb-10 text-blue-gray-200 ">
                        Tidak dapat menemukan data untuk <span
                        className="font-semibold text-blue-gray-600">{selectedMonth} {selectedYear}</span>
                    </p>
                </div>
            )
            }
        </div>
    )
}

DummyTabelLaporanStock.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        products: PropTypes.shape({
            first_quantity: PropTypes.number.isRequired,
            incoming_quantity: PropTypes.number.isRequired,
            outgoing_quantity: PropTypes.number.isRequired,
            last_quantity: PropTypes.number.isRequired,
        })
    })).isRequired,
};
