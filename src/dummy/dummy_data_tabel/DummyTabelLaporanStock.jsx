export default function DummyTabelLaporanStock({products}) {
    return (
        <div className="bg-white flex
                        border-b-[3px] border-gray-200 overflow-auto h-[420px]">
            <table className="w-full ">
                <thead className="h-12 border-b-2">
                <tr className="text-sm text-[#9CA4AE]">
                    <td className="px-4">No</td>
                    <td>Produk</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mx-3" alt="sdf"/></td>
                    <td>Harga Beli</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sdf"/></td>
                    <td>Harga Jual</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sdf"/></td>
                    <td>Stock</td>
                    <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sdf"/></td>
                    <td>Terjual</td>
                </tr>
                </thead>
                <tbody className="font-semibold">
                {products.map((product, index) => (
                    <tr className=" border-b-2" key={product.id}>
                        <td className="px-4"><p className="mr-3">{index + 1}</p></td>
                        <td>
                            <div className="flex py-3">
                                <img src={product.image} className="h-12 mr-3" alt=""/>
                                <p className="mr-24">{product.name}</p>
                            </div>
                        </td>
                        <td></td>
                        <td>Rp{product.purchase_price}</td>
                        <td></td>
                        <td>Rp{product.selling_price}</td>
                        <td></td>
                        <td>{product.quantity}pcs/kg</td>
                        <td></td>
                        <td>{product.sold}</td>
                        <td></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}