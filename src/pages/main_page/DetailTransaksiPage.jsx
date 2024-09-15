import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";
import {
    FilterComponentsDetailTransaksi
} from "../../components/detail_transaksi_components/FilterComponentsDetailTransaksi.jsx";
import {TblDetailTransaksi} from "../../components/detail_transaksi_components/TblDetailTransaksi.jsx";

export function DetailTransaksiPage() {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent />
            <div className="flex flex-col flex-1 w-full">
                <PartTop />
                <NamePageComponent nama={"Pelacakan Produk"} />
                <main className="flex-1 px-10 pt-5 overflow-y-auto">
                    <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                        <DescPageComponent desc={"Detail transaksi pada setiap aktivitas transaksi"} />
                        <FilterComponentsDetailTransaksi/>
                        <div className="bg-white border-b-[3px] border-gray-200 overflow-auto h-80">
                            <TblDetailTransaksi/>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}