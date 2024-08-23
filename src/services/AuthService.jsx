import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("token");

const loginUser = async ({name, password}) => {

    const response = await axios.post(
        `${baseUrl}/api/login`,
        {
            name: name,
            password: password,
        },
        {
            headers: {
                "ngrok-skip-browser-warning": true,
            },
        }
    );
    return response.data;
};

const logOutUser = async () => {
    try {
        const response = await axios.delete(`${baseUrl}/api/logout`, {
            headers: {
                AUTHORIZATION: token,
                "ngrok-skip-browser-warning": true,
            },
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            return { error: "Unauthorized." };
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

export { loginUser, logOutUser };