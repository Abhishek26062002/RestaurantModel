import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchRestaurant = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurants = async () => {
            try {
                const response = await axios.get('https://restaurantmodel.onrender.com/restaurants');
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurants();
    }, []);

    return { data, loading, error };
};

export default useFetchRestaurant;
