import React from "react";
import ReactDOM from "react-dom/client";

// Header Component which contains Logo and Navigation component

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          className="img-align"
          src="https://img.freepik.com/premium-vector/fast-food-delivery-vector-logo_1012247-128.jpg"
        />
      </div>
      <div className="nav-align">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// Body component which contains a search bar and Restaurant container.
// Inside the Restaurant container there will diff splits such as Restaurant Cards
// Restaurants card will be a seperate component so we can reuse it and it will have a Image, name , description, ratings , etc fields

// const RestaurantCard = (props) => {
//   console.log(props);

//   return (
//     <div className="res-card">
//       <img
//         className="res-image"
//         src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_324,c_fill/eeycnbknf1musimagw35"
//       />
//       <div className="res-name">{props.resName}</div>
//       <div className="res-description">{props.cusine}</div>
//       <div className="res-description">{props.reviews}</div>
//       <div className="res-description">{props.deliveryTime}</div>
//     </div>
//   );
// };

// rendering dynamic data

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cuisines, image_url, name, average_ratings, delivery_time } = resData; // destructuring to make the code more efficient
  console.log(resData);

  return (
    <div className="res-card">
      <img className="res-image" src={image_url} />
      <div className="res-name">{name}</div>
      <div className="res-description">{cuisines.join(", ")}</div>
      <div className="res-description">{average_ratings}</div>
      <div className="res-description">{delivery_time} minutes</div>
    </div>
  );
};

const RestObj = [
  {
    id:1,
    name: "Spice Delight",
    cuisines: ["Indian", "Chinese"],
    delivery_time: 30,
    average_ratings: 4.5,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/3/13/eebfad22-8ef2-4201-9782-50fb9c1b0767_3d4af9d4-962e-46fd-a44b-61653b462d60.jpeg",
  },
  {
    id:2,
    name: "Tandoori Flames",
    cuisines: ["Indian", "BBQ"],
    delivery_time: 40,
    average_ratings: 4.2,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qgck9fzi17ljdvwboljb",
  },
  {
    id:3,
    name: "Sushi World",
    cuisines: ["Japanese", "Seafood"],
    delivery_time: 35,
    average_ratings: 4.7,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/04f41c92-c15d-4e39-a8d2-9804d5d3172b_51052.jpg",
  },
  {
    id:4,
    name: "Pizza Mania",
    cuisines: ["Italian", "Fast Food"],
    delivery_time: 25,
    average_ratings: 4.3,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jfljqcznsatkyqlf5yim",
  },
  {
    id:5,
    name: "Burger Hub",
    cuisines: ["American", "Fast Food"],
    delivery_time: 20,
    average_ratings: 4.6,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/2/b94fa9dd-b288-4a3d-8d5b-5fd8bd44176c_948136.jpg",
  },
  {
    id:6,
    name: "Green Bowl",
    cuisines: ["Healthy", "Salads"],
    delivery_time: 15,
    average_ratings: 4.8,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jzv2j1wbhg8bieird4tw",
  },
  {
    id:7,
    name: "Taco Fiesta",
    cuisines: ["Mexican", "Street Food"],
    delivery_time: 30,
    average_ratings: 4.4,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gt8ns8krvnryyo6rxru9",
  },
  {
    id:8,
    name: "Pasta Lovers",
    cuisines: ["Italian", "Continental"],
    delivery_time: 35,
    average_ratings: 4.1,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/c2ad94e7e1f01764a5e80534bcc9284d",
  },
  {
    id:9,
    name: "Wok & Roll",
    cuisines: ["Chinese", "Thai"],
    delivery_time: 40,
    average_ratings: 4.3,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fvxeg8wezgowcit6tsyo",
  },
  {
    id:10,
    name: "Biryani House",
    cuisines: ["Indian", "Mughlai"],
    delivery_time: 45,
    average_ratings: 4.7,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/jzv2j1wbhg8bieird4tw",
  },
  {
    id:11,
    name: "Vegan Delight",
    cuisines: ["Vegan", "Organic"],
    delivery_time: 20,
    average_ratings: 4.9,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/04f41c92-c15d-4e39-a8d2-9804d5d3172b_51052.jpg",
  },
  {
    id:12,
    name: "Grill & Chill",
    cuisines: ["BBQ", "Steakhouse"],
    delivery_time: 50,
    average_ratings: 4.2,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/2/9f270725-ad02-42a2-b3ec-6f8da12dc147_70248.JPG",
  },
  {
    id:13,
    name: "Street Dosa",
    cuisines: ["South Indian", "Fast Food"],
    delivery_time: 25,
    average_ratings: 4.5,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/8/30/b5d00860-bcfc-4dd5-8beb-c47fa7811a95_944432.jpg",
  },
  {
    id:14,
    name: "Dessert Kingdom",
    cuisines: ["Bakery", "Desserts"],
    delivery_time: 15,
    average_ratings: 4.8,
    image_url:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/18/e83494ee-3c0b-4194-abd3-4619fa906aab_23682.jpg",
  },
];

//   <div className="res-container">{RestaurantCard({resName:"Express Foods", cusine:"Biriyani, Asian", deliveryTime:"38 minutes", reviews : "4.4 stars"})}{RestaurantCard({resName:"KFC", cusine:"Fast Foods , Bugers", deliveryTime:"22 minutes", reviews : "4.1 stars"})}</div>

//<div className="res-container"> <RestaurantCard resData={RestObj}/> </div>

// dymic way to call all the data , here restObj is the array of objects and the resData is the object which is passed to the RestaurantCard component

// key is used to uniquely identify the component, the key here is id field from the restObj , dont use index as key as it will cause issues when the data is updated

//  RestObj.map((element) => (
//       <RestaurantCard key={element.id}, resData={element} />
//      ))

// Body Component

const BodyComponent = () => {
  return (
    <div className="body-container">
      <div className="search-bar">
        <input
          type="text"
          className="search"
          placeholder="Search for restaurants"
        />
      </div>

      <div className="res-container">
        {RestObj.map((element) => (
          <RestaurantCard key={element.id} resData={element} />
        ))}
      </div>
    </div>
  );
};

// Top level component
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
