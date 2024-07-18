import React from 'react';
import './RestaurantDetails.css';
import { useParams } from 'react-router-dom';

const RestaurantDetails = () => {
    const { id } = useParams();

    // Assuming you have a function to fetch restaurant details by ID from an API or data source
    const fetchRestaurantDetails = (id) => {
        // Simulated data fetching, replace with actual API call
        return {
            img: `https://via.placeholder.com/150?id=${id}`,
            name: "Restaurant Name",
            country: "Country Name",
            cuisines: "Cuisine Type",
            cost: "$ Cost",
            rating: "⭐⭐⭐⭐"
        };
    };

    const restaurant = fetchRestaurantDetails(id);

    return (
        <div className="restaurant-details-container">
            <div className="background-image">
                <div className="profile-pic-box">
                    <img src={restaurant.img} alt="Profile" />
                    <h2>{restaurant.name}</h2>
                </div>
            </div>
            <div className="details-section">
                <div className="restaurant-info">
                    <h3>Restaurant Information</h3>
                    <p>Country: {restaurant.country}</p>
                    <p>Cuisines: {restaurant.cuisines}</p>
                    <p>Cost for Two: {restaurant.cost}</p>
                    <p>Rating: {restaurant.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;
