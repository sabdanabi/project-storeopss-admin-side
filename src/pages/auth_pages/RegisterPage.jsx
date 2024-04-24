export default function RegisterPage() {
    return (
        <div className="flex pt-20">
            <div className="ml-9">
                <div>
                    <img src="/assets_img/img_register.png" className="h-[490px] w-[800px]"/>
                </div>
                <p className="text-gray-500 font-semibold text-3xl ml-14">
                    Kelola bisnis anda dengan mudah
                    <span className="text-[#1A4F8B]">dimana pun</span> <br/> dan <span
                    className="text-[#1A4F8B]">kapan pun</span></p>
            </div>

            <div className=" drop-shadow-lg border-2 bg-white pt-10 pl-16 pr-16
            w-[550px] rounded-[20px] h-[600px] ml-12">
                <form className="">
                    <h2 className="font-semibold text-2xl mb-5">Register</h2>
                    <div className="">
                        <label htmlFor="username" className="block mb-1 text-sm">Username</label>
                        <input type="text" id="username" name="username"
                               className="border-[1.5px] w-[100%] h-[42px] rounded-lg mb-3" required/>
                    </div>
                    <div className="">
                        <label htmlFor="email" className="block mb-1">Email</label>
                        <input type="email" id="email" name="email"
                               className="border-[1.5px] w-[100%] h-[42px] rounded-lg mb-3" required/>
                    </div>
                    <div className="">
                        <label htmlFor="password" className="block mb-1">Password</label>
                        <input type="password" id="password" name="password"
                               className="border-[1.5px] w-[100%] h-[42px] rounded-lg mb-6" required/>
                    </div>
                    <button type="submit" className="bg-[#1A4F8B] w-[100%] h-[42px] rounded-lg text-white">Register
                    </button>
                    <div className="mt-10 w-[100%] pl-24">
                        <p className="text-xs">Apakah anda sudah memiliki akun? <a href="#"
                                                                                   className="font-bold">Login</a></p>
                    </div>
                </form>

                <button type="submit" className=" border-[1px] border-black w-[100%] h-[47px] rounded-full mt-10">
                    <img src="/assets_img/google_logo.png" className="h-[20px] w-[20px] absolute left-[30%]"/>
                    Lanjut Dengan Google
                </button>
            </div>
        </div>
    )
}