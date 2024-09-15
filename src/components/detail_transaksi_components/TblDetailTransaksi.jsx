import {Spinner} from "@chakra-ui/react";

export function TblDetailTransaksi() {
    return (
        <div className="bg-white border-b-[3px] border-gray-200 overflow-auto h-80">
                <table className="w-full h-12">
                    <thead className="h-12 border-b-2">
                    <tr className="text-sm text-[#9CA4AE]">
                        <td className="px-4">No</td>
                        <td className="px-4">Produk</td>
                        <td className="px-4">Stok Awal</td>
                        <td className="px-4">Barang Masuk</td>
                        <td className="px-4">Barang Keluar</td>
                        <td className="px-4">Stok Akhir</td>
                        <td className="px-4">Aksi</td>
                    </tr>
                    </thead>
                    <tbody className="text-sm font-semibold text-blue-gray-700">
                        <tr className="border-b-2 h-10 text-xs">
                            <td className="px-4">1</td>
                            <td className="px-4 py-2">test</td>
                            <td className="px-4 py-2">test</td>
                            <td className="px-4 py-2">test</td>
                            <td className="px-4 py-2">test</td>
                            <td className="px-4 py-2">
                                <span className={`text-sm`}>
                                    test
                                </span>
                            </td>
                            <td className="px-4 py-2">
                                <button
                                    className="text-[10px] hover:bg-[#d7e0e8] text-blue-gray-500 bg-[#dde6efc6] h-[33px] w-[68px] rounded-lg font-semibold"
                                >
                                    Detail
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
    )
}