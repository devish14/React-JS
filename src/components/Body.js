// RestaurantCard component is imported and used in the BodyComponent and it is a default export

import RestaurantCard from "./Restaurant-Card.js";

import { restaurantList } from "../utils/mockData.js";

import { useState, useEffect } from "react";

import Shimmer from "./Shimmer.js";
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
  console.log("Body rendered");

  // useState hook is used to declare state variable and set the state variable and it should be called inside the export function

  // restLists is the state variable and setRestLists is the function to set the state variable and

  //  restaurantList is the initial value of the state variable coming from the mockData.js file

  // const [restLists, setRestLists] = useState(restaurantList); here i am passing by mock data

  // const [restLists, setRestLists] = useState([]); here i am passing empty array because i am fetching data from api and setting the state variable

  const [restLists, setRestLists] = useState([]);
  const [filteredRestLists, setFilteredRestLists] = useState([]);
  const [searchType, setSearchType] = useState("");

  // Using useEffect hook to fetch the data from the API and set the state variable

  // Live swiggy API is used to fetch the data and set the state variable

  // getting the live data from api and also the data from the mockData.js file so to get more data

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonResponse = await response.json();
    const liveData =
      jsonResponse?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const updatedData = [...liveData, ...restaurantList];
    setRestLists(updatedData);
    setFilteredRestLists(updatedData);
    console.log(updatedData);
  };

  // Conditional rendering is used to check whether the data is loaded or not

  // if(restLists.length === 0){
  //   // return <h1>Loading the content ....</h1> instead of h1 tag we can use shimmer component as it gives a skeleton view of the content

  //   return <Shimmer />
  // }

  //  using ternary operator to check the condition and render the content accordingly

  return restLists.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="body-wrapper">
        <div className="search-bar">
          <input
            type="text"
            className="search-type"
            value={searchType}
            onChange={(e) => {
              setSearchType(e.target.value);
            }}
          />
          <button
            className="button-search"
            onClick={() => {
              // here i am using restLists to filter the data and set the filtered data to the state variable filteredRestLists becoz in restLists i will get all the
              // restaurtants details and in filteredRestLists i will get only the filtered data. This filteredData is a copy of the restLists and i am filtering the data based on the searchType

              const searchFilterValue = restLists.filter((element) =>
                element?.info?.name
                  .toLowerCase()
                  .includes(searchType.toLowerCase())
              );
              setFilteredRestLists(searchFilterValue);
            }}
          >
            Search
          </button>
        </div>
        <div className="button-align">
          <button
            className="button1"
            onClick={() => {
              const filterdValue = restLists.filter(
                (element) => element?.info?.avgRating > 4.3
              );
              console.log(filterdValue);
              setRestLists(filterdValue);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>

      <div className="res-container">
        {/* here i am using the filteredRestLists to map the data and pass the data to the RestaurantCard component insted of RestLists becoz filteredRestLists
      has a copy of RestLists and RestLists will not be changes on any filtered value */}

        {filteredRestLists.map((element) => (
          <RestaurantCard key={element?.info?.id} resData={element} />
        ))}
      </div>
    </div>
  );
};
