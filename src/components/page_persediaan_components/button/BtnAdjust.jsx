    import Popup from "reactjs-popup";
import { useState } from "react";
import { adjustStock } from "../../../services/StockService.jsx";
import { toast } from "react-toastify";

export function BtnAdjust({ refreshProductss, id }) {
    const [quantity, setQuantity] = useState('');
    const [message, setMessage] = useState(''); // State untuk pesan
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validasi input
        if (quantity <= 0) {
            setError('Jumlah stok harus lebih dari 0.');
            return;
        }

        setLoading(true);
        setError('');

        try {
            await adjustStock(id, { quantity: parseInt(quantity, 10), message }); // Kirim pesan ke API
            toast.success("Stock berhasil disesuaikan!");
            refreshProductss();
            setQuantity(''); // Clear input field setelah submit berhasil
            setMessage(''); // Clear pesan
        } catch (err) {
            setError("Terjadi kesalahan saat menyesuaikan stock.");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Popup trigger={
                <button className="text-[11px] hover:bg-[#d7e0e8] text-blue-gray-500 mr-3 bg-[#dde6efc6] h-[29px] w-[60px] rounded-lg font-medium">
                    Sesuaikan
                </button>
            } modal nested>
                {close => (
                    <div className='modal'>
                        <div className="fixed inset-0 flex justify-center items-center h-screen bg-black/40">
                            <div className="bg-white rounded-xl shadow p-5 transition-all w-[600px] h-[450px]">
                                <div className="flex justify-between">
                                    <p className="font-semibold text-lg mb-7 m-auto">Sesuaikan Produk</p>
                                    <button onClick={() => close()} className="h-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-red-600">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg>
                                    </button>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="text-sm">Sesuaikan Stock</label>
                                        <br/>
                                        <input
                                            type="number"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                            placeholder="Masukkan jumlah stock..."
                                            className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-sm">Pesan</label>
                                        <br/>
                                        <input
                                            type="text"
                                            value={message}
                                            onChange={handleMessageChange}
                                            placeholder="Masukkan pesan..."
                                            className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                                        />
                                    </div>
                                    {error && <p className="text-red-500 text-sm">{error}</p>}
                                    <div className="flex justify-center mt-3">
                                        <button
                                            type="submit"
                                            className={`flex items-center justify-center px-4 py-2 ${loading ? 'bg-gray-400' : 'bg-[#1A4F8B]'} group w-36 rounded-lg shadow-sm`}
                                            disabled={loading}
                                        >
                                            <span className="text-white font-light group-hover:text-[#1A4F8B]">
                                                {loading ? 'Menyimpan...' : 'Simpan'}
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
        </>
    );
}
