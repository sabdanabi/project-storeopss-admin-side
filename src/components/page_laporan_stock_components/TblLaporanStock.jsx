import {useState} from "react";
import BtnBulanLaporanStock from "./btn_bulan/BtnBulanLaporanStock.jsx";
import DummyTabelLaporanStock from "../../dummy/dummy_data_tabel/DummyTabelLaporanStock.jsx";

export default function TblLaporanStock() {
    const [selectedTab,setSelectedTab] = useState(0)


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

const items = [
    {
        title: 'Januari',
        content: (
            <div>
                <DummyTabelLaporanStock/>
            </div>
        )
    },
    {
        title: 'Februari',
        content: (
            <div>
                <DummyTabelLaporanStock/>
            </div>
        )
    },
    {
        title: 'Maret',
        content: (
            <div>
                <DummyTabelLaporanStock/>
            </div>
        )
    },
]