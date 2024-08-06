import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import html2pdf from 'html2pdf.js';

export function BtnNotaTransaksi({ filteredTransaksi }) {
    function calculateTotal(products) {
        return products.reduce((total, product) => total + product.quantity * product.price, 0);
    }

    // const handlePrint = () => {
    //     const element = document.getElementById('notaTransaksi');
    //     const opt = {
    //         margin: 1,
    //         filename: `Nota_${filteredTransaksi.customer ? filteredTransaksi.customer.name : 'unknown'}.pdf`,
    //         image: { type: 'jpeg', quality: 0.98 },
    //         html2canvas: { scale: 2 },
    //         jsPDF: { unit: 'mm', format: [80, 297], orientation: 'portrait' } // Mengatur ukuran kertas untuk thermal printer 80mm
    //     };
    //     html2pdf().from(element).set(opt).save();
    // };

    // const handlePrint = () => {
    //     const printContents = document.getElementById('notaTransaksi').innerHTML;
    //     const originalContents = document.body.innerHTML;
    //     document.body.innerHTML = printContents;
    //     window.print();
    //     document.body.innerHTML = originalContents;
    //     window.location.reload(); // reload halaman setelah cetak untuk memastikan komponen React dimuat ulang
    // };


    const handlePrintPDF = () => {
        const element = document.getElementById('notaTransaksi');
        const opt = {
            margin: [0, 0, 0, 0], // Margin PDF
            filename: 'nota-transaksi.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: [80, 100], orientation: 'portrait' } // Format 80mm x 297mm
        };
        html2pdf().set(opt).from(element).save();
    };


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
                    <div
                        className="bg-white rounded-xl shadow p-5 transition-all max-w-[750px] max-h-[610px] overflow-auto">
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
                            <div id={"notaTransaksi"}
                                 className="bg-white w-72 py-2 px-1 rounded-[10px] shadow-md">
                                <div className="flex ml-4 mr-5 mt-3 justify-between items-center">
                                    <p className="font-semibold text-[17px] text-blue-gray-700">Toko Adel Jaya</p>
                                    <p className="text-[14px] text-[#2B713A] font-semibold">Selesai</p>
                                </div>
                                <div
                                    className="flex flex-col text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
                                    <p className="font-semibold text-blue-gray-700">Resi
                                        kostumer {filteredTransaksi.customer.name}</p>
                                    <p className="font-semibold text-[#8C8BB4] ">{filteredTransaksi.date}</p>
                                </div>
                                <hr className="my-1 mt-5 border-t-2 border-blue-gray-300 mb-1 border-dashed"/>
                                <hr className="my-1 mt-0 border-t-2 border-blue-gray-300 mb-3 border-dashed"/>

                                <div>
                                    {filteredTransaksi.products && filteredTransaksi.products.length > 0 ? filteredTransaksi.products.map((product, index) => (
                                        <div key={index}
                                             className="justify-between flex ml-4 text-[15px] font-medium text-blue-gray-700">
                                            <div className="flex">
                                                <p className="mr-2">x{product.quantity}</p>
                                                <p>{product.name}</p>
                                            </div>
                                            <p className="mr-4">
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
                                    <p className="font-semibold text-blue-gray-900">Total</p>
                                    <p className="text-[15px] font-semibold text-blue-gray-900">
                                        {filteredTransaksi.products ? `${calculateTotal(filteredTransaksi.products).toLocaleString('id-ID', {
                                            style: 'currency',
                                            currency: 'IDR'
                                        })}` : ''}
                                    </p>
                                </div>
                                <hr className="my-1 mt-3 border-t-2 border-blue-gray-300 mb-3 border-dashed"/>
                                <div
                                    className="flex justify-between text-[13px] font-medium text-blue-gray-300 mt-3 relative ml-4 mr-4">
                                    <p className="font-semibold text-blue-gray-700">Metode Pembayaran</p>
                                    <p className="text-[15px] font-semibold text-blue-gray-700">
                                        {filteredTransaksi.payment_method}
                                    </p>
                                </div>
                                <div
                                    className="flex justify-between text-[13px] font-medium text-blue-gray-300 mt-2 relative ml-4 mb-3 mr-4">
                                    <p className="font-semibold text-blue-gray-700">Status</p>
                                    <div className={` 
                                            ${filteredTransaksi.status}`}>
                                        <p className={`text-sm  
                                                ${filteredTransaksi.status === 'Belum lunas' ? 'text-[#7A3636]' : 'text-[#2B713A]'}`}>{filteredTransaksi.status}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button onClick={handlePrintPDF}
                                className="flex items-center px-7 py-2 bg-[#1A4F8B] ml-40 rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
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
            name: PropTypes.string,
        }),
        date: PropTypes.string,
        status: PropTypes.string,
        payment_method: PropTypes.string,
        additional_cost: PropTypes.number,
        products: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                quantity: PropTypes.number,
                price: PropTypes.number,
            })
        ).isRequired,
    }).isRequired,
};

