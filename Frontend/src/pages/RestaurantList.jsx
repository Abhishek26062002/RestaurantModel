import React from 'react';
import './RestaurantList.css';
import Restaurants from '../components/Restaurants';
import Filters from '../components/Filters';

const RestaurantList = () => {
  return (
    <div className='container'>
      <div className="search">
        <input type="text" placeholder="Search for Restaurants" />
        <button><i class='bx bx-search-alt'></i></button>
      </div>
      <div className="body">
        <div className="restaurant-list">
          <Restaurants />
        </div>
      </div>
    </div>
  );
}

export default RestaurantList;