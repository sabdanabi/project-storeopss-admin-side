import axios from "axios";
import {toast} from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("token");

const getRecapProduct = async (year = null, month = null, page = 1, searchQuery = '') => {
    try {
        const response = await axios.get(`${baseUrl}/api/products/recap`, {
            headers: {
                AUTHORIZATION: token,
                "ngrok-skip-browser-warning": true
            },
            params: {
                year,
                month,
                ...(page && { page }),
                ...(searchQuery && { search: searchQuery }),

            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            toast.error("Anda belum login. Silakan login terlebih dahulu.");
            setTimeout(() => {
                window.location.href = "/login-page";
            }, 3000);
        } else {
            handleAxiosError(error);
        }
    }
};

// const getRecapAllProduct = async () => {
//     try {
//         const response = await axios.get(`${baseUrl}/api/products/recap?paginate=false`, {
//             headers: {
//                 AUTHORIZATION: token,
//                 "ngrok-skip-browser-warning": true
//             },
//         });
//         return response.data;
//     } catch (error) {
//         if (error.response && error.response.status === 401) {
//             toast.error("Anda belum login. Silakan login terlebih dahulu.");
//             setTimeout(() => {
//                 window.location.href = "/login-page";
//             }, 3000);
//         } else {
//             handleAxiosError(error);
//         }
//     }
// };

const getRecapProductById = async (productId) => {
    try {
        const response = await axios.get(`${baseUrl}/api/products/recap/${productId}`, {
            headers: {
                AUTHORIZATION: token,
                "ngrok-skip-browser-warning": true
            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            toast.error("Anda belum login. Silakan login terlebih dahulu.");
            setTimeout(() => {
                window.location.href = "/login-page";
            }, 3000);
        } else {
            handleAxiosError(error);
        }
    }
};

const handleAxiosError = (error) => {
    if (error.response) {
        console.error('Error response:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
    } else if (error.request) {
        console.error('Error request:', error.request);
    } else {
        console.error('Error message:', error.message);
    }
    console.error('Error config:', error.config);
};


export { getRecapProduct, getRecapProductById};