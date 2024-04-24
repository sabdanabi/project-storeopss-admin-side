export default function LoginFormComponent() {
    return (
        <>
            <div className=" drop-shadow-lg border-2 bg-white pt-10 pl-16 pr-16
            w-[550px] rounded-[20px] h-[600px] ml-12">
                <form className="">
                    <h2 className="font-semibold text-2xl mb-5">Login</h2>
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
                    <button type="submit" className="bg-[#1A4F8B] w-[100%] h-[42px] rounded-lg text-white">Login
                    </button>
                    <div className="mt-10 w-[100%] pl-24">
                        <p className="text-xs">Apakah anda belum memiliki akun? <a href="#"
                                                                                   className="font-bold">Register</a>
                        </p>
                    </div>
                </form>

                <button type="submit" className=" border-[1px] border-black w-[100%] h-[47px] rounded-full mt-10">
                    <img src="/assets_img/google_logo.png" className="h-[20px] w-[20px] absolute left-[30%]"/>
                    Lanjut Dengan Google
                </button>
            </div>
        </>
    )
}