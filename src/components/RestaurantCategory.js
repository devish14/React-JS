import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ItemLists from "./ItemList";

const RestaurantCategory = (props) => {
  const { response, showData, setShowIndex } = props;
  // const [showData, setShowData] = useState(false);

  const handleClick = () => {
    //tHIS Will show the index value from the parent component 
    setShowIndex();
  };
  return (
    <div>
      {/* Header */}

      <div className="border-b-[10px] border-b-[#d3d3d3]">
        <div
          className="flex items-center justify-between p-2 m-2 cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-base/7 font-bold">
            {response.title} ({response?.itemCards?.length})
          </span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        {/* Accordin Data */}{" "}
        <div className="p-2 m-2">
          {/* this showdata makes the onload the data header will not be shown unlnless its clicked */}
          {showData && <ItemLists responseItems={response?.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
