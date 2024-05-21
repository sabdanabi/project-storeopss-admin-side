import SearchBar from "../components_reused/SearchBar.jsx";
import DescPageComponent from "../components_reused/DescPageComponent.jsx";
import TabsPagePersediaan from "../tabs_components/TabsPagePersediaan.jsx";
import {useState} from "react";
import DummyTabelPersediaan from "../../dummy/dummy_data_tabel/DummyTabelPersediaan.jsx";

export default function TblStock() {

    const [selectedTab,setSelectedTab] = useState(0)

    return (
        <main className="flex-1 p-10 overflow-y-auto">
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

            </div>
        </main>
    )
}

const items = [
    {
        title: 'Semua Produk',
        content: (
            <div>
                <SearchBar/>
                <DummyTabelPersediaan/>
            </div>
        ),
    },
    {
        title: 'Stock Tinggi',
        content: <div>
            <SearchBar/>
            <DummyTabelPersediaan/>
        </div>
    },
    {
        title: 'Setock Rendah',
        content: (
            <div>
                <SearchBar/>

                <DummyTabelPersediaan/>
            </div>
        )
    },
    {
        title: 'Setock Habis',
        content: (
            <div>
                <SearchBar/>

                <DummyTabelPersediaan/>
            </div>
        )
    }
]