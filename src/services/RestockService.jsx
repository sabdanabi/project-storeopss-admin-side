import axios from "axios";
import {toast} from "react-toastify";
import dayjs from "dayjs";

const baseUrl = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("token");

const addRestockProduct = async (productId, restockData) => {
    try {
        const response = await axios.post(`${baseUrl}/api/products/${productId}/restock`,
            restockData,
            {
             headers:{
                 Authorization: token,
                 "ngrok-skip-browser-warning": true
             }
            });
        return response.data;
    }catch (error) {
        if (error.response && error.response.status === 401) {
            toast.error("Anda belum login. Silakan login terlebih dahulu.");
            setTimeout(() => {
                window.location.href = "/login-page";
            }, 3000);         } else {
            console.error(error.response ? error.response.data : error.message);
        }
    }
}

const getRestockHistory = async (page = 1, range = null, searchQuery = '', from = null, to = null) => {
    try {
        const formattedFromDate = from ? dayjs(from).format('YYYY-MM-DD') : null;
        const formattedToDate = to ? dayjs(to).format('YYYY-MM-DD') : null;

        const response = await axios.get(`${baseUrl}/api/products/histories/restock`, {
            headers: {
                Authorization: token,
                'ngrok-skip-browser-warning': true
            },
            params: {
                ...(page && { page }),
                ...(range && { range }),
                ...(searchQuery && { search: searchQuery }),
                ...(formattedFromDate && { from: formattedFromDate }),
                ...(formattedToDate && { to: formattedToDate }),
            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            toast.error("Anda belum login. Silakan login terlebih dahulu.");
            setTimeout(() => {
                window.location.href = "/login-page";
            }, 3000);         } else {
            console.error(error.response ? error.response.data : error.message);
        }
    }
};

const getAllRestockHistory = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/products/histories/restock?paginate=false`, {
            headers: {
                Authorization: token,
                'ngrok-skip-browser-warning': true
            },
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            toast.error("Anda belum login. Silakan login terlebih dahulu.");
            setTimeout(() => {
                window.location.href = "/login-page";
            }, 3000);         } else {
            console.error(error.response ? error.response.data : error.message);
        }
    }
};



export { addRestockProduct, getRestockHistory, getAllRestockHistory };