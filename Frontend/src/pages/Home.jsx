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
    <div className='home'>
      <img src="https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png" className="video" alt="Background" />
      <div className='title'>
        <h1>ViyyalaVariVindhu</h1>
        <p>Discover the best food & drinks in Visakhapatnam</p>
        <button onClick={handleViewRestaurants}>View Restaurants</button>
      </div >
      <div ref={restaurantListRef}>
        <RestaurantList />
      </div>
    </div>
  );
};

export default Home;
