import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {editProduct,getProductById} from "../../services/StockService.jsx";

export default function FormEditProduk({ updateProductsState, id}) {

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        quantity: "",
        purchasePrice: "",
        sellingPrice: "",
        unit: "",
        image: null,
    });
    const [imageFile, setImageFile] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (imageFile) {
                const formDataWithImage = new FormData();
                formDataWithImage.append("name", formData.name);
                formDataWithImage.append("category", formData.category);
                formDataWithImage.append("quantity", formData.quantity);
                formDataWithImage.append("purchase_price", formData.purchasePrice);
                formDataWithImage.append("selling_price", formData.sellingPrice);
                formDataWithImage.append("image", imageFile);
                formDataWithImage.append("unit", formData.unit);
                await editProduct(id, formDataWithImage);
            } else {
                await editProduct(id, formData);
            }
            toast.success("Produk berhasil diubah!", { position: "top-center", autoClose: 10000 });
            updateProductsState();
        } catch (error) {
            console.error(error);
            toast.error("Gagal mengubah produk.", { position: "top-center", autoClose: 10000 });
        }
    };


    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
            setImageFile(files[0]);
            setFormData((prevData) => ({
                ...prevData,
                image: URL.createObjectURL(files[0]),
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await getProductById(id);
                setFormData(productData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <form onSubmit={handleSubmit}>
            <ToastContainer position="top-center"/>
            <div className="flex gap-10">
                <div>
                    <div className="mb-4">
                        <label className="text-sm">Nama Produk</label>
                        <br/>
                        <input
                            placeholder="Masukan nama produk..."
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border-2 w-96 h-8 rounded-lg mt-3 text-xs p-3"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm">Harga Beli</label>
                        <br/>
                        <input
                            placeholder="Masukkan harga beli produk...."
                            type="number"
                            name="purchasePrice"
                            value={formData.purchasePrice}
                            onChange={handleChange}
                            className="border-2 w-96 h-8 rounded-lg mt-3 text-xs p-3"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm">Harga Jual</label>
                        <br/>
                        <input
                            placeholder="Masukkan harga jual produk...."
                            type="number"
                            name="sellingPrice"
                            value={formData.sellingPrice}
                            onChange={handleChange}
                            className="border-2 w-96 h-8 rounded-lg mt-3 text-xs p-3"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm">Stock/pcs/kg</label>
                        <br/>
                        <input
                            placeholder="Masukkan stock produk...."
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="border-2 w-96 h-8 rounded-lg mt-3 text-xs p-3"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm">Unit /pcs/kg</label>
                        <br/>
                        <input
                            placeholder="Masukkan unit produk...."
                            type="text"
                            name="unit"
                            value={formData.unit}
                            onChange={handleChange}
                            className="border-2 w-96 h-8 rounded-lg mt-3 text-xs p-3"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm">Kategori Produk</label>
                        <br/>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            placeholder="Category"
                            className="w-full px-3 py-2 h-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                <div>
                    <label className="text-sm">Foto Produk</label>
                    <br/>
                    <div className="relative w-96 h-96 rounded-lg mt-3 overflow-hidden border-2">
                        <img
                            src="/assets_img/image.png" // Ganti dengan URL gambar yang Anda miliki
                            alt="Preview"
                            className="w-full h-full object-cover"
                        />
                        <input
                            type="file"
                            id="image"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-3">
                <button type="submit"
                        className="flex items-center justify-center px-4 py-2 bg-[#1A4F8B] group w-36
                               rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                    <span className="text-white font-light group-hover:text-[#1A4F8B]">Simpan</span>
                </button>
            </div>
        </form>
    )
}

FormEditProduk.propTypes = {
    updateProductsState: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};