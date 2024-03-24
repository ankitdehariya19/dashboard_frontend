import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: BASE_URL,
});

const fetchData = async () => {
  try {
    const response = await api.get('/dashboard');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Remove unnecessary re-throw if handled in DashboardPage
  }
};

export { fetchData };
