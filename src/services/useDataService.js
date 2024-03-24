// services/useDataService.js

import { useState, useEffect } from 'react';
import axios from 'axios';

const useDataService = (filters) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:8000/api/dashboard', {
          params: filters, // Pass filters as parameters to the API
        });
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  return { data, loading, error };
};

export default useDataService;
