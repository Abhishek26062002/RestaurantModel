import React from 'react';
import './RestaurantList.css';
import Restaurants from '../components/Restaurants';
import Filters from '../components/Filters';

const RestaurantList = () => {
  return (
    <div className='container'>
      <div className="search">
        <input type="text" placeholder="Search for Restaurants" />
        <button><img src="../src/assets/search.svg" alt="search" /></button>
      </div>
      <div className="body">
        <div className="filter">
          <h1>Filter</h1>
          <Filters />
        </div>
        <div className="restaurant-list">
          <Restaurants />
        </div>
      </div>
    </div>
  );
}

export default RestaurantList;