import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("token");

const getRecapProduct = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/products/recap`, {
            headers: {
                AUTHORIZATION: token,
                "ngrok-skip-browser-warning": true
            },
        });
        return response.data;
    } catch (error) {
        handleAxiosError(error);
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


export { getRecapProduct };