import JanuariChart from "../../dummy/dummy_charts/JanuariChart.jsx";
import FebruariChart from "../../dummy/dummy_charts/FebruariChart.jsx";
import MaretChart from "../../dummy/dummy_charts/MaretChart.jsx";
import TabsPageStatistic from "../tabs_components/TabsPageStatistic.jsx";
import {useState} from "react";
import {BarChartProductSell} from "../../dummy/dummy_charts/BarChartProductSell.jsx";

export default function BarChartComponent({data}){
    const [selectedTab,setSelectedTab] = useState(0)

    const items = [
        {
            title: "Januari",
            content: (
                <JanuariChart/>
            ),
        },
        {
            title: "Februari",
            content: (
                <FebruariChart/>
            ),
        },
        {
            title: "Maret",
            content: (
                <MaretChart/>
            ),
        },
        {
            title:"April",
            content:(
                <JanuariChart/>
            ),
        },
        {
            title:"Mei",
            content:(
                <JanuariChart/>
            ),
        },
        {
            title:"Juni",
            content:(
                <JanuariChart/>
            ),
        },
        {
            title:"Juli ",
            content:(
                <JanuariChart/>
            ),
        },
        {
            title:"Agustus",
            content:(
                <BarChartProductSell data={data}/>
            ),
        },
        {
            title:"September",
            content:(
                <JanuariChart/>
            ),
        },
        {
            title:"Oktober",
            content:(
                <JanuariChart/>
            ),
        },
        {
            title:"November",
            content:(
                <JanuariChart/>
            ),
        },
        {
            title:"Desember",
            content:(
                <JanuariChart/>
            ),
        },

    ]

    return (
        <>
            <TabsPageStatistic item={items} setSelectedTab={setSelectedTab}/>

            <div className="h-[440px]">
                {items.map((item, index) => (
                    <div key={index} className={`${selectedTab === index ? '' : 'hidden'}`}>
                        {item.content}
                    </div>
                ))}
            </div>
        </>
    )
}

