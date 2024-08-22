import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import TblStock from "../../components/page_persediaan_components/TblStock.jsx";
import { useEffect, useState } from "react";
import { getAllProduct, addNewProduct, deleteProduct, importProductExcel } from "../../services/StockService.jsx";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BtnDropDownAddStock } from "../../components/page_persediaan_components/button/BtnDropDownAddStock.jsx";
import { PaginationPersediaanProduk } from "../../components/page_persediaan_components/PaginationPersediaanProduk.jsx";
import * as XLSX from 'xlsx';
import { getAllProductTransaktion } from "../../services/TransaksiService.jsx";

export default function PersediaanPage() {
    const [products, setProducts] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchQuery, setSearchQuery] = useState('');
    const [pagination, setPagination] = useState({});

    useEffect(() => {
        fetchProducts();
    }, []);

    const updateProductState = () => {
        fetchProducts(pagination.current_page);
    };


    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredHistory = products.filter((product) => {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const handlePageChange = (page) => {
        fetchProducts(page);
    };

    const handleDelete = async (productId) => {
        await deleteProduct(productId);
        setProducts(products.filter(product => product.id !== productId));
        toast.success("Data berhasil dihapus!");
    };

    const fetchProducts = async (page = 1) => {
        try {
            setLoading(true);
            const result = await getAllProduct(page);
            setProducts(result.data);
            setAuth(true);
            setPagination(result.meta);
        } catch (e) {
            console.log(e);
            setError(e.response.data.error);
        } finally {
            setLoading(false);
        }
    };

    const fetchAllProducts = async () => {
        try {
            setLoading(true);
            const result = await getAllProductTransaktion();
            setAuth(true);
            return result;
        } catch (e) {
            console.log(e);
            setError(e.response.data.error);
        } finally {
            setLoading(false);
        }
    };

    const exportToExcel = async () => {
        const result = await fetchAllProducts()
        const dataToExport = result.data.map((product, index) => ({
            No: index + 1,
            Produk: product.name,
            'Harga Beli': product.purchase_price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }),
            'Harga Jual': product.selling_price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }),
            Stock: product.quantity ?? 0
        }));

        const worksheet = XLSX.utils.json_to_sheet(dataToExport);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Produk Stock");

        XLSX.writeFile(workbook, "Produk_Stock.xlsx");
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />
            <div className="flex flex-col flex-1 w-full overflow-hidden">
                <PartTop />

                <BtnDropDownAddStock
                    updateProductsState={updateProductState}
                    addNewProduct={addNewProduct}
                    importProductExcel={importProductExcel}
                />

                <div>
                    <TblStock
                        products={filteredHistory}
                        handleDelete={handleDelete}
                        searchQuery={searchQuery}
                        updateProductsState={updateProductState}
                        handleSearchChange={handleSearchChange}
                        exportToExcel={exportToExcel}
                        pagination={pagination}
                        isLoading={isLoading}
                        isAuth={isAuth}
                        error={error}
                    />
                    <PaginationPersediaanProduk meta={pagination} onPageChange={handlePageChange} />
                </div>
            </div>
        </div>
    );
}
