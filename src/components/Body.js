// RestaurantCard component is imported and used in the BodyComponent and it is a default export

import RestaurantCard, { WithDiscountLabel } from "./Restaurant-Card.js";

import { restaurantList } from "../utils/mockData.js";

import { useState, useEffect, useContext } from "react";

import Shimmer from "./Shimmer.js";

import { Link } from "react-router";

import useOnlineStatus from "../utils/useStatusOnline.js";

import useRestaurantLists from "../utils/useRestaurantLists.js";

import UserContext from "../utils/UserContext";

export const BodyComponent = () => {

  const [searchType, setSearchType] = useState("");


  // Custom hook is used here

  const { restLists, filteredRestLists, setFilteredRestLists } =
    useRestaurantLists();

  // Assigning const variable for the Higher order function and returning the input value componnet
  const DiscountLabel = WithDiscountLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You're offline. Check your Connection</h1>;
  }
const {loggedInUser, setUserInfo} = useContext(UserContext);
  return restLists.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-2 p-2" >
      <div className="flex mb-5">
        <div className="flex">
          <input
            type="text"
            data-testid="searchInput"
            className="p-[2px] border border-black-600 outline-none"
            value={searchType}
            onChange={(e) => {
              setSearchType(e.target.value);
            }}
          />
          <button
            className="mr-2 px-2 bg-green-200"
            onClick={() => {
              // here i am using restLists to filter the data and set the filtered data to the state variable filteredRestLists becoz in restLists i will get all the
              // restaurtants details and in filteredRestLists i will get only the filtered data. This filteredData is a copy of the restLists and i am filtering the data based on the searchType

              const searchFilterValue = restLists.filter((element) => {
                return element?.card?.card?.info?.name
                  .toLowerCase()
                  .includes(searchType.toLowerCase());
              });
              setFilteredRestLists(searchFilterValue);
            }}
          >
            Search
          </button>
        </div>
        <div className="mr-2">
          <button
            className="bg-pink-200 outline-none px-3 py-2 text-base"
            onClick={() => {
              const filterdValue = restLists.filter((element) => {
                return element?.card?.card?.info?.avgRating > 4;
              });
              setFilteredRestLists(filterdValue);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        <div className="">
          <input
            type="text"
            value={loggedInUser}
            className="p-[7px] border border-black-600 outline-none"
           onChange={(e)=>{
            return setUserInfo(e.target.value)
           }}
          />
        </div>
      </div>

      <div className="mt-[10px] flex flex-wrap gap-[20px]">
        {/* here i am using the filteredRestLists to map the data and pass the data to the RestaurantCard component insted of RestLists becoz filteredRestLists
      has a copy of RestLists and RestLists will not be changes on any filtered value */}

        {filteredRestLists.map((element) => {
          return (
            <Link
              key={element?.card?.card?.info?.id}
              className="no-underline block text-inherit hover:no-underline"
              to={`/restaurants/${element?.card?.card?.info?.id}`}
            >
              {/* Here we will be implementing higher order function with a discount label */}
              {(element?.card?.card?.info?.aggregatedDiscountInfoV3?.header === "15% OFF")  || (element?.card?.card?.info?.aggregatedDiscountInfoV3?.header === "20% OFF")? (
                <DiscountLabel resData={element} />
              ) : (
                <RestaurantCard resData={element} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
