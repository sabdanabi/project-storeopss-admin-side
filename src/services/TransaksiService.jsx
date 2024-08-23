import axios from "axios";
import {toast} from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("token");

const getAllTransaksi = async (page = 1) => {
    try {
        const response = await axios.get(`${baseUrl}/api/transactions/income`, {
            headers: {
                AUTHORIZATION: token,
                "ngrok-skip-browser-warning": true
            },
            params: {
                page: page
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
            console.error('Error:', error.message);
        }
    }
};

const addIncome = async (data) => {
    try {
        const response = await axios.post(`${baseUrl}/api/transactions/income`, data, {
            headers: {
                AUTHORIZATION: token,
                "Content-Type": "application/json",
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
            console.error('Error:', error.message);
        }
    }
};

const  getAllProductTransaktion = async () =>  {
    try {
        const response = await axios.get(`${baseUrl}/api/products?paginate=false`, {
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
            }, 3000);
        } else {
            console.error('Error:', error.message);
        }
    }
};

const getAllNotaTransaksi = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/transactions/income?paginate=false`, {
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
            }, 3000);
        } else {
            console.error('Error:', error.message);
        }
    }
};


const updateStatusTransaction = async (transactionId, status) => {
    try {
        const response = await axios.post(`${baseUrl}/api/transactions/status/${transactionId}`, {
            status: status
        }, {
            headers: {
                AUTHORIZATION: token,
                "Content-Type": "application/json",
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
            console.error('Error:', error.message);
        }
    }
};


export { getAllTransaksi, addIncome,
    updateStatusTransaction, getAllProductTransaktion,
    getAllNotaTransaksi};
