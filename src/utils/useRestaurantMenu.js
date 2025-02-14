import { useEffect, useState } from "react";
import {GET_SEPERATE_RESTAURANT_DATA} from "../utils/config"

const useRestaurantMenu = (id) => {
    const [restaurantData,setRestaurantData] = useState(null);

    useEffect(()=> {
        fetchData();
    },[]);

    const fetchData = async() => {
      try {
        const jsonData = await fetch(GET_SEPERATE_RESTAURANT_DATA + id);
        const jsonResponse = await jsonData.json();
        console.log(jsonResponse.data)
        setRestaurantData(jsonResponse.data)
      }
      catch(error) {
        console.log("Error fetching restaurant data:", error)
      }
    }

    return restaurantData;
}

export default useRestaurantMenu;