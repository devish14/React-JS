// RestaurantCard component is imported and used in the BodyComponent and it is a default export

import RestaurantCard from "./Restaurant-Card.js";

import { restaurantList } from "../utils/mockData.js";

import { useState, useEffect } from "react";

import Shimmer from "./Shimmer.js";

import { Link } from "react-router";

import useOnlineStatus from "../utils/useStatusOnline.js";

import useRestaurantLists from "../utils/useRestaurantLists.js";

export const BodyComponent = () => {
  console.log("Body rendered");

  const [searchType, setSearchType] = useState("");

  // Custom hook is used here

  const { restLists, filteredRestLists, setFilteredRestLists } =
    useRestaurantLists();

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You're offline. Check your Connection</h1>;
  }

  return restLists.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-2 p-2">
      <div className="flex mb-5">
        <div className="flex">
          <input
            type="text"
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
        <div className="">
          <button
            className="bg-pink-200 outline-none px-3 py-2 text-base"
            onClick={() => {
              const filterdValue = restLists.filter((element) => {
                console.log(element);
                return element?.card?.card?.info?.avgRating > 4;
              });
              setFilteredRestLists(filterdValue);
            }}
          >
            Top Rated Restaurant
          </button>
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
              {" "}
              <RestaurantCard resData={element} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
