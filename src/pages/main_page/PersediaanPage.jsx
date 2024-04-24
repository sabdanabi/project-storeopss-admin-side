import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import TabelStock from "../../components/page_persediaan_components/TabelStock.jsx";
import ButtonAddStock from "../../components/page_persediaan_components/ButtonAddStock.jsx";

export default function AdminDashboard() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
                <SideNavbarComponent/>
            <div className="flex flex-col flex-1 w-full">
               <PartTop/>
                <ButtonAddStock/>
                <TabelStock/>
            </div>
        </div>
    );
}
