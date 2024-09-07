import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';

export function BtnNotaTransaksi({ filteredTransaksi }) {
    function calculateTotal(products) {
        return products.reduce((total, product) => total + product.quantity * product.price, 0);
    }

    function printNotaTransaksi() {
        const notaElement = document.getElementById("notaTransaksi");
        if (notaElement) {
            const printWindow = window.open("", "_blank");
            printWindow.document.write(`
                <html>
                    <head> 
                        <style>
                            @media print {
                                body, html {
                                    margin: 0;
                                    padding: 0;
                                    width: 50mm;
                                    height: auto;
                                }
                                .notaTransaksi {
                                    width: 58mm;
                                    margin: 0;
                                    max-height: 100%;
                                    padding: 0;  
                                }
                                .flex {
                                    display: flex;
                                    justify-content: space-between;
                                    align-items: center;
                                }
                                .bold {
                                    font-weight: 400;
                                }
                                * {
                                    box-sizing: border-box;
                                }
                                hr {
                                border: 0;
                                height: 2px; 
                                background: black; 
                                }
                            }
                        </style>
                    </head>
                    <body>
                        ${notaElement.outerHTML}
                    </body>
                </html>
            `);
            printWindow.document.close();
            printWindow.print();

            printWindow.onafterprint = () => {
                window.location.reload();
            };
        } else {
            console.error("Element with ID 'notaTransaksi' not found.");
        }
    }

    return (
        <Popup
            trigger={
                <button className="text-[10px] hover:bg-[#d7e0e8] text-blue-gray-500 bg-[#dde6efc6] h-[33px] w-[68px] rounded-lg font-semibold">
                    Nota
                </button>
            }
            modal
            nested
        >
            {close => (
                <div className="modal">
                    <div className="bg-white rounded-xl shadow p-5 transition-all max-w-[750px] max-h-[610px] overflow-auto">
                        <div className="flex justify-between">
                            <p className="font-semibold text-2xl mb-7">Nota</p>
                            <button onClick={() => close()} className="h-7">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-8 h-8 text-red-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </button>
                        </div>

                        <div className="flex justify-center p-3 w-96">
                            <div id="notaTransaksi"
                                 className="bg-white w-72 py-2 px-1 rounded-[10px] shadow-md notaTransaksi">
                                <div className="flex ml-4 mr-5 mt-3 justify-between items-center">
                                    <p className="font-semibold text-[17px] text-blue-gray-700 bold">Toko Adel Jaya</p>
                                    <p className={`text-[14px] font-semibold ${filteredTransaksi.is_finished ? "text-[#2B713A]" : "text-[#7A3636]"}`}>
                                        {filteredTransaksi.is_finished ? "Selesai" : "Belum selesai"}
                                    </p>
                                </div>
                                <div
                                    className="text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
                                    <p className="font-semibold text-blue-gray-700 bold">{filteredTransaksi.invoice}</p>
                                    <p className="font-semibold text-blue-gray-700 bold">Resi
                                        kostumer {filteredTransaksi.customer.name}</p>
                                    <p className="font-semibold text-[#8C8BB4] bold">{filteredTransaksi.date}</p>
                                </div>
                                <hr className="my-1 mt-5 border-t-2 border-blue-gray-300 mb-1 border-dashed"/>
                                <hr className="my-1 mt-0 border-t-2 border-blue-gray-300 mb-3 border-dashed"/>

                                <div>
                                    {filteredTransaksi.products && filteredTransaksi.products.length > 0 ? filteredTransaksi.products.map((product, index) => (
                                        <div key={index}
                                             className="justify-between flex ml-4 text-[15px] font-medium text-blue-gray-700">
                                            <div className="flex gap-2">
                                                <p className="mr-3 bold">x</p>
                                                <p className="mr-2 bold">{product.quantity}</p>
                                                <p className="bold">{product.name}</p>
                                            </div>
                                            <p className="mr-4 bold">
                                                {(product.price * product.quantity).toLocaleString('id-ID', {
                                                    style: 'currency',
                                                    currency: 'IDR'
                                                })}
                                            </p>
                                        </div>
                                    )) : (
                                        <div className="text-xs py-4 px-6">
                                            <p>Produk tidak tersedia</p>
                                        </div>
                                    )}
                                </div>
                                <hr className="my-1 mt-3 border-t-2 border-blue-gray-300 mb-3 border-dashed"/>
                                <div
                                    className="flex justify-between text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
                                    <p className="font-semibold text-blue-gray-900 bold">Total</p>
                                    <p className="text-[15px] font-semibold text-blue-gray-900 bold">
                                        {filteredTransaksi.products ? `${calculateTotal(filteredTransaksi.products).toLocaleString('id-ID', {
                                            style: 'currency',
                                            currency: 'IDR'
                                        })}` : ''}
                                    </p>
                                </div>
                                <hr className="my-1 mt-3 border-t-2 border-blue-gray-300 mb-3 border-dashed"/>
                                <div
                                    className="flex justify-between text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
                                    <p className="font-semibold text-blue-gray-700 bold">Metode Pembayaran</p>
                                    <p className="text-[15px] font-semibold text-blue-gray-700 bold">
                                        {filteredTransaksi.payment_method}
                                    </p>
                                </div>
                                <div
                                    className="flex justify-between text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
                                    <p className="font-semibold text-blue-gray-700 bold">Opsi Pengambilan</p>
                                    <p className="text-[15px] font-semibold text-blue-gray-700 bold">
                                        {filteredTransaksi.products[0].option}
                                    </p>
                                </div>
                                <div id="status"
                                     className="flex justify-between text-[13px] font-medium text-blue-gray-300 mt-2 relative ml-4 mb-3 mr-4">
                                    <p className="font-semibold text-blue-gray-700 bold">Status Transaksi</p>
                                    <div className={` 
                                            ${filteredTransaksi.status}`}>
                                        <p className={`text-sm  
                                                ${filteredTransaksi.status === 'Belum lunas' ? 'text-[#7A3636]' : 'text-[#2B713A]'} bold`}>{filteredTransaksi.status}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => printNotaTransaksi(close)}
                                className="flex items-center px-7 py-2 bg-[#1A4F8B] group ml-40 rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                            <span className="text-white font-medium text-sm group-hover:text-[#1A4F8B]">Cetak</span>
                        </button>
                    </div>
                </div>
            )}
        </Popup>
    );
}

BtnNotaTransaksi.propTypes = {
    filteredTransaksi: PropTypes.shape({
        customer: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }).isRequired,
        date: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        payment_method: PropTypes.string.isRequired,
        additional_cost: PropTypes.number,
        is_finished: PropTypes.bool.isRequired, // Added validation for is_finished
        invoice: PropTypes.string.isRequired, // Added validation for invoice
        products: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                quantity: PropTypes.number.isRequired,
                price: PropTypes.number.isRequired,
                option: PropTypes.string.isRequired,
            }).isRequired
        ).isRequired,
    }).isRequired,
};
