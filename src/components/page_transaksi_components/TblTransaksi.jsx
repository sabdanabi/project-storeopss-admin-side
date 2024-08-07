import DescPageComponent from "../components_reused/DescPageComponent.jsx";
import FilterComponents from "./FilterComponents.jsx";
import PropTypes from "prop-types";
import { BtnNotaTransaksi } from "./button/BtnNotaTransaksi.jsx";

export default function TblTransaksi({ handleSearchChange, searchQuery, filteredTransaksi, updateProductsState, handleStatusFilterChange }) {
    return (
        <main className="flex-1 p-10 overflow-y-auto">
            <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                <DescPageComponent desc={"Selamat datang di admin dashboard Anda."} />
                <FilterComponents handleSearchChange={handleSearchChange} searchQuery={searchQuery}
                    handleStatusFilterChange={handleStatusFilterChange} />
                <div className="bg-white border-b-[3px] border-gray-200 overflow-auto">
                    <table className="w-full h-12">
                        <thead className="h-12 border-b-2">
                            <tr className="text-sm text-[#9CA4AE]">
                                <td className="px-4">No</td>
                                <td>Pembeli</td>
                                <td><img src="/assets_img/icon_row_table.png" className="mx-3" alt="sdf" /></td>
                                <td>Tanggal</td>
                                <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sdf" /></td>
                                <td>Total Harga</td>
                                <td><img src="/assets_img/icon_row_table.png" className="mr-3" alt="sdf" /></td>
                                <td>Status</td>
                                <td><img src="/assets_img/icon_row_table.png" className="mr-5" alt="sdf" /></td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody className="font-semibold">
                            {filteredTransaksi.map((transaction, index) => {
                                console.log(transaction.status);
                                const totalHarga = transaction.products.reduce((total, product) => total + (product.price * product.quantity), 0);
                                return (
                                    <tr className="border-b-2 h-18 " key={transaction.id}>
                                        <td className="px-4 "><p className="mr-3 text-blue-gray-700">{index + 1}</p></td>
                                        <td>
                                            <div className="flex py-3">
                                                <p className="mr-24 text-blue-gray-700">{transaction.customer.name}</p>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td><p className=" text-blue-gray-700">{transaction.date}</p>
                                        </td>
                                        <td></td>
                                        <td>
                                            <p key={transaction.id} className="text-blue-gray-700">
                                                {totalHarga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                                            </p>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className={`flex justify-center py-1 rounded ${transaction.status === 'Belum lunas' ? 'bg-[#FFA9B3]' : 'bg-[#BEDBCF]'}`}>
                                                <p className={`text-sm ${transaction.status === 'Belum lunas' ? 'text-[#7A3636]' : 'text-[#2B713A]'}`}>
                                                    {transaction.status}
                                                </p>
                                            </div>
                                        </td>
                                        <td></td>
                                        <td className="flex py-3">
                                            <div className="">
                                                <BtnNotaTransaksi filteredTransaksi={transaction} />
                                                {/* <BtnEditTransaksi transactionId={transaction.id} updateProductsState={updateProductsState} /> */}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

TblTransaksi.propTypes = {
    handleSearchChange: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    filteredTransaksi: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        customer: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired,
        date: PropTypes.string.isRequired,
        selling_price: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
    })).isRequired,
    updateProductsState: PropTypes.func.isRequired,
};
