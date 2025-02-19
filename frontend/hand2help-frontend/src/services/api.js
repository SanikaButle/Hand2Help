import axios from 'axios';

const API_BASE_URL = "http://localhost:5000"; // Flask server

export const fetchData = async () => {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
};
