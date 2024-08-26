import DescPageComponent from "../components_reused/DescPageComponent.jsx";
import TabsPagePersediaan from "../tabs_components/TabsPagePersediaan.jsx";
import {useState} from "react";
import TblProductStock from "../../dummy/dummy_data_tabel/TblProductStock.jsx";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import { SearchBarStock } from "./SearchBarStock.jsx";
import { Spinner } from "@chakra-ui/react";

export default function TblStock({ products, handleDelete, updateProductsState, handleSearchChange,
                                     searchQuery, exportToExcel, pagination, error, isAuth, isLoading }) {

    const [selectedTab, setSelectedTab] = useState(0);

    const filterProducts = (filterFn) => products.filter(filterFn);

    const renderContent = (filteredProducts) => {
        if (isLoading) {
            return (
                <div className="flex items-center justify-center h-full">
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </div>
            );
        }

        if (!isAuth) {
            return (
                <div className="flex items-center justify-center h-full">
                    <p className="text-xl">{error}</p>
                </div>
            );
        }

        if (filteredProducts.length > 0) {
            return (
                <TblProductStock products={filteredProducts} handleDelete={handleDelete} updateProductState={updateProductsState} pagination={pagination} />
            );
        }

        return (
            <div className="flex-col items-center justify-center">
                <img src="/assets_img/notfound_transaction_img.png" className="m-auto mt-10 w-[200px]" />
                <p className="text-[22px] text-center font-medium mt-6 text-blue-gray-600 ">Produk tidak ditemukan</p>
                <p className="text-[18px] text-center font-normal mt-4 mb-10 text-blue-gray-200 ">
                    Tidak dapat menemukan produk <span className="font-semibold text-blue-gray-600">{searchQuery}</span>
                </p>
            </div>
        );
    };

    const items = [
        {
            title: 'Semua Produk',
            content: (
                <div>
                    <SearchBarStock handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
                    {renderContent(products)}
                </div>
            ),
        },
        {
            title: 'Stock Tinggi',
            content: (
                <div>
                    <SearchBarStock handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
                    {renderContent(filterProducts(product => product.quantity > 50))}
                </div>
            ),
        },
        {
            title: 'Stock Rendah',
            content: (
                <div>
                    <SearchBarStock handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
                    {renderContent(filterProducts(product => product.quantity > 0 && product.quantity <= 50))}
                </div>
            ),
        },
        {
            title: 'Stock Habis',
            content: (
                <div>
                    <SearchBarStock handleSearchChange={handleSearchChange} searchQuery={searchQuery} />
                    {renderContent(filterProducts(product => product.quantity === 0))}
                </div>
            ),
        },
    ];

    return (
        <main className="flex-1 pt-6 pl-10 pr-10 overflow-auto">
            <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200 ">
                <DescPageComponent desc={"Selamat datang di admin dashboard Anda."} />

                <TabsPagePersediaan items={items} setSelectedTab={setSelectedTab} exportToExcel={exportToExcel} products={products} />

                {items.map((item, index) => (
                    <div key={index} className={`${selectedTab === index ? '' : 'hidden'}`}>
                        {item.content}
                    </div>
                ))}

                <ToastContainer position="top-center" />
            </div>
        </main>
    );
}

TblStock.propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired,
        purchase_price: PropTypes.number.isRequired,
        selling_price: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        image: PropTypes.string,
    })).isRequired,
    handleDelete: PropTypes.func.isRequired,
    updateProductsState: PropTypes.func.isRequired,
    handleSearchChange: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    exportToExcel: PropTypes.func.isRequired,
    pagination: PropTypes.shape({
        current_page: PropTypes.number,
        per_page: PropTypes.number
    }),
    error: PropTypes.string,
    isAuth: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
