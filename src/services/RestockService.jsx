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
        console.error(error.response ? error.response.data : error.message);
        throw error;
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
        console.error('Error fetching restock history:', error.response ? error.response.data : error.message);
        throw error;
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
        console.error('Error fetching restock history:', error.response ? error.response.data : error.message);
        throw error;
    }
};



export { addRestockProduct, getRestockHistory, getAllRestockHistory };