import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchRestaurant = (id = null) => {
  const [data, setData] = useState(id ? null : []);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const response = id
          ? await axios.get(`http://localhost:8000/restaurants/${id}`)
          : await axios.get('http://localhost:8000/restaurants');
        setData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [id]);

  return { data, loading, error };
};

export default useFetchRestaurant;