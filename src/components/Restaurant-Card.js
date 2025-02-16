import { useContext } from 'react';
import { IMAGE_URL } from "../utils/config";
import UserContext from "../utils/UserContext";

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
  const { cuisines, cloudinaryImageId, name, costForTwo, avgRating, sla } =
    resData?.card?.card?.info; // destructuring to make the code more efficient

    //  implented Create Context 
  const userData =  useContext(UserContext);

  return (
    <div className="bg-[#f5f5f5] border border-[#dcdcdc] w-70 h-95 p-[10px] rounded-2xl">
      <img className=" w-70 h-40" src={IMAGE_URL + cloudinaryImageId} />
      <div className="mb-[5px] font-bold text-xl">{name}</div>
      <div className="mb-[5px] text-base">{cuisines.join(", ")}</div>
      <div className="mb-[5px] text-base">{avgRating} ratings</div>
      <div className="mb-[5px] text-base">{costForTwo} </div>
      <div className="mb-[5px] text-base">{sla.deliveryTime} minutes</div>
      <div className="mb-[5px] text-base">User : {userData.loggedInUser}</div>
    </div>
  );
};

// Adding a new component function for higherorderComponents and adding the functional component RestaurantCard as input and returns a new function.

// props will be added when returning the function and also when the RestaurantCard Component is loading in HOF.
export const WithDiscountLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className=" absolute text-white font-extrabold p-1 m-1 rounded-lg bg-[#ff5200]">
          {props?.resData?.card?.card?.info?.aggregatedDiscountInfoV3?.header}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
