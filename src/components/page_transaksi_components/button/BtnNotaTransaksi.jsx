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
            jsPDF: { unit: 'mm', format: [80, 297], orientation: 'portrait' } // Format 80mm x 297mm
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

                        <div className="flex justify-center p-3">
                            <div id="notaTransaksi" className="bg-white w-96 py-2 px-1 rounded drop-shadow-lg">
                                <div className="flex mb-10 w-full relative">
                                    <p className="mr-32 font-semibold text-black">
                                        Adel Jaya
                                    </p>
                                </div>
                                <div className="flex text-[11px] font-medium text-black mb-2 relative">
                                    <p>Tanggal</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-black absolute left-32">
                                        {filteredTransaksi.date}
                                    </p>
                                </div>
                                <div className="flex text-[11px] font-medium text-black mb-2 relative">
                                    <p>Status</p>
                                    <p className="absolute left-28">:</p>
                                    <div className={`flex justify-center p-1 px-4 rounded absolute left-32 
                                        ${filteredTransaksi.status === 'Belum lunas' ? 'bg-[#FFA9B3]' : 'bg-[#BEDBCF]'}`}>
                                        <p className={`text-sm ${filteredTransaksi.status === 'Belum lunas' ? 'text-black' : 'text-black'}`}>
                                            {filteredTransaksi.status}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex text-[11px] font-medium ttext-black mb-5 relative mt-5">
                                    <p>Pelanggan</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-black absolute left-32">
                                        {filteredTransaksi.customer ? filteredTransaksi.customer.name : '-'}
                                    </p>
                                </div>
                                <div className="flex text-[11px] font-medium text-black mb-2 relative">
                                    <p>Metode Pembayaran</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-black absolute left-32">
                                        {filteredTransaksi.payment_method ? filteredTransaksi.payment_method : '-'}
                                    </p>
                                </div>
                                <div className="flex text-[11px] font-medium text-black mb-2 relative">
                                    <p>Catatan</p>
                                    <p className="absolute left-28">:</p>
                                    <p className="font-semibold text-black absolute left-32">
                                        {filteredTransaksi.additional_cost ? filteredTransaksi.additional_cost : '-'}
                                    </p>
                                </div>
                                <div>
                                    <div className="flex text-xs bg-[#EEEEEE] py-4 px-6 font-semibold">
                                        <p>Produk</p>
                                        <p className="mx-14">Jumlah</p>
                                        <p className="mr-14">Harga</p>
                                        <p>Subtotal</p>
                                    </div>
                                    {filteredTransaksi.products.map((product, index) => (
                                        <div key={index} className="text-xs py-4 px-6">
                                            <ul className="flex">
                                                <li>{product.name}</li>
                                                <li className="mx-16">{product.quantity}</li>
                                                <li className="mr-10">Rp{product.price}</li>
                                                <li>Rp{product.quantity * product.price}</li>
                                            </ul>
                                        </div>
                                    ))}
                                    <hr className="my-1 border-t-1 border-black mb-3" />
                                    <div className="flex text-xs bg-[#BEDBCF] w-36 ml-56 py-3 px-3">
                                        <p className="mr-10">Total</p>
                                        <p>Rp{calculateTotal(filteredTransaksi.products)}</p>
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

