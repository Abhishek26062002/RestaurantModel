import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Restaurants.css';
import axios from 'axios';

const fetchRestaurants = async () => {
  try {
    const response = await axios.get('http://localhost:8000/restaurants');
    return (
      <div className="restaurant-details-container">
      <img src={response.thumb} alt={name} />
      <h3>{response.name}</h3>
      <p>Country: {response.location}</p>
      <p>Cuisines: {response.cuisines}</p>
      <p>Cost for Two Persons: {response.average_cost_for_two}</p>
      </div>
    )
  } catch (err) {
    console.error(err);
  }
};
const Restaurant = ({ id, img, name, country, cuisines, cost }) => {
  return (
    <Link to={`/restaurant/${id}`} className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Country: {country}</p>
      <p>Cuisines: {cuisines}</p>
      <p>Cost for Two Persons: {cost}</p>
    </Link>
  );
};

export default Restaurant
