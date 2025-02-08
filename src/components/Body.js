// RestaurantCard component is imported and used in the BodyComponent and it is a default export

import RestaurantCard from "./Restaurant-Card.js";

import { restaurantList } from "../utils/mockData.js";

import { useState } from "react";

//   <div className="res-container">{RestaurantCard({resName:"Express Foods", cusine:"Biriyani, Asian", deliveryTime:"38 minutes", reviews : "4.4 stars"})}{RestaurantCard({resName:"KFC", cusine:"Fast Foods , Bugers", deliveryTime:"22 minutes", reviews : "4.1 stars"})}</div>

//<div className="res-container"> <RestaurantCard resData={restaurantList}/> </div>

// dymic way to call all the data , here restaurantList is the array of objects and the resData is the object which is passed to the RestaurantCard component

// key is used to uniquely identify the component, the key here is id field from the restaurantList , dont use index as key as it will cause issues when the data is updated

//  restaurantList.map((element) => (
//       <RestaurantCard key={element.id}, resData={element} />
//      ))

// Body Component

// Declaring state variable using useState hook



export const BodyComponent = () => {

  // useState hook is used to declare state variable and set the state variable and it should be called inside the export function
  
  // restLists is the state variable and setRestLists is the function to set the state variable and

  //  restaurantList is the initial value of the state variable coming from the mockData.js file

  const [restLists, setRestLists] = useState(restaurantList);

  return (
    <div className="body-container">
      <div className="button-align">
        <button
          className="button1"
          onClick={() => {
            
            const filterdValue = restLists.filter((element) => element?.data?.avgRating > 4);
            console.log(filterdValue);
            setRestLists(filterdValue);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {restLists.map((element) => (
          <RestaurantCard key={element.data.id} resData={element} />
        ))}
      </div>
    </div>
  );
};
