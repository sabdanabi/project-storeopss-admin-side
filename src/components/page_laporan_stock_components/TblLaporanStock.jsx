import {useState} from "react";
import BtnBulanLaporanStock from "./btn_bulan/BtnBulanLaporanStock.jsx";
import DummyTabelLaporanStock from "../../dummy/dummy_data_tabel/DummyTabelLaporanStock.jsx";
import {TestTabel} from "../../dummy/dummy_data_tabel/TestTabel.jsx";

export default function TblLaporanStock({products}) {
    const [selectedTab,setSelectedTab] = useState(0)

    const items = [
        {
            title: 'Januari',
            content: (
                <div>
                    <TestTabel/>
                </div>
            )
        },
        {
            title: 'Februari',
            content: (
                <div>
                    <TestTabel products={products}/>
                </div>
            )
        },
        {
            title: 'Maret',
            content: (
                <div>
                    <TestTabel/>
                </div>
            )
        },
        {
            title: 'April',
            content: (
                <div>
                    <TestTabel/>
                </div>
            )
        },
        {
            title: 'Mei',
            content: (
                <div>
                    <TestTabel/>
                </div>
            )
        },
        {
            title: 'Juni',
            content: (
                <div>
                    <TestTabel/>
                </div>
            )
        },
        {
            title: 'Juli',
            content: (
                <div>
                    <TestTabel/>
                </div>
            )
        },
        {
            title: 'Agustus',
            content: (
                <div>
                    <DummyTabelLaporanStock products={products}/>
                </div>
            )
        },
        {
            title: 'September',
            content: (
                <div>
                    <TestTabel/>
                </div>
            )
        },
        {
            title: 'Oktober',
            content: (
                <div>
                    <TestTabel/>
                </div>
            )
        },
        {
            title: 'November',
            content: (
                <div>
                    <TestTabel/>
                </div>
            )
        },
        {
            title: 'Desember',
            content: (
                <div>
                    <TestTabel/>
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