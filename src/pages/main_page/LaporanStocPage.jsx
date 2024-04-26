import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import BtnBulanLaporanStock from "../../components/page_laporan_stock_components/btn_bulan/BtnBulanLaporanStock.jsx";
import TblLaporanStock from "../../components/page_laporan_stock_components/TblLaporanStock.jsx";
import SearchBar from "../../components/components_reused/SearchBar.jsx";

export default function LaporanStocPage(){
    return(
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent/>
            <div className="flex flex-col flex-1 w-full">
                <PartTop/>
                <NamePageComponent nama={"Laporan Stock"}/>

                <main className="flex-1 p-10 overflow-y-auto">
                    <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                        <DescPageComponent
                            desc={"Laporan stok ini mencakup periode dari tanggal 1 Maret 2024 hingga 31 Maret 2024."}/>
                        <SearchBar/>
                        <BtnBulanLaporanStock/>
                        <TblLaporanStock/>
                    </div>
                </main>
            </div>
        </div>
    )
}