import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("token");

const addNewProduct = async (formData) => {
    try {
        const response = await axios.post(`${baseUrl}/api/products`, formData, {
            headers: {
                AUTHORIZATION: token,
                "Content-Type": "multipart/form-data",
                "ngrok-skip-browser-warning": true
            },
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            window.location.href = "/login-page";
        } else {
            handleAxiosError(error);
        }
    }
};


const getAllProduct = async (page = 1) =>  {
    try {
        const response = await axios.get(`${baseUrl}/api/products`, {
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
            window.location.href = "/login-page";
        } else {
            handleAxiosError(error);
        }
    }
};

const deleteProduct = async (productId) => {
    try {
        const response = await axios.delete(`${baseUrl}/api/products/${productId}`, {
            headers: {
                AUTHORIZATION: token,
                "ngrok-skip-browser-warning": true
            },
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            window.location.href = "/login-page";
        } else {
            handleAxiosError(error);
        }
    }
};

const editProduct = async (productId, formData) => {
    try {
        const response = await axios.post(`${baseUrl}/api/products/${productId}`, formData, {
            headers: {
                AUTHORIZATION: token,
                "Content-Type": "multipart/form-data",
                "ngrok-skip-browser-warning": true
            },
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            window.location.href = "/login-page";
        } else {
            handleAxiosError(error);
        }
    }
};

const getProductById = async (productId) => {
    try {
        const response = await fetch(`${baseUrl}/api/products/${productId}`, {
            method: 'GET',
            headers: {
                AUTHORIZATION: token,
                "Content-Type": "application/json",
                "ngrok-skip-browser-warning": true
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch product');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            window.location.href = "/login-page";
        } else {
            handleAxiosError(error);
        }
    }
};

const getHistoryAddProduct = async (page = 1) => {
    try {
        const response = await axios.get(`${baseUrl}/api/products/histories/add`, {
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
            window.location.href = "/login-page";
        } else {
            handleAxiosError(error);
        }
    }
};

const getHistoryAddProductAll = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/products/histories/add?paginate=false`, {
            headers: {
                AUTHORIZATION: token,
                "ngrok-skip-browser-warning": true
            },
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            window.location.href = "/login-page";
        } else {
            handleAxiosError(error);
        }
    }
};


const importProductExcel = async (formData) => {
    try {
        const response = await axios.post(`${baseUrl}/api/products/import`, formData, {
            headers: {
                AUTHORIZATION: token,
                "Content-Type": "multipart/form-data",
                "ngrok-skip-browser-warning": true
            },
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            window.location.href = "/login-page";
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

export { getAllProduct, addNewProduct, deleteProduct,
    editProduct, getProductById, getHistoryAddProduct, importProductExcel,
    getHistoryAddProductAll};
