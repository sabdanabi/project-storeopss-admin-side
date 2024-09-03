// services/StatisticService.js
import axios from "axios";
import {toast} from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("token");


const getStatisticProductSell = async (year = null, month = null, sort = 'desc', page = 1, stockCategory = '') => {
    try {
        const response = await axios.get(`${baseUrl}/api/transactions/income/statistic`, {
            params: {
                year,
                month,
                sort,
                ...(page && { page }),
                ...(stockCategory && { category: stockCategory }),
            },
            headers: {
                AUTHORIZATION: token,
                "ngrok-skip-browser-warning": true
            },
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            toast.error("Anda belum login. Silakan login terlebih dahulu.");
            setTimeout(() => {
                window.location.href = "/login-page";
            }, 3000);         } else {
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

export { getStatisticProductSell };
