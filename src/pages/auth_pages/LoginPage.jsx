import LoginFormComponent from "../../components/auth_page_components/LoginFormComponent.jsx";

export default function LoginPage() {
    return (
        <div className="flex pt-20">
            <div className="ml-9">
                <div>
                    <img src="/assets_img/img_login.png" className="h-[490px] w-[800px]"/>
                </div>
                <p className="text-gray-500 font-semibold text-3xl ml-14">
                    Kelola bisnis anda dengan mudah
                    <span className="text-[#1A4F8B]">dimana pun</span> <br/> dan <span
                    className="text-[#1A4F8B]">kapan pun</span></p>
            </div>

            <LoginFormComponent/>
        </div>
    )
}