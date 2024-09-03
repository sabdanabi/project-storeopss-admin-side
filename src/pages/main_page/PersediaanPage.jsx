import { useEffect, useState } from "react";
import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import TblStock from "../../components/page_persediaan_components/TblStock.jsx";
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
    const [pagination, setPagination] = useState({});
    const [stockFilter, setStockFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        if (searchQuery === '') {
            fetchProducts(1, '', stockFilter, category);
        }
    }, [searchQuery, stockFilter, category]);

    const updateProductState = () => {
        fetchProducts(pagination.current_page, searchQuery, stockFilter, category);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query === '') {
            fetchProducts(1, '', stockFilter, category);
        }
    };

    const handleSearchKeyDown = (e) => {
        if (e.key === 'Enter') {
            fetchProducts(1, searchQuery, stockFilter, category);
        }
    };

    const handleStockFilterChange = (filter) => {
        setStockFilter(filter);
        fetchProducts(1, searchQuery, filter, category);
    };

    const handleCategoryChange = (selectedCategory) => {
        setCategory(selectedCategory);
    };

    const onSearchClick = () => {
        fetchProducts(1, searchQuery, stockFilter);
    };

    const filteredHistory = products.filter((entry) => {
        const nameMatch = entry.name.toLowerCase().includes(searchQuery.toLowerCase());
        return nameMatch;
    });

    const handlePageChange = (page) => {
        fetchProducts(page);
    };

    const handleDelete = async (productId) => {
        await deleteProduct(productId);
        setProducts(products.filter(product => product.id !== productId));
        toast.success("Data berhasil dihapus!");
    };

    const fetchProducts = async (page = 1, searchQuery = '', stockFilter = '',  category = '') => {
        try {
            setLoading(true);
            const result = await getAllProduct(page, searchQuery, stockFilter, category);
            const productsWithIndex = result.data.map((product, index) => ({
                ...product,
                no: (page - 1) * pagination.per_page + index + 1
            }));
            setProducts(productsWithIndex);
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
            <div className="flex flex-col flex-1 w-full overflow-auto">
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
                        handleSearchKeyDown={handleSearchKeyDown}
                        exportToExcel={exportToExcel}
                        onSearchClick={onSearchClick}
                        pagination={pagination}
                        isLoading={isLoading}
                        isAuth={isAuth}
                        error={error}
                        stockFilter={stockFilter}
                        onStockFilterChange={handleStockFilterChange}
                        category={category}
                        onCategoryChange={handleCategoryChange}
                    />
                    <PaginationPersediaanProduk meta={pagination} onPageChange={handlePageChange} />
                </div>
            </div>
        </div>
    );
}
