import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { editProduct, getProductById } from "../../../services/StockService.jsx";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

export default function FormEditProduk({ updateProductsState, id }) {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        quantity: "",
        purchasePrice: "",
        sellingPrice: "",
        unit: "",
        image: "",
    });
    const [imageFile, setImageFile] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("category", formData.category);
            data.append("quantity", formData.quantity);
            data.append("purchase_price", formData.purchasePrice);
            data.append("selling_price", formData.sellingPrice);
            data.append("unit", formData.unit);

            if (imageFile) {
                data.append("image", imageFile);
            }

            await editProduct(id, data);

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
                image: files[0] ? URL.createObjectURL(files[0]) : "",
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleCategoryChange = (category) => {
        setFormData((prevData) => ({
            ...prevData,
            category,
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await getProductById(id);
                setFormData({
                    name: productData.data.name || "",
                    category: productData.data.category || "",
                    quantity: productData.data.quantity || "",
                    purchasePrice: productData.data.purchase_price || "",
                    sellingPrice: productData.data.selling_price || "",
                    unit: productData.data.unit || "",
                    image: productData.data.image || "",
                });
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex gap-10">
                <div>
                    <div className="mb-4">
                        <label className="text-sm">Nama Produk</label>
                        <br />
                        <input
                            placeholder="Masukan nama produk..."
                            type="text"
                            name="name"
                            value={formData.name || ""}
                            onChange={handleChange}
                            className="border-2 w-96 h-8 rounded-lg mt-3 text-xs p-3"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm">Harga Beli</label>
                        <br />
                        <input
                            placeholder="Masukkan harga beli produk...."
                            type="number"
                            name="purchasePrice"
                            value={formData.purchasePrice || ""}
                            onChange={handleChange}
                            className="border-2 w-96 h-8 rounded-lg mt-3 text-xs p-3"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm">Harga Jual</label>
                        <br />
                        <input
                            placeholder="Masukkan harga jual produk...."
                            type="number"
                            name="sellingPrice"
                            value={formData.sellingPrice || ""}
                            onChange={handleChange}
                            className="border-2 w-96 h-8 rounded-lg mt-3 text-xs p-3"
                        />
                    </div>
                </div>

                <div>
                    <div className="mb-4">
                        <label className="text-sm">Stock</label>
                        <br />
                        <input
                            placeholder="Masukkan stock produk...."
                            type="number"
                            name="quantity"
                            value={formData.quantity || ""}
                            onChange={handleChange}
                            className="border-2 w-96 h-8 rounded-lg mt-3 text-xs p-3"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm">Kategori Produk</label>
                        <br />
                        <Menu>
                            <MenuButton
                                as={Button}
                                className="h-12 border bg-white hover:bg-[#1a4f8bcd] w-96"
                                rightIcon={
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5}
                                         stroke="currentColor" className="w-5 h-5 text-black">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                                    </svg>
                                }
                            >
                                <div className="flex items-center px-0 py-2 group rounded-lg">
                                    <span className="text-black font-normal text-[14px]">
                                        {formData.category || 'Kategori Produk'}
                                    </span>
                                </div>
                            </MenuButton>
                            <MenuList className="max-h-60 overflow-y-auto">
                                <MenuItem onClick={() => handleCategoryChange('Pengecatan')}>Pengecatan</MenuItem>
                                <MenuItem onClick={() => handleCategoryChange('Kramik')}>Kramik</MenuItem>
                                <MenuItem onClick={() => handleCategoryChange('Paralon')}>Paralon</MenuItem>
                                <MenuItem onClick={() => handleCategoryChange('Sambungan Paralon')}>Sambungan Paralon</MenuItem>
                                <MenuItem onClick={() => handleCategoryChange('Paku dan Sekrup')}>Paku dan Sekrup</MenuItem>
                                <MenuItem onClick={() => handleCategoryChange('Pralatan Tukang')}>Pralatan Tukang</MenuItem>
                                <MenuItem onClick={() => handleCategoryChange('Kelistrikan')}>Kelistrikan</MenuItem>
                                <MenuItem onClick={() => handleCategoryChange('Amplas')}>Amplas</MenuItem>
                                <MenuItem onClick={() => handleCategoryChange('Perlengkapan Rumah')}>Perlengkapan Rumah</MenuItem>
                                <MenuItem onClick={() => handleCategoryChange('Material')}>Material</MenuItem>
                            </MenuList>
                        </Menu>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-3">
                <button
                    type="submit"
                    className="flex items-center justify-center px-4 py-2 bg-[#1A4F8B] group w-36 rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2"
                >
                    <span className="text-white font-light group-hover:text-[#1A4F8B]">Simpan</span>
                </button>
            </div>
        </form>
    );
}

FormEditProduk.propTypes = {
    updateProductsState: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
};
