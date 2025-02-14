import { useEffect, useState } from "react";
import { GET_RESTAURANT_LIST } from "../utils/config.js";
const useRestaurantLists = () => {
  const [restLists, setRestLists] = useState([]);
  const [filteredRestLists, setFilteredRestLists] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(GET_RESTAURANT_LIST);
      const jsonResponse = await response.json();
      const liveData = jsonResponse?.data?.cards.slice(3, 13);
      setRestLists(liveData);
      setFilteredRestLists(liveData);
    } catch (error) {
      console.log("Error fetching restaurant data:", error);
    }
  };
  return { restLists, filteredRestLists, setFilteredRestLists };
};
export default useRestaurantLists;
