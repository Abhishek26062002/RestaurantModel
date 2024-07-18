import React from 'react';
import './Restaurants.css';
import Restaurant from './Restaurant';
import useFetchRestaurant from '../components/FetchRestaurants'; // Import the custom hook

const Restaurants = () => {
    const { data: restaurants, loading, error } = useFetchRestaurant(); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching restaurant details: {error.message}</p>;

    return (
        <div className="card-container">
            {restaurants.map((restaurant) => (
                <Restaurant
                    key={restaurant.id}
                    id={restaurant.id}
                    img={restaurant.thumb}
                    name={restaurant.name}
                    country={restaurant.location_city}
                    cuisines={restaurant.cuisines}
                    cost={restaurant.average_cost_for_two}
                />
            ))}
        </div>
    );
};

export default Restaurants;
