import { loginUser } from "../../services/AuthService.jsx";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';

export default function LoginFormComponent() {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const result = await loginUser(formData);
            localStorage.setItem("token", result.data.token);
            setSuccess(true);
            navigate('/');
        } catch(e) {
            console.log(e);
            setSuccess(false);
            setError(e.response?.data?.error || "An error occurred");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="drop-shadow-lg border-2 bg-white pt-10 pl-16 pr-16 w-[550px] rounded-[20px] h-[600px] ml-12">
                <form onSubmit={handleSubmit}>
                    <h2 className="font-semibold text-2xl mb-5">Login</h2>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                    {success && (
                        <p className="text-green-500 text-center mb-4">Login success!</p>
                    )}
                    <div>
                        <label htmlFor="name" className="block mb-1">Username</label>
                        <input id="name" type="text"
                               value={formData.name} onChange={handleChange}
                               className="border-[1.5px] w-[100%] h-[42px] rounded-lg mb-3" required/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1">Password</label>
                        <input type="password" id="password"
                               value={formData.password} onChange={handleChange}
                               className="border-[1.5px] w-[100%] h-[42px] rounded-lg mb-6" required/>
                    </div>

                    <div className="flex items-center justify-between">
                        {isLoading ? (
                            <button type="button" className="bg-[#1A4F8B] w-[100%] h-[42px] rounded-lg text-white flex items-center justify-center">
                                <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='sm'
                                />
                                <span className="ml-2">Loading...</span>
                            </button>
                        ) : (
                            <button type="submit" className="bg-[#1A4F8B] w-[100%] h-[42px] rounded-lg text-white">
                                Login
                            </button>
                        )}
                    </div>

                    <div className="mt-10 w-[100%] pl-24">
                        {/*<p className="text-xs">Apakah anda belum memiliki akun? <a href="#"*/}
                        {/*                                                               className="font-bold">Register</a>*/}
                        {/*    </p>*/}
                    </div>
                </form>

                {/*<button type="submit" className="border-[1px] border-black w-[100%] h-[47px] rounded-full mt-10">*/}
                {/*    <img src="/assets_img/google_logo.png" className="h-[20px] w-[20px] absolute left-[30%]"/>*/}
                {/*    Lanjut Dengan Google*/}
                {/*</button>*/}
            </div>
        </>
    );
}
