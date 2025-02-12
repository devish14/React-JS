import { IMAGE_URL } from "../utils/config";

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
   const { cuisines, cloudinaryImageId, name,costForTwo,avgRating,sla } = resData?.card?.card?.info ; // destructuring to make the code more efficient
  
    return (
      <div className="res-card">
        <img className="res-image" src={ IMAGE_URL+cloudinaryImageId} />
        <div className="res-name">{name}</div>
        <div className="res-description">{cuisines.join(", ")}</div>
        <div className="res-description">{avgRating} ratings</div>
        <div className="res-description">{costForTwo} </div>
        <div className="res-description">{sla.deliveryTime} minutes</div>
      </div>
    );
  };

  export default RestaurantCard;