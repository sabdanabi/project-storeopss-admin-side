import SideNavbarComponent from "../../components/components_reused/SideNavbarComponent.jsx";
import PartTop from "../../components/components_reused/PartTop.jsx";
import NamePageComponent from "../../components/components_reused/NamePageComponent.jsx";
import DescPageComponent from "../../components/components_reused/DescPageComponent.jsx";

export default function ProfilePage() {
    return(
        <div className="flex h-screen overflow-hidden bg-gray-100">
            <SideNavbarComponent/>

            <div className="flex flex-col flex-1 w-full">
                <PartTop/>
                <NamePageComponent nama={"Profile"}/>

                <main className="flex-1 p-10 overflow-y-auto">
                    <div className="bg-white rounded-t-lg overflow-hidden border-[3px] border-gray-200">
                        <DescPageComponent desc={"Profile anda"}/>

                        <div className="flex bg-[#EEF0F5] h-[430px] p-10">
                            <div className="bg-white w-60 h-64 pt-8 rounded-lg p-10">
                                <img src="/assets_img/img_profile.png" className="m-auto w-40"/>
                                <p className="mt-5 ml-8 font-semibold">TB Adel Jaya</p>
                            </div>

                            <div className="bg-white w-[621px] h-72 rounded-lg p-8 ml-20">
                                <div className="flex mb-4">
                                    <p className="text-xs text-[#8C95A4] mr-[400px]">Informasi Pengguna</p>
                                    <button className="bg-[#F5365C] w-9 h-6 text-white rounded text-sm">Edit</button>
                                </div>

                                <div className="mb-3">
                                    <p className="text-xs mb-1">Nama</p>
                                    <div className="text-xs w-full rounded h-7 border
                                    border-[#8C95A4] text-[#8C95A4] pt-1 pl-3">
                                        <p>TB Adel Jaya</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-xs mb-1">Email</p>
                                    <div className="text-xs w-full rounded h-7 border
                                    border-[#8C95A4] text-[#8C95A4] pt-1 pl-3">
                                        <p>jaya@gmail.com</p>
                                    </div>
                                </div>

                                <div className="text-xs font-semibold mt-5">
                                    <p className="text-[#8C95A4] mb-1">Password</p>
                                    <p>Password</p>

                                    <div className="flex mt-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                             strokeWidth={1.5} stroke="currentColor" className="w-5 text-green-500 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round"
                                                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                        </svg>

                                        <p className="text-[#5D6571]">Password telah di tetapkan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}