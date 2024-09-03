import Popup from "reactjs-popup";
import { Radio } from "@material-tailwind/react";
import { useState } from "react";
import { toast} from "react-toastify";
import PropTypes from "prop-types";
import { FaTrash } from "react-icons/fa"
import {ProductSelectionTable} from "../ProductSelectionTable.jsx";
import {Spinner} from "@chakra-ui/react";
import {getAllProductTransaktion} from "../../../services/TransaksiService.jsx";

export default function BtnAddTransaksi({ addIncome, updateProductsState }) {
    const [selectedValueRD1, setSelectedValueRD1] = useState('');
    const [selectedValueRD2, setSelectedValueRD2] = useState('');
    const [selectedValueRD3, setSelectedValueRD3] = useState('');
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pilihProduct, setPilihProduct] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        note: '',
        customer_phone: '',
        customer_name: '',
        status: '',
        payment_method: '',
        option: ''
    });


    const handleRadioChange = (event) => {
        setSelectedValueRD1(event.target.value);
        setFormData({ ...formData, status: event.target.value });
    };

    const handleRadioChangeRD3 = (event) => {
        setSelectedValueRD3(event.target.value);
        setFormData({ ...formData, option: event.target.value === 'Dikirim' ? 2 : 1 });
    };

    const handleRadioChangeRD2 = (event) => {
        setSelectedValueRD2(event.target.value);
        setFormData({ ...formData, payment_method: event.target.value });
    };

    const handleProductSelect = (products) => {
        setSelectedProducts(products);
    };

    const handleDeleteProduct = (productId) => {
        setSelectedProducts(selectedProducts.filter(product => product.id !== productId));
        toast.success("Data berhasil dihapus!");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const productList = selectedProducts.map(product => ({
            id: product.id,
            quantity: product.count,
        }));
        const data = {
            ...formData,
            status: selectedValueRD1,
            payment_method: selectedValueRD2,
            option: selectedValueRD3 === 'Dikirim' ? 2 : 1,
            products: productList,
        };
        try {
            const response = await addIncome(data);
            if (response.message === "Transaksi berhasil dicatat.") {
                toast.success("Transaksi berhasil ditambahkan!");
                resetForm();
                updateProductsState();
            } else {
                toast.error("Gagal menambahkan transaksi.");
            }
        } catch (error) {
            console.error("Terjadi kesalahan saat menambahkan transaksi:", error);
            toast.error("Terjadi kesalahan saat menambahkan transaksi.");
        } finally {
            setLoading(false);
        }

    };

    const fecthProductsState = async () => {
        try {
            setIsLoading(true);
            const result = await getAllProductTransaktion();
            setPilihProduct(result.data);
            setAuth(true);
        } catch (e) {
            console.log(e);
            setError(e.response.data.error);
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            note: '',
            customer_phone: '',
            customer_name: '',
            status: '',
            payment_method: ''
        });
        setSelectedValueRD1('');
        setSelectedValueRD2('');
        setSelectedValueRD3('');
        setSelectedProducts([]);
        fecthProductsState()
    };

    const totalHarga = selectedProducts.reduce((total, product) => total + product.selling_price * product.count, 0);

    return (
        <div className="flex items-center justify-between h-16 border-b-[3px] w-full px-6 py-4 bg-white border-gray-200">
            <div className="flex items-center">
                <h1 className="text-2xl font-semibold text-blue-gray-800">Transaksi</h1>
                <h6 className="text-[15px] font-regular text-gray-500 ml-4 mt-2">Catat penjualan anda dengan mudah</h6>
            </div>
            <Popup
                trigger={
                    <button
                        className="flex items-center px-4 h-[40px] bg-[#1A4F8B] group rounded-[7px] shadow-sm hover:bg-[#1a4f8bcd] ml-15">
                    <span className="text-white font-normal text-[14px] group-hover:text-white"> Tambah Penjualan</span>
                    </button>
                }
                modal nested
            >
                {close => (
                    <div className='modal'>
                        <div className="fixed inset-0 flex justify-center items-center h-screen bg-black/40">
                            <div className="bg-white rounded-xl shadow p-5 transition-all w-[1210px] h-[700px]">
                                <form onSubmit={handleSubmit}>
                                    <div className="flex justify-between">
                                        <p className="font-semibold text-2xl mb-4">Penjualan</p>
                                        <button onClick={() => close()} className="h-7">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor"
                                                 className="w-8 h-8 text-red-600">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <p className="font-medium mb-2 ml-7">Pilih Produk</p>
                                    <div className="flex ml-7">
                                        <ProductSelectionTable onProductSelect={handleProductSelect}
                                                               pilihProduct={pilihProduct} isAuth={isAuth}
                                                               isLoading={isLoading} error={error} fecthProductsState={fecthProductsState}/>
                                        {/*<div className="flex gap-2">*/}
                                        {/*    <BtnPilihProduk onProductSelect={handleProductSelect}/>*/}
                                        {/*</div>*/}
                                        <div className="text-sm">
                                        </div>
                                        <div className="p-5 w-[335px] h-[490px] shadow-xl ml-5 flex flex-col"
                                            style={{
                                                scrollbarWidth: 'thin',
                                                scrollbarColor: '#f0f0f0',
                                            }}
                                        >
                                            <p className="font-normal text-[18px] mb-4">Pesanan</p>
                                            <div
                                                className="mt-2 space-y-2 flex-grow h-70 overflow-auto"
                                                style={{
                                                    scrollbarWidth: 'thin',
                                                    scrollbarColor: '#f0f0f0',
                                                }}
                                            >
                                                {selectedProducts.map((product, index) => (
                                                    <div key={index}
                                                         className="flex justify-between items-center border p-2 rounded-md">
                                                        <div className="flex items-center space-x-1">
                                                            <span className="w-36">{product.name}</span>
                                                            <span className="text-center">{product.count}x</span>
                                                            <span className="text-center">Rp{product.selling_price}</span>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => handleDeleteProduct(product.id)}
                                                            className="text-red-600 hover:text-red-800"
                                                        >
                                                            <FaTrash/>
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="border-t pt-4 flex justify-between items-center">
                                                <p className="text-[18px] font-normal">Total</p>
                                                <p className="text-[18px] font-medium">{totalHarga.toLocaleString('id-ID', {
                                                    style: 'currency',
                                                    currency: 'IDR'
                                                })}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="p-5 w-[335px] h-[540px] shadow-xl ml-5">
                                                <label className="text-sm">Nama Pelanggan</label>
                                                <div>
                                                    <input
                                                        type="text"
                                                        name="customer_name"
                                                        value={formData.customer_name}
                                                        onChange={handleChange}
                                                        className="border-b-2 h-[40px] border-[#828282] flex mb-4 w-full mt-2 rounded-[8px]"
                                                    />
                                                </div>
                                                <label className="text-sm">Kontak Opsional</label>
                                                <div>
                                                    <div className="flex">
                                                        <input
                                                            type="number"
                                                            name="customer_phone"
                                                            value={formData.customer_phone}
                                                            onChange={handleChange}
                                                            className="border-b-2 h-[40px] border-[#828282] flex mb-4 w-full mt-2 rounded-[8px]"
                                                        />
                                                    </div>
                                                </div>
                                                <label className="text-sm">Metode Pembayaran</label>
                                                <div>
                                                    <div className="flex gap-7 mb-4">
                                                        <div
                                                            className={`h-10 rounded-md ${selectedValueRD2 === 'Tunai' ? 'border-blue-500' : 'border-gray-200'}`}>
                                                            <Radio
                                                                id="paymentTunai"
                                                                name="payment_method"
                                                                value="Tunai"
                                                                color="blue"
                                                                label={<span className="text-[15px] font-normal">Tunai</span>}
                                                                checked={selectedValueRD2 === 'Tunai'}
                                                                onChange={handleRadioChangeRD2}
                                                                className="w-4 h-4"
                                                            />
                                                        </div>
                                                        <div
                                                            className={`h-10 rounded-md ${selectedValueRD2 === 'Transfer Bank' ? 'border-blue-500' : 'border-gray-200'}`}>
                                                            <Radio
                                                                id="paymentTransferBank"
                                                                name="payment_method"
                                                                value="Transfer Bank"
                                                                color="blue"
                                                                label={<span className="text-[15px] font-normal">Transfer Bank</span>}
                                                                checked={selectedValueRD2 === 'Transfer Bank'}
                                                                onChange={handleRadioChangeRD2}
                                                                className="w-4 h-4"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <label>Status Transaksi</label>
                                                <div className="mb-4">
                                                    <div className="flex gap-7">
                                                        <div
                                                            className={`h-10 rounded-md ${selectedValueRD1 === 'Lunas' ? 'border-blue-500' : 'border-gray-200'}`}>
                                                            <Radio
                                                                id="option1RD1"
                                                                value="Lunas"
                                                                color="blue"
                                                                label={<span
                                                                    className="text-[15px] font-normal">Lunas</span>}
                                                                checked={selectedValueRD1 === 'Lunas'}
                                                                onChange={handleRadioChange}
                                                                className="w-4 h-4"
                                                            />
                                                        </div>
                                                        <div
                                                            className={`h-10 rounded-md ${selectedValueRD1 === 'Belum Lunas' ? 'border-blue-500' : 'border-gray-200'}`}>
                                                            <Radio
                                                                id="option2RD1"
                                                                value="Belum Lunas"
                                                                color="blue"
                                                                label={<span className="text-[15px] font-normal">Belum Lunas</span>}
                                                                checked={selectedValueRD1 === 'Belum Lunas'}
                                                                onChange={handleRadioChange}
                                                                className="w-4 h-4"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <label>Opsi Pengambilan</label>
                                                <div className="mb-3">
                                                    <div className="flex gap-7">
                                                        <div
                                                            className={`h-10 rounded-md ${selectedValueRD3 === 'Dikirim' ? 'border-blue-500' : 'border-gray-200'}`}>
                                                            <Radio
                                                                id="option1RD1"
                                                                value="Dikirim"
                                                                color="blue"
                                                                label={<span
                                                                    className="text-[15px] font-normal">Dikirim</span>}
                                                                checked={selectedValueRD3 === 'Dikirim'}
                                                                onChange={handleRadioChangeRD3}
                                                                className="w-4 h-4"
                                                            />
                                                        </div>
                                                        <div
                                                            className={`h-10 rounded-md ${selectedValueRD3 === 'Diambil di Toko' ? 'border-blue-500' : 'border-gray-200'}`}>
                                                            <Radio
                                                                id="option2RD1"
                                                                value="Diambil di Toko"
                                                                color="blue"
                                                                label={<span className="text-[15px] font-normal">Ambil di toko</span>}
                                                                checked={selectedValueRD3 === 'Diambil di Toko'}
                                                                onChange={handleRadioChangeRD3}
                                                                className="w-4 h-4"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <label>Catatan Opsional</label>

                                                <div className="mb-3">
                                                    <div className="flex mt-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                             viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
                                                             className="w-6 h-6 mt-6 mr-2">
                                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                                                        </svg>
                                                        <textarea
                                                            id="note"
                                                            rows="5"
                                                            className="p-3  w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 h-16 text-sm"
                                                            placeholder="Tambahkan catatan..."
                                                            name="note"
                                                            value={formData.note}
                                                            onChange={handleChange}
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <button
                                        className="flex items-center px-7 py-2 bg-[#1A4F8B] group ml-[500px] rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2"
                                        type="submit"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <Spinner
                                                thickness='4px'
                                                speed='0.65s'
                                                emptyColor='gray.200'
                                                color='blue.500'
                                                size='sm'
                                            />
                                        ) : (
                                            <span
                                                className="text-white font-medium text-sm group-hover:text-[#1A4F8B]">Tambah Transaksi</span>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    );
}

BtnAddTransaksi.propTypes = {
    addIncome: PropTypes.func.isRequired,
    updateProductsState: PropTypes.func.isRequired,
};