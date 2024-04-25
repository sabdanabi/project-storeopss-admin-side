import BtnBulan from "./BtnBulan.jsx";

export default function BtnBulanLaporanStock(){
    return(
        <>
            <div className="bg-white h-[65px] flex pt-5 border-y-[3px] border-gray-200 justify-between">
                <div className="flex">

                    <BtnBulan bulan="Januari"/>
                    <BtnBulan bulan="Februari"/>
                    <BtnBulan bulan="Maret"/>
                    <BtnBulan bulan="April"/>
                    <BtnBulan bulan="Mei"/>
                    <BtnBulan bulan="Juni"/>
                    <BtnBulan bulan="Juli"/>
                    <BtnBulan bulan="Agustus"/>
                    <BtnBulan bulan="September"/>
                    <BtnBulan bulan="Oktober"/>
                    <BtnBulan bulan="November"/>
                    <BtnBulan bulan="Desember"/>

                </div>
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6 mb-10 mr-7 text-[#8C95A4]">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"/>
                    </svg>
                </button>
            </div>
        </>
    )
}