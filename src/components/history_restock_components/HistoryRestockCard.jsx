import PropTypes from "prop-types";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'

export function HistoryRestockCard({ restockHistory }) {
    return (
        <>
            {restockHistory.map((entry) => (
                <div className="bg-white w-85 py-3 px-2 rounded-[8px] shadow-md" key={entry.id}>
                    <div className="flex mb-0 ml-4 mr-4 justify-between items-center">
                        <p className="font-semibold text-[20px] text-blue-gray-600">{entry.product.name}</p>
                        <p className="text-[12px] font-normal text-blue-gray-300 ">
                            {entry.date}</p>
                    </div>

                    <hr className="my-1 mt-5 ml-4 mr-4 border-t-2 border-blue-gray-300 mb-1 border-dashed" />


                    <p className="font-medium text-[16px] ml-4 mt-5 text-blue-gray-700">Informasi Pemasok</p>

                    <div className="flex text-xs font-medium text-[#403E8A] mt-5  mb-2 relative ml-4 mr-4">
                        <p className="text-[13px] text-blue-gray-500 w-[140px]">Pemasok</p>
                        <p className="">:</p>
                        <p className="font-semibold text-[#8C8BB4] ml-3 text-[13px] ">{entry.supplier.name}</p>
                    </div>

                    <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative ml-4 mr-4">
                        <p className="text-[13px] text-blue-gray-500 w-[140px]">Alamat</p>
                        <p className="">:</p>
                        <p className="font-semibold text-[#8C8BB4] ml-3 text-[13px] ">{entry.destination_address}</p>
                    </div>

                    <div className="flex text-xs font-medium text-[#403E8A] mb-2 relative ml-4 mr-4">
                        <p className="text-[13px] text-blue-gray-500 w-[140px]">Kontak</p>
                        <p className="">:</p>
                        <p className="font-semibold text-[#8C8BB4] ml-3 text-[13px]">{entry.supplier.phone}</p>
                    </div>


                    {/*<div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">*/}
                    {/*    <p className="">Metode Pengiriman</p>*/}
                    {/*    <p className="absolute left-28">:</p>*/}
                    {/*    <p className="font-semibold text-[#8C8BB4] absolute left-32">{entry.shipping_method}</p>*/}
                    {/*</div>*/}

                    {/*<div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">*/}
                    {/*    <p className="">Alamat Tujuan</p>*/}
                    {/*    <p className="absolute left-28">:</p>*/}
                    {/*    <p className="font-semibold text-[#8C8BB4] absolute left-32">*/}
                    {/*        {entry.supplier.address}</p>*/}
                    {/*</div>*/}

                    <div className="flex text-xs font-medium  text-[#403E8A] mb-2 relative ml-4 mr-4">
                        <p className="text-[13px] text-blue-gray-500 w-[140px]">Metode Pembayaran</p>
                        <p className="">:</p>
                        <p className="font-semibold text-[#8C8BB4] ml-3 text-[13px]">{entry.payment_method}</p>
                    </div>

                    <p className="font-medium text-[16px] ml-4 mt-5 text-blue-gray-700">Informasi Produk</p>

                    <div className="flex text-xs font-medium  text-[#403E8A] mb-2 relative ml-4 mr-4 mt-5">
                        <p className="text-[13px] text-blue-gray-500 w-[140px]">Produk</p>
                        <p className="">:</p>
                        <p className="font-semibold text-[#8C8BB4] ml-3 text-[13px]">{entry.product.name}</p>
                    </div>
                    <div className="flex text-xs font-medium  text-[#403E8A] mb-2 relative ml-4 mr-4 ">
                        <p className="text-[13px] text-blue-gray-500 w-[140px]">Jumlah</p>
                        <p className="">:</p>
                        <p className="font-semibold text-[#8C8BB4] ml-3 text-[13px]">{entry.product.new_quantity} pcs/kg</p>
                    </div>
                    <div className="flex text-xs  font-medium  text-[#403E8A]  mb-5 relative ml-4 mr-4 ">
                        <p className="text-[13px] text-blue-gray-500 w-[140px]">Harga</p>
                        <p className="">:</p>
                        <p className="font-semibold text-[#8C8BB4] ml-3 text-[13px]"> {(entry.product.total_puchase_price).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
                    </div>

                    {/* <div>
                        <TableContainer>
                            <Table variant='simple' size='sm'>
                                <Thead bgColor={"#eeeeee"}>
                                    <Tr>
                                        <Th>Produk</Th>
                                        <Th>Jumlah</Th>
                                        <Th>Harga</Th>
                                        <Th>Subtotal</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>{entry.product.name}</Td>
                                        <Td>{entry.product.new_quantity}pcs/kg</Td>
                                        <Td>Rp{entry.product.total_puchase_price}</Td>
                                        <Td>Rp{entry.product.total_puchase_price}</Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                        <hr className="my-1 border-t-1 border-black mb-3" />
                        <div className="flex text-xs bg-[#BEDBCF] w-36 ml-56 py-3 px-3">
                            <p className="mr-10">Total</p>
                            <p className="flex-grow">Rp{entry.product.total_puchase_price}</p>
                        </div>
                    </div> */}
                </div>

            ))}
        </>
    )
}

HistoryRestockCard.propTypes = {
    restockHistory: PropTypes.array.isRequired,
};