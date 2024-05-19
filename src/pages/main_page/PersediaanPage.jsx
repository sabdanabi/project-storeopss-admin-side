import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import TblStock from "../../components/page_persediaan_components/TblStock.jsx";
import BtnAddStock from "../../components/page_persediaan_components/BtnAddStock.jsx";
import {useState} from "react";
import PopupTambahProduk from "../../components/popup-components/PopupTambahProduk.jsx";

export default function PersediaanPage() {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent/>
            <div className="flex flex-col flex-1 w-full overflow-hidden">
                <PartTop/>
                <BtnAddStock setOpen={setOpen} titlePage={"Produk"} titleBtn={"Product"}/>
                <TblStock/>
            </div>
        </div>
    );
}
