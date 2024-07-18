import React from 'react';
import './Restaurants.css';
import Restaurant from './Restaurant';
import useFetchRestaurant from './FetchRestaurants';







const restaurants = [
    {
        id: 1,
        img: "https://b.zmtcdn.com/data/pictures/2/308322/cf86dbd8b8ca4d40682c7713f112cc07_featured_v2.jpg",
        name: "Hauz Khas Social",
        country: "India",
        cuisines: "Continental, American, Asian, North Indian",
        cost: 1600
    },
    {
        id: 2,
        img: "https://b.zmtcdn.com/data/pictures/7/18037817/235a118e0c275deae64db9a2a4b3d6a2_featured_v2.png",
        name: "Spice of India",
        country: "India",
        cuisines: "Indian",
        cost: "$30"
    },
    {
        id: 3,
        img: "https://b.zmtcdn.com/data/pictures/5/312345/0345d29e190502c100190e455b4334a7_featured_v2.jpg",
        name: "Sushi World",
        country: "Japan",
        cuisines: "Japanese",
        cost: "$70"
    },
    {
        id: 4,
        img: "https://b.zmtcdn.com/data/pictures/0/307490/e00bae6487490c53d94f6bf18aa85a62_featured_v2.jpg",
        name: "Le Gourmet",
        country: "France",
        cuisines: "French",
        cost: "$90"
    },
    {
        id: 5,
        img: "https://b.zmtcdn.com/data/pictures/7/18241537/9f5a933de4086e99a0917d4b659d7537_featured_v2.jpg",
        name: "El Ranchero",
        country: "Mexico",
        cuisines: "Mexican",
        cost: "$40"
    },
    {
        id: 6,
        img: "https://b.zmtcdn.com/data/pictures/7/18161577/d40268f4980f3e53349bca7055b87124_featured_v2.jpg",
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
