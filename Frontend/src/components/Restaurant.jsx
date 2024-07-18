import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Restaurants.css';

const Restaurant = ({ id, img, name, country, cuisines, cost }) => {
  return (
    <Link to={`/restaurant/${id}`} className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>City: {country}</p>
      <p>Cuisines: {cuisines}</p>
      <p>Cost for Two Persons: {cost}</p>
    </Link>
  );
};

export default Restaurant;
