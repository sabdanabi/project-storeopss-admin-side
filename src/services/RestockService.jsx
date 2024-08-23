import axios from "axios";

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
            window.location.href = "/login-page";
        } else {
            console.error(error.response ? error.response.data : error.message);
        }
    }
}

const getRestockHistory = async (page = 1) => {
    try {
        const response = await axios.get(`${baseUrl}/api/products/histories/restock`, {
            headers: {
                Authorization: token,
                'ngrok-skip-browser-warning': true
            },
            params: {
                page: page
            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            window.location.href = "/login-page";
        } else {
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
            window.location.href = "/login-page";
        } else {
            console.error(error.response ? error.response.data : error.message);
        }
    }
};



export { addRestockProduct, getRestockHistory, getAllRestockHistory };