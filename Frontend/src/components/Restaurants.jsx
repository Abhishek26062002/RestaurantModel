import React from 'react';
import './Restaurants.css';
import Restaurant from './Restaurant';

const restaurants = [
    {
        id: 1,
        img: "https://via.placeholder.com/150",
        name: "Bella Italia",
        country: "Italy",
        cuisines: "Italian",
        cost: "$50"
    },
    {
        id: 2,
        img: "https://via.placeholder.com/150",
        name: "Spice of India",
        country: "India",
        cuisines: "Indian",
        cost: "$30"
    },
    {
        id: 3,
        img: "https://via.placeholder.com/150",
        name: "Sushi World",
        country: "Japan",
        cuisines: "Japanese",
        cost: "$70"
    },
    {
        id: 4,
        img: "https://via.placeholder.com/150",
        name: "Le Gourmet",
        country: "France",
        cuisines: "French",
        cost: "$90"
    },
    {
        id: 5,
        img: "https://via.placeholder.com/150",
        name: "El Ranchero",
        country: "Mexico",
        cuisines: "Mexican",
        cost: "$40"
    },
    {
        id: 6,
        img: "https://via.placeholder.com/150",
        name: "Golden Dragon",
        country: "China",
        cuisines: "Chinese",
        cost: "$60"
    }
];

const Restaurants = () => (
    <div className="card-container">
        {restaurants.map((restaurant) => (
            <Restaurant key={restaurant.id} {...restaurant} />
        ))}
    </div>
);

export default Restaurants
