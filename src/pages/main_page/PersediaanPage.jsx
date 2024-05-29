import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import TblStock from "../../components/page_persediaan_components/TblStock.jsx";
import BtnAddStock from "../../components/page_persediaan_components/button/BtnAddStock.jsx";
import {useEffect, useState} from "react";
import {getAllProduct, addNewProduct, deleteProduct} from "../../services/StockService.jsx";
import {toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function PersediaanPage() {
    const [products, setProducts] = useState([]);
    const [isAuth, setAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const updateProductsState = async () => {
        try {

            setLoading(true);
            const result = await getAllProduct();
            setProducts(result.data);
            setAuth(true);

        } catch(e) {

            console.log(e);
            setError(e.response.data.error);

        } finally {
            setLoading(false);
        }
    }

    const handleDelete = async (productId) => {
        await deleteProduct(productId);
        setProducts(products.filter(product => product.id !== productId));
        toast.success("Data berhasil dihapus!");
    };

    useEffect(() => {
        updateProductsState();
    }, []);


    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent/>
            <div className="flex flex-col flex-1 w-full overflow-hidden">
                <PartTop/>
                <BtnAddStock titlePage={"Produkk"} titleBtn={"Product"}
                             updateProductsState={updateProductsState}
                             addNewProduct={addNewProduct}/>
                {isLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-xl">Loading...</p>
                    </div>
                ) : isAuth ? (
                    <TblStock products={products} handleDelete={handleDelete} updateProductsState={updateProductsState}/>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <p className="text-xl">{ error }</p>
                    </div>
                )}
            </div>
        </div>
    );
}
