import axios from "axios";
import {toast} from "react-toastify";

const baseUrl = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("token");

const getAllTransaksi = async (page = 1, range = null, paid = null, searchQuery = '') => {
    try {
        const response = await axios.get(`${baseUrl}/api/transactions/income`, {
            headers: {
                AUTHORIZATION: token,
                "ngrok-skip-browser-warning": true,
            },
            params: {
                ...(page && { page }),
                ...(range && { range }),
                ...(paid !== null && { paid }),
                ...(searchQuery && { search: searchQuery }),
            }
        });

        return response.data;
    } catch (error) {
        if (error.response?.status === 401) {
            toast.error("Anda belum login. Silakan login terlebih dahulu.");
            setTimeout(() => {
                window.location.href = "/login-page";
            }, 3000);
        } else if (error.response?.data?.error) {
            toast.error(error.response.data.error);
        } else {
            console.error('Error:', error.message);
            toast.error("Terjadi kesalahan. Silakan coba lagi.");
        }
        return null;  // Pastikan untuk mengembalikan null jika terjadi kesalahan
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

const getTransactionById = async (transactionId) => {
    try {

        const response = await axios.get(`${baseUrl}/api/transactions/income/${transactionId}`, {
            headers: {
                AUTHORIZATION: token,
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": true
            }
        });
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.message);
    }
};

const finishTransaction = async (transactionId) => {
    try {

        const response = await axios.post(`${baseUrl}/api/transactions/finish/${transactionId}`, {
            "is_finished": true
        }, {
            headers: {
                AUTHORIZATION: token,
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": true
            }
        });
        return response.data;
        
    } catch (error) {
        console.error('Error:', error.message);
    }
}


export { getAllTransaksi, addIncome,
    updateStatusTransaction, getAllProductTransaktion,
    getAllNotaTransaksi, getTransactionById, finishTransaction };
