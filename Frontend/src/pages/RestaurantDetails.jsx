import React from 'react';
import './RestaurantDetails.css';
import { useParams } from 'react-router-dom';
import useFetchRestaurant from '../components/FetchRestaurants'; // Import the custom hook


const RestaurantDetails = () => {
    const { data: restaurants, loading, error } = useFetchRestaurant(); 

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching restaurant details: {error.message}</p>;

    return (
        <div className="restaurant-list-container">
            {restaurants.map(restaurant => (
                <div key={restaurant.id} className="restaurant-details-container">
                    <div className="background-image">
                        <div className="profile-pic-box">
                            <img src={restaurant.thumb} alt={restaurant.name} />
                            <h2>{restaurant.name}</h2>
                        </div>
                    </div>
                    <div className="details-section">
                        <div className="restaurant-info">
                            <h3>Restaurant Information</h3>
                            <p>Name: {restaurant.name}</p>
                            <p>Cuisines: {restaurant.cuisines}</p>
                            <p>Cost for Two: {restaurant.average_cost_for_two}</p>
                            <p>Rating: {restaurant.user_rating_aggregate_rating}</p>
                            <p>City : {restaurant.location_city}</p>
                            <p>Adress : {restaurant.location_address}</p>
                        </div>
                        <div className="menu">
                            <a href={restaurant.menu_url} target="_blank" rel="noopener noreferrer">
                                <button>Menu</button>
                            </a>
                            <br /><br />
                            <a href={restaurant.url} target="_blank" rel="noopener noreferrer">
                                <button>Website</button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RestaurantDetails;