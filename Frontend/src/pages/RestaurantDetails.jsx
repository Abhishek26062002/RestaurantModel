import React, { useState, useEffect } from 'react';
import './RestaurantDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const RestaurantDetails = () => {
    const { id } = useParams(); // Get the restaurant ID from the URL
    const [restaurant, setRestaurant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRestaurant = async () => {
            try {
                const response = await axios.get(`https://restaurantmodel.onrender.com/restaurants/${id}`);
                setRestaurant(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchRestaurant();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching restaurant details: {error.message}</p>;

    return (
        restaurant && (
            <div className="restaurant-details-container">
                <div className="background-image">
                    <img className = "image"src={restaurant.thumb} alt="" />
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
                        <p>City: {restaurant.location_city}</p>
                        <p>Address: {restaurant.location_address}</p>
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
        )
    );
};

export default RestaurantDetails;
