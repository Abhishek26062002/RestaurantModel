// import React from 'react'
// import '../App.css'
// import RestaurantList from './RestaurantList'

// const Home = () => {
//   return (
//     <div>
//       {/* <video src="../src/assets/video1.mp4" className='video'
//       autoPlay loop muted></video> */}
//       <img src="src\assets\abhishekimg.jpg" class="video"/>
//       <div className='title'>
//         <h1>ViyyalaVariVindhu</h1>
//         <button>View Restaurants</button>
//       </div >
//       <RestaurantList />
//     </div>
//   )
// }

// export default Home

import React, { useRef } from 'react';
import '../App.css';
import RestaurantList from './RestaurantList';

const Home = () => {
  const restaurantListRef = useRef(null);

  const handleViewRestaurants = () => {
    restaurantListRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      {/* <video src="../src/assets/video1.mp4" className='video'
      autoPlay loop muted></video> */}
      <img src="src/assets/abhishekimg.jpg" className="video" alt="Background" />
      <div className='title'>
        <h1>ViyyalaVariVindhu</h1>
        <button onClick={handleViewRestaurants}>View Restaurants</button>
      </div >
      <div ref={restaurantListRef}>
        <RestaurantList />
      </div>
    </div>
  );
};

export default Home;
