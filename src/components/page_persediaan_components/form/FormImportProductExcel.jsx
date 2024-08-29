import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

export function FormImportProductExcel({ importProductExcel, updateProductsState }) {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('Pilih File');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFileName(selectedFile ? selectedFile.name : '');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            console.error('Please select a file.');
            return;
        }

        const formData = new FormData();
        formData.append('products', file);

        try {
            const result = await importProductExcel(formData);
            updateProductsState();

            if (result.error) {
                console.error(result.error);
            } else {
                console.log(result.message);
                toast.success("Data excel berhasil ditambahkan!", { position: "top-center", autoClose: 10000 });
            }
        } catch (err) {
            console.error('An error occurred while importing the products.');
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex">
                <div>
                    <br />
                    <div className="relative w-72 h-72 rounded-lg mt-3 overflow-hidden border-2 ml-24 p-10">
                        <img
                            src="/assets_img/import_file_icon.png"
                            alt="Preview"
                            className="w-full h-full object-cover"
                        />
                        <input
                            type="file"
                            id="file"
                            name="file"
                            accept=".xls,.xlsx"
                            onChange={handleFileChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        {fileName && (
                            <p className="absolute bottom-0 left-0 right-0 p-2 bg-white text-center">
                               File yang anda pilih: {fileName}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <button type="submit"
                        className="flex items-center justify-center px-4 py-2 bg-[#1A4F8B] group w-36
                               rounded-lg shadow-sm hover:bg-gray-50 hover:border-[#1A4F8B] hover:border-2">
                    <span className="text-white font-light group-hover:text-[#1A4F8B]">Tambah</span>
                </button>
            </div>
        </form>
    );
}
