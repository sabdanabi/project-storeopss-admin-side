import {useState} from "react";
import BtnBulanLaporanStock from "./btn_bulan/BtnBulanLaporanStock.jsx";
import DummyTabelLaporanStock from "../../dummy/dummy_data_tabel/DummyTabelLaporanStock.jsx";

export default function TblLaporanStock({products}) {
    const [selectedTab,setSelectedTab] = useState(0)

    const items = [
        {
            title: 'Januari',
            content: (
                <div>
                    <DummyTabelLaporanStock products={products}/>
                </div>
            )
        },
        {
            title: 'Februari',
            content: (
                <div>
                    <DummyTabelLaporanStock products={products}/>
                </div>
            )
        },
        {
            title: 'Maret',
            content: (
                <div>
                    <DummyTabelLaporanStock products={products}/>
                </div>
            )
        },
    ]

    return(
        <>
            <BtnBulanLaporanStock item={items} setSelectedTab={setSelectedTab}/>

            <div className="">
                {items.map((item, index) => (
                    <div key={index} className={`${selectedTab === index ? '' : 'hidden'}`}>
                        {item.content}
                    </div>
                ))}
            </div>
        </>
    )
}