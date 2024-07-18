// import React from 'react';
// import './RestaurantList.css';
// import Restaurants from '../components/Restaurants';
 

// const RestaurantList = () => {
//   return (
//     <div className='container'>
//       <div className="search">
//         <input type="text" placeholder="Search for Restaurants" />
//         <button><img src="../src/assets/search.svg" alt="search" /></button>
//       </div>
//       <div className="body">
//         <div className="filter"></div>
//         <div className="restaurant-list">
//            <Restaurants />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RestaurantList;

import React from 'react';
import './RestaurantList.css';
import Restaurants from '../components/Restaurants';

const RestaurantList = () => {
  return (
    <div className='container'>
      <div className="search">
        <input type="text" placeholder="Search for Restaurants" />
        <button><img src="../src/assets/search.svg" alt="search" /></button>
      </div>
      <div className="body">
        <div className="filter"></div>
        <div className="restaurant-list">
          <Restaurants />
        </div>
      </div>
    </div>
  );
}

export default RestaurantList;








// import React, { useState } from 'react';
// import './RestaurantList.css';
// import Restaurants from '../components/Restaurants';

// const RestaurantList = () => {
//   const [selectedRestaurant, setSelectedRestaurant] = useState(null);

//   const handleCardClick = (restaurant) => {
//     setSelectedRestaurant(restaurant);
//   };

//   return (
//     <div className='container'>
//       <div className="search">
//         <input type="text" placeholder="Search for Restaurants" />
//         <button><img src="../src/assets/search.svg" alt="search" /></button>
//       </div>
//       <div className="body">
//         <div className="filter"></div>
//         <div className="restaurant-list">
//           {Restaurants.map((restaurant, index) => (
//             <div key={index} className="restaurant-item" onClick={() => handleCardClick(restaurant)}>
//               <h3>{restaurant.name}</h3>
//               <p>{restaurant.shortDescription}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       {selectedRestaurant && (
//         <div className="restaurant-details">
//           <h2>{selectedRestaurant.name}</h2>
//           <p>{selectedRestaurant.description}</p>
//           <button onClick={() => setSelectedRestaurant(null)}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default RestaurantList;
