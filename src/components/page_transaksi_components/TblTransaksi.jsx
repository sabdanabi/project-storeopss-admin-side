import DescPageComponent from "../components_reused/DescPageComponent.jsx";
import FilterComponents from "./FilterComponents.jsx";

export default function TblTransaksi({updateProductState, transaksi}) {
    return (
        <main className="flex-1 p-10 overflow-y-auto">
            <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                <DescPageComponent desc={"Selamat datang di admin dashboard Anda."}/>
                <FilterComponents/>
                <div className="bg-white
                                border-b-[3px] border-gray-200 h-[420px] overflow-auto">
                    <table className="w-full h-12">
                        <thead className="h-12 border-b-2">
                        <tr className="text-sm text-[#9CA4AE]">
                            <td className="px-4">No</td>
                            <td>Produk</td>
                            <td><img src="/assets_img/icon_row_table.png" className="mx-3" alt="sdf"/></td>
                            <td>Tanggal</td>
                            <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sdf"/></td>
                            <td>Total Harga</td>
                            <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sdf"/></td>
                            <td>Status</td>
                            <td><img src="/assets_img/icon_row_table.png" className="mr-5" alt="sdf"/></td>
                            <td>Action</td>
                        </tr>
                        </thead>
                        <tbody className="font-semibold ">
                        {transaksi.map((transaction, index) => (
                            <tr className=" border-b-2" key={transaction.id}>
                                <td className="px-4"><p className="mr-3">{index + 1}</p></td>
                                <td>
                                    <div className="flex py-3">
                                        {/*<img src="/assets_img/img_kayu.png" className="h-12 mr-3" alt="product "/>*/}
                                        <p className="mr-24">{transaction.customer.name}</p>
                                    </div>
                                </td>
                                <td></td>
                                <td>{transaction.date}</td>
                                <td></td>
                                <td>Rp30.000/pcs</td>
                                <td></td>
                                <td>
                                    <div className="bg-[#BEDBCF] flex justify-center py-1 rounded">
                                        <p className="text-[#2B713A] text-sm">{transaction.status}</p>
                                    </div>
                                </td>
                                <td></td>
                                <td>
                                    <div className="flex gap-4">
                                        <button className="text-[10px] border-2 border-[#2F5F94]
                                h-[33px] w-[68px] rounded-lg font-semibold ">Detail
                                        </button>
                                        <button className="text-[10px] border-2 border-[#2F5F94]
                                h-[33px] w-[68px] rounded-lg font-semibold ">Edit
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}