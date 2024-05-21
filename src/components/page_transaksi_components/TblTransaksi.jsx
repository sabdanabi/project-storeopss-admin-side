import DescPageComponent from "../components_reused/DescPageComponent.jsx";
import FilterComponents from "./FilterComponents.jsx";

export default function TblTransaksi() {
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
                        <tr className=" border-b-2">
                            <td className="px-4"><p className="mr-3">1</p></td>
                            <td>
                                <div className="flex py-3">
                                    <img src="/assets_img/img_kayu.png" className="h-12 mr-3" alt=""/>
                                    <p className="mr-24">Kayu</p>
                                </div>
                            </td>
                            <td></td>
                            <td>Rp1000.000</td>
                            <td></td>
                            <td>Rp30.000/pcs</td>
                            <td></td>
                            <td>
                                <div className="bg-[#BEDBCF] flex justify-center py-1 rounded">
                                    <p className="text-[#2B713A] text-sm">Lunas</p>
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
                        <tr className=" border-b-2">
                            <td className="px-4"><p className="mr-3">1</p></td>
                            <td>
                                <div className="flex py-3">
                                    <img src="/assets_img/img_kayu.png" className="h-12 mr-3" alt=""/>
                                    <p className="mr-24">Kayu</p>
                                </div>
                            </td>
                            <td></td>
                            <td>Rp1000.000</td>
                            <td></td>
                            <td>Rp30.000/pcs</td>
                            <td></td>
                            <td>
                                <div className="bg-[#BEDBCF] flex justify-center py-1 rounded">
                                    <p className="text-[#2B713A] text-sm">Lunas</p>
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
                        <tr className=" border-b-2">
                            <td className="px-4"><p className="mr-3">1</p></td>
                            <td>
                                <div className="flex py-3">
                                    <img src="/assets_img/img_kayu.png" className="h-12 mr-3" alt=""/>
                                    <p className="mr-24">Kayu</p>
                                </div>
                            </td>
                            <td></td>
                            <td>Rp1000.000</td>
                            <td></td>
                            <td>Rp30.000/pcs</td>
                            <td></td>
                            <td>
                                <div className="bg-[#ECD69D] flex justify-center py-1 rounded">
                                    <p className="text-[#715C24] text-sm">Lunas</p>
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
                        <tr className=" border-b-2">
                            <td className="px-4"><p className="mr-3">1</p></td>
                            <td>
                                <div className="flex py-3">
                                    <img src="/assets_img/img_kayu.png" className="h-12 mr-3" alt=""/>
                                    <p className="mr-24">Kayu</p>
                                </div>
                            </td>
                            <td></td>
                            <td>Rp1000.000</td>
                            <td></td>
                            <td>Rp30.000/pcs</td>
                            <td></td>
                            <td>
                                <div className="bg-[#FFA9B3] flex justify-center py-1 rounded">
                                    <p className="text-[#7A3636] text-sm">Belum Lunas</p>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    )
}