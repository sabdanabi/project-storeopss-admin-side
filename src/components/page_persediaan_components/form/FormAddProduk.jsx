import {useState} from "react";
import PropTypes from "prop-types";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function FormAddProduk({ refreshProducts, addNewProduct}) {
    // const [isOpen, setIsOpen] = useState(false);
    // const [selectedItem, setSelectedItem] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        quantity: "",
        purchasePrice: "",
        sellingPrice: "",
        unit: "",
        image: null,
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            toast.success("Data berhasil ditambahkan!", { position: "top-center", autoClose: 10000 });
            const formDataWithImage = new FormData();
            formDataWithImage.append("name", formData.name);
            formDataWithImage.append("category", formData.category);
            formDataWithImage.append("quantity", formData.quantity);
            formDataWithImage.append("purchase_price", formData.purchasePrice);
            formDataWithImage.append("selling_price", formData.sellingPrice);
            formDataWithImage.append("unit", formData.unit);

            if (formData.image) {
                formDataWithImage.append("image", formData.image);
            }

            await addNewProduct(formDataWithImage);

            setFormData({
                name: "",
                category: "",
                quantity: "",
                purchasePrice: "",
                sellingPrice: "",
                unit: "",
                image: null,
            });
            refreshProducts();
        } catch (e) {
            console.error(e);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const imageFile = e.target.files[0];
        setFormData((prevData) => ({
            ...prevData,
            image: imageFile,
        }));
    };

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };
    //
    // const handleItemClick = (item) => {
    //     setSelectedItem(item);
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         category: item,
    //     }));
    //     setIsOpen(false);
    //     setIsOpen(false);
    // };
    //
    // const items = ['Pintu', 'Material', 'Prabotan'];
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
                        <label className="text-sm">Stock</label>
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
                            className="w-full h-8 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            onChange={handleImageChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <button type="submit"
                        className="flex items-center justify-center px-4 py-2 bg-[#1A4F8B] group w-36
                               rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                    <span className="text-white font-light group-hover:text-[#1A4F8B]">Simpan</span>
                </button>
            </div>
        </form>
    )
}

FormAddProduk.propTypes = {
    refreshProducts: PropTypes.func.isRequired,
    addNewProduct: PropTypes.func.isRequired,
};