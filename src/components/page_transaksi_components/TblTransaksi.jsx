import DescPageComponent from "../components_reused/DescPageComponent.jsx";
import FilterTransaksiComponents from "./filter_components/FilterTransaksiComponents.jsx";
import PropTypes from "prop-types";
import { BtnNotaTransaksi } from "./button/BtnNotaTransaksi.jsx";
import { BtnEditTransaksi } from "./button/BtnEditTransaksi.jsx";
import { Spinner } from "@chakra-ui/react";

export default function TblTransaksi({ handleSearchChange, searchQuery, filteredTransaksi, updateProductsState, handleStatusFilterChange,
                                     pagination, isLoading, isAuth, error }) {
    const { current_page, per_page } = pagination || {};

    return (
        <main className="flex-1 pt-5 px-10">
            <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200" >
                <DescPageComponent desc={"Selamat datang di admin dashboard Anda."} />
                <FilterTransaksiComponents handleSearchChange={handleSearchChange} searchQuery={searchQuery}
                                           handleStatusFilterChange={handleStatusFilterChange} />

                <div className="bg-white border-b-[3px] border-gray-200 overflow-y-auto ">
                    {isLoading ? (
                        <div className="flex items-center justify-center h-full">
                            <Spinner
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            />
                        </div>
                    ) : isAuth ? (
                        filteredTransaksi.length > 0 ? (
                            <table className="w-full h-12">
                                <thead className="h-10 border-b-2">
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
                                <tbody className="font-semibold text-[15px]">
                                    {filteredTransaksi.map((transaction, index) => (
                                        <tr className="border-b-2 h-10" key={transaction.id}>
                                            <td className="px-4"><p className="mr-3 text-blue-gray-700">{(current_page - 1) * per_page + index + 1}</p></td>
                                            <td>
                                                <div className="flex py-3">
                                                    <p className="mr-24 text-blue-gray-700">{transaction.customer.name}</p>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td><p className="text-blue-gray-700 lg:text-sm">{transaction.date}</p></td>
                                            <td></td>
                                            <td><p className="text-blue-gray-700 lg:text-sm"> {(transaction.selling_price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p></td>
                                            <td></td>
                                            <td>
                                                <div className={`flex justify-center lg:p-1 rounded ${transaction.status === 'Belum lunas' ? 'bg-[#FFA9B3]' : 'bg-[#BEDBCF]'}`}>
                                                    <p className={`xl:text-sm lg:text-xs ${transaction.status === 'Belum lunas' ? 'text-[#7A3636]' : 'text-[#2B713A]'}`}>
                                                        {transaction.status}
                                                    </p>
                                                </div>
                                            </td>
                                            <td></td>
                                            <td className="flex py-3">
                                                <div className="flex items-center">
                                                    <BtnNotaTransaksi filteredTransaksi={transaction} />
                                                    <div className="ml-5">
                                                        <BtnEditTransaksi transactionId={transaction.id} updateProductsState={updateProductsState} />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <div className="flex-col items-center justify-center">
                                <img src="/assets_img/notfound_transaction_img.png" className="m-auto mt-10 w-[200px]" />
                                <p className="text-[22px] text-center font-medium mt-6 text-blue-gray-600 ">Transaksi tidak ditemukan</p>
                                <p className="text-[18px] text-center font-normal mt-4 mb-10 text-blue-gray-200 ">
                                    Tidak dapat menemukan transaksi <span className="font-semibold text-blue-gray-600">{searchQuery}</span>
                                </p>
                            </div>
                        )
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-xl">{error}</p>
                        </div>
                    )}
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
    handleStatusFilterChange: PropTypes.func.isRequired,
    pagination: PropTypes.shape({
        current_page: PropTypes.number,
        per_page: PropTypes.number
    }),
    isLoading: PropTypes.bool.isRequired,
    isAuth: PropTypes.bool.isRequired,
    error: PropTypes.string,
};
