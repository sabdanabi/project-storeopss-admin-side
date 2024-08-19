import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("token");

const getAllTransaksi = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/transactions/income`, {
            headers: {
                AUTHORIZATION: token,
                "ngrok-skip-browser-warning": true
            }
        });
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            return error.response.data;
        } else {
            return { error: "Failed to fetch transactions." };
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
        if (error.response && error.response.data) {
            return error.response.data;
        } else {
            return { error: "Failed to add income." };
        }
    }
};

// const getDetailIncomeTransaction = async () => {
//     try {
//         const response = await axios.get(`${baseUrl}/api/transactions/income`, {
//             headers: {
//                 AUTHORIZATION: token,
//                 "Content-Type": "application/json",
//                 "ngrok-skip-browser-warning": true
//             }
//         });
//
//         return response.data;
//     } catch (error) {
//         if (error.response && error.response.data) {
//             return error.response.data;
//         } else {
//             console.error('Error fetching transaction details:', error.message);
//             return { error: 'Failed to fetch transaction details' };
//         }
//     }
// };


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
        if (error.response && error.response.data) {
            return error.response.data;
        } else {
            console.error('Error:', error.message);
            return { error: 'Failed to update transaction status.' };
        }
    }
};


export { getAllTransaksi, addIncome, updateStatusTransaction};
