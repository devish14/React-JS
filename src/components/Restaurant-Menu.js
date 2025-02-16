
import Shimmer from "./Shimmer.js";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory.js";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();

  const [showIndex, setShowIndex] = useState();

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

  const categories = restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e)=> {
    return e?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  });

  return (
    <div className="max-w-[600px] min-h-[800px] mt-[20px] mx-auto">
      <p className="font-extrabold text-2xl mb-5">{name}</p>
      <div className="border border-[rgba(2,6,12,0.15)] rounded-2xl w-[600px] p-5 shadow-[rgba(0, 0, 0, 0.04) 0px 8px 16px 0px] mb-[10px]">
        <div className="flex gap-3 items-center">
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
          <span className="text-base/7 font-bold">
            {" "}
            {avgRatingString} ({totalRatingsString}) - {costForTwoMessage}
          </span>
        </div>
        <p className="text-sm/7 font-bold text-[rgb(255,82,0)]">
          {cuisines.join(", ")}
        </p>
        <p className="text-base/7 font-medium">{sla?.deliveryTime} minutes</p>
        <p className="text-sm/7 font-medium text-[rgb(255,82,0)]">
          Free Delivery on orders above ₹199
        </p>
      </div>
     {categories.map((category,index)=>{
      // this is a controlled component showData controls the expanding and collpase of the child component
      return (<RestaurantCategory setShowIndex={()=>{return setShowIndex(index)}} showData={index === showIndex ? true : false} key={ category?.card?.card?.title} response={category?.card?.card}/>)
     })}
    </div>
  );
};

export default RestaurantMenu;
