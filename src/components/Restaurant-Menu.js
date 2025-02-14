import { useState, useEffect } from "react";
import { GET_SEPERATE_RESTAURANT_DATA, SINGLE_IMAGE } from "../utils/config";
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
  const { id } = useParams();
  console.log(id);


  // Adding Custom hooks here so fetching data is done by the custom hook and displaying data is done by Restaurant Menu component;

  const restaurantData = useRestaurantMenu(id);

  if (restaurantData === null) return <Shimmer />;

  // ✅ Safe destructuring with default values when restaurant Data is null to avoid issues we have given an empty {}
  const {
    name,
    costForTwoMessage,
    cuisines,
    avgRatingString,
    totalRatingsString,
    sla,
  } = restaurantData?.cards?.[2]?.card?.card?.info;

  const itemCards =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card.itemCards ||
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card.itemCards ||  restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
      ?.card.itemCards ;

  return (
    <div className="restaurant-menu">
      <p className="menu1">{name}</p>
      <div className="menu-container">
        <div className="menu-align">
          {" "}
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            strokeColor="rgba(2, 6, 12, 0.92)"
            fillColor="rgba(2, 6, 12, 0.92)"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            ></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#21973B"></stop>
                <stop offset="1" stop-color="#128540"></stop>
              </linearGradient>
            </defs>
          </svg>
          <span className="menu2">
            {" "}
            {avgRatingString} ({totalRatingsString}) - {costForTwoMessage}
          </span>
        </div>
        <p className="menu3">{cuisines.join(", ")}</p>
        <p className="menu4">{sla?.deliveryTime} minutes</p>
        <p className="menu5">Free Delivery on orders above ₹199</p>
      </div>
      <h2>Recommended</h2>
      <div className="menu-data-container">
        {itemCards.map((item) => {
          return (
            <div className="menu-data-wrapper" key={item?.card?.info?.id}>
                <div className="container-1">
                  <div className="data1">{item?.card?.info?.name}</div>
                  <div className="data1">{item?.card?.info?.price / 100}</div>
                  <div className="data1">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      fillColor="#116649"
                    >
                      <rect width="14" height="14" fill="white"></rect>
                      <path
                        d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
                        fill="#116649"
                      ></path>
                    </svg>
                    <span className="data3">
                      {item?.card?.info?.ratings?.aggregatedRating?.rating} (
                      {
                        item?.card?.info?.ratings?.aggregatedRating
                          ?.ratingCountV2
                      }
                      )
                    </span>
                  </div>
                  <div className="data4">{item?.card?.info?.description}</div>
                </div>
                <div className="container-2">
                  <img
                    className="image-align"
                    src={SINGLE_IMAGE + item?.card?.info?.imageId}
                    alt={item?.card?.info?.name}
                  ></img>
                </div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
