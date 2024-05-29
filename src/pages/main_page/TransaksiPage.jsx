import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import TblTransaksi from "../../components/page_transaksi_components/TblTransaksi.jsx";
import BtnAddTransaksi from "../../components/page_transaksi_components/BtnAddTransaksi.jsx";

export default function TransaksiPage() {

    return(
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent/>
            <div className="flex flex-col flex-1 w-full overflow-hidden">
                <PartTop/>
                <BtnAddTransaksi/>
                <TblTransaksi/>
            </div>
        </div>
    )
}