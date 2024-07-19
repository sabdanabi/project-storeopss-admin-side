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

export function HistoryRestockCard({restockHistory}) {
    return (
        <>
            {restockHistory.map((entry) => (
                <div className="bg-white w-96 py-2 px-2 h-96 rounded" key={entry.id}>
                    <div className="flex mb-10 w-full relative">
                        <p className="font-semibold text-[#403E8A]">{entry.product.name}</p>
                        <p className="text-[10px] text-[#8C8BB4] absolute left-[290px] top-1">
                            {entry.date}</p>
                    </div>

                    <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                        <p>Pemasok</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] absolute left-32"> {entry.supplier.name}</p>
                    </div>

                    <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                        <p className="">Alamat</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] absolute left-32">
                            {entry.destination_address}</p>
                    </div>

                    <div className="flex text-[11px] font-medium text-[#403E8A] mb-5 relative">
                        <p className="">Nomor Telpon</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] absolute left-32">
                            {entry.supplier.phone}</p>
                    </div>

                    <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                        <p className="">Metode Pengiriman</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] absolute left-32">{entry.shipping_method}</p>
                    </div>

                    <div className="flex text-[11px] font-medium text-[#403E8A] mb-2 relative">
                        <p className="">Alamat Tujuan</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] absolute left-32">
                            {entry.supplier.address}</p>
                    </div>

                    <div className="flex text-[11px] font-medium text-[#403E8A] mb-5 relative">
                        <p className="">Metode Pembayaran</p>
                        <p className="absolute left-28">:</p>
                        <p className="font-semibold text-[#8C8BB4] absolute left-32">
                            {entry.payment_method}</p>
                    </div>

                    <div>
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
                        <hr className="my-1 border-t-1 border-black mb-3"/>
                        <div className="flex text-xs bg-[#BEDBCF] w-36 ml-56 py-3 px-3">
                            <p className="mr-10">Total</p>
                            <p>Rp{entry.product.total_puchase_price}</p>
                        </div>
                    </div>
                </div>

            ))}
        </>
    )
}

HistoryRestockCard.propTypes = {
    restockHistory: PropTypes.array.isRequired,
};