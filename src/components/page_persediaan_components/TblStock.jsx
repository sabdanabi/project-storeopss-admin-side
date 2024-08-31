import { useState } from "react";
import { Spinner, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import DescPageComponent from "../components_reused/DescPageComponent.jsx";
import TblProductStock from "../../dummy/dummy_data_tabel/TblProductStock.jsx";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import { SearchBarStock } from "./SearchBarStock.jsx";
export default function TblStock({ products, handleDelete, updateProductsState, handleSearchChange, handleSearchKeyDown,
                                     searchQuery, exportToExcel, error, isAuth, isLoading, onSearchClick, stockFilter, onStockFilterChange, category, onCategoryChange }) {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (index) => {
        let filter = '';
        switch (index) {
            case 0:
                filter = '';
                break;
            case 1:
                filter = 'high';
                break;
            case 2:
                filter = 'low';
                break;
            case 3:
                filter = 'empty';
                break;
            default:
                filter = '';
        }
        setSelectedTab(index);
        onStockFilterChange(filter);
        updateProductsState(1, searchQuery, filter);
    };

    return (
        <main className="flex-1 pt-6 pl-10 pr-10 overflow-y-auto">
            <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200 h-[480px]">
                <DescPageComponent desc={"Selamat datang di admin dashboard Anda."} />

                <SearchBarStock
                    handleSearchChange={handleSearchChange}
                    searchQuery={searchQuery}
                    handleSearchKeyDown={handleSearchKeyDown}
                    onSearchClick={onSearchClick}
                    exportToExcel={exportToExcel}
                    categoryProduct={category}
                    onCategoryChange={onCategoryChange}
                />


                <Tabs onChange={(index) => handleTabChange(index)} variant="enclosed">
                    <TabList>
                        <Tab>Semua</Tab>
                        <Tab>Stok Tinggi</Tab>
                        <Tab>Stok Rendah</Tab>
                        <Tab>Stok Kosong</Tab>
                    </TabList>

                    {isLoading ? (
                        <div className="flex items-center justify-center h-full pt-36">
                            <Spinner
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            />
                        </div>
                    ) : isAuth ? (
                        <TabPanels>
                            <TabPanel>
                                <TblProductStock
                                    products={products}
                                    handleDelete={handleDelete}
                                    stockFilter={stockFilter}
                                    refreshProducts={updateProductsState}
                                />
                            </TabPanel>
                            <TabPanel>
                                <TblProductStock
                                    products={products}
                                    handleDelete={handleDelete}
                                    stockFilter={stockFilter}
                                    refreshProducts={updateProductsState}
                                />
                            </TabPanel>
                            <TabPanel>
                                <TblProductStock
                                    products={products}
                                    handleDelete={handleDelete}
                                    stockFilter={stockFilter}
                                    refreshProducts={updateProductsState}
                                />
                            </TabPanel>
                            <TabPanel>
                                <TblProductStock
                                    products={products}
                                    handleDelete={handleDelete}
                                    stockFilter={stockFilter}
                                    refreshProducts={updateProductsState}
                                />
                            </TabPanel>
                        </TabPanels>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-xl">{error}</p>
                        </div>
                    )}
                </Tabs>
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
    })),
    handleDelete: PropTypes.func,
    updateProductsState: PropTypes.func,
    handleSearchChange: PropTypes.func,
    handleSearchKeyDown: PropTypes.func,
    searchQuery: PropTypes.string,
    exportToExcel: PropTypes.func,
    pagination: PropTypes.shape({
        current_page: PropTypes.number,
        last_page: PropTypes.number,
        total: PropTypes.number,
    }),
    error: PropTypes.string,
    isAuth: PropTypes.bool,
    isLoading: PropTypes.bool,
    onSearchClick: PropTypes.func,
    stockFilter: PropTypes.string,
    onStockFilterChange: PropTypes.func,
};
