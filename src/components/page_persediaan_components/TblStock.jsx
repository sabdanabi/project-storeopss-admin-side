import SearchBar from "../components_reused/SearchBar.jsx";
import DescPageComponent from "../components_reused/DescPageComponent.jsx";
import TabsPagePersediaan from "../tabs_components/TabsPagePersediaan.jsx";
import {useState} from "react";
import DummyTabelPersediaan from "../../dummy/dummy_data_tabel/DummyTabelPersediaan.jsx";
import PropTypes from "prop-types";
import { ToastContainer} from "react-toastify";


export default function TblStock({products, handleDelete, updateProductsState}) {

    const [selectedTab,setSelectedTab] = useState(0)

    const items = [
        {
            title: 'Semua Produk',
            content: (
                <div>
                    <SearchBar />
                    <DummyTabelPersediaan products={products} handleDelete={handleDelete} updateProductState={updateProductsState}/>
                </div>
            ),
        },
        {
            title: 'Stock Tinggi',
            content: (
                <div>
                    <SearchBar />
                    <DummyTabelPersediaan products={products.filter(product => product.quantity > 50)} handleDelete={handleDelete}/>
                </div>
            ),
        },
        {
            title: 'Stock Rendah',
            content: (
                <div>
                    <SearchBar />
                    <DummyTabelPersediaan products={products.filter(product => product.quantity > 0 && product.quantity <= 50)} handleDelete={handleDelete}/>
                </div>
            ),
        },
        {
            title: 'Stock Habis',
            content: (
                <div>
                    <SearchBar />
                    <DummyTabelPersediaan products={products.filter(product => product.quantity === 0)} handleDelete={handleDelete}/>
                </div>
            ),
        },
    ];

    return (
        <main className="flex-1 pt-10 pl-10 pr-10 overflow-y-auto">
            <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                <DescPageComponent desc={"Selamat datang di admin dashboard Anda."}/>

                <TabsPagePersediaan items={items} setSelectedTab={setSelectedTab}/>

                <div>
                    {items.map((item, index) => (
                        <div key={index} className={`${selectedTab === index ? '' : 'hidden'}`}>
                            {item.content}
                        </div>
                    ))}
                </div>
                <ToastContainer position="top-center" />
            </div>
        </main>
    )
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
};