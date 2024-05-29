import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { restockProduct } from '../../../services/RestockService.jsx';
import {useState} from "react";

export function FormRestockProduct({id, updateProductsState}) {

    const [formData, setFormData] = useState({
        quantity: '',
        total_purchase_price: '',
        destination_address: '',
        supplier_name: '',
        supplier_address: '',
        supplier_phone: '',
        shipping_method: '',
        payment_method: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await restockProduct(id, formData);
            toast.success('Produk berhasil direstok.', { position: 'top-center', autoClose: 10000 });
            updateProductsState();
        } catch (error) {
            toast.error('Produk tidak ditemukan.', { position: 'top-center', autoClose: 10000 });
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <ToastContainer position="top-center"/>
                <div className="flex justify-between">
                    <div className="w-64">
                        <div className="mb-4">
                            <label className="text-sm">Nama Pemasok</label>
                            <br/>
                            <input
                                placeholder="Masukan nama produk..."
                                type="text" name="supplier_name"
                                value={formData.supplier_name}
                                onChange={handleChange} required
                                className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-sm">Total Harga Beli</label>
                            <br/>
                            <input
                                placeholder="Masukkan harga beli produk...."
                                type="number" name="total_purchase_price"
                                value={formData.total_purchase_price}
                                onChange={handleChange} required
                                className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                            />
                        </div>

                        {/*<div className="mb-4">*/}
                        {/*    <label className="text-sm">Harga Jual/pcs/kg</label>*/}
                        {/*    <br/>*/}
                        {/*    <input*/}
                        {/*        placeholder="Masukkan harga jual produk...."*/}
                        {/*        name="sellingPrice"*/}
                        {/*        className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"*/}
                        {/*    />*/}
                        {/*</div>*/}

                        <div className="mb-4">
                            <label className="text-sm">Stock/pcs/kg</label>
                            <br/>
                            <input
                                placeholder="Masukkan stock produk...."
                                type="number" name="quantity"
                                value={formData.quantity}
                                onChange={handleChange} required
                                className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-sm">Alamat Tujuan</label>
                            <br/>
                            <input
                                placeholder="Masukkan alamat tujuan...."
                                type="text" name="destination_address"
                                value={formData.destination_address}
                                onChange={handleChange} required
                                className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                            />
                        </div>
                    </div>

                    <div className="w-64">
                        {/*<div className="mb-4">*/}
                        {/*    <label className="text-sm">Pemasok</label>*/}
                        {/*    <br/>*/}
                        {/*    <input*/}
                        {/*        placeholder="Masukan nama pemasok..."*/}
                        {/*        name="supplierName"*/}
                        {/*        className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"*/}
                        {/*    />*/}
                        {/*</div>*/}

                        <div className="mb-4">
                            <label className="text-sm">Alamat Pemasok</label>
                            <br/>
                            <input
                                placeholder="Masukkan alamat pemasok...."
                                type="text" name="supplier_address"
                                value={formData.supplier_address}
                                onChange={handleChange} required
                                className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-sm">Nomor Telepon Pemasok</label>
                            <br/>
                            <input
                                placeholder="Masukkan nomor telepon pemasok...."
                                type="text" name="supplier_phone"
                                value={formData.supplier_phone}
                                onChange={handleChange} required
                                className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-sm">Metode Pengiriman</label>
                            <br/>
                            <input
                                placeholder="Masukkan metode pengiriman...."
                                type="text" name="shipping_method"
                                value={formData.shipping_method}
                                onChange={handleChange} required
                                className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="text-sm">Metode Pembayaran</label>
                            <br/>
                            <input
                                placeholder="Masukkan metode pembayaran...."
                                type="text" name="payment_method"
                                value={formData.payment_method}
                                onChange={handleChange} required
                                className="border-2 w-full h-10 rounded-lg mt-3 text-xs p-3"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-3">
                    <button type={"submit"} className="flex items-center justify-center px-4 py-2 bg-[#1A4F8B] group w-36
                                                                rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                                                                <span
                                                                    className="text-white font-light group-hover:text-[#1A4F8B]">
                                                                    Simpan
                                                                </span>
                    </button>
                </div>
            </form>
        </>
    )
}