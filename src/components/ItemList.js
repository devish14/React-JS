import { useDispatch } from "react-redux";
import { SINGLE_IMAGE } from "../utils/config.js";
import { addItem } from "../utils/cartSlice";

const ItemLists = (props) => {
  const { responseItems } = props;

  // Using useDispatch () to dispatch
  const dispatch = useDispatch();

  // handleAddClick is the action reducer function used to dispatch the action this is dummy data i am passing

  // const handleAddClick = () => {
  //   dispatch(addItem("Pizza"));
  // };

  // getting the real time data by passing a args

  const handleAddClick = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {responseItems.map((item) => {
        return (
          <div
            className="flex justify-between border-b-[0.5px] border-b-[#d3d3d3]"
            key={item.card.info?.id}
          >
            <div className="mb-[40px] ">
              <div className="text-lg/7 text-[rgba(2,6,12,0.75)] mt-[4px] font-bold">
                {item?.card?.info?.name}
              </div>
              <div className="text-lg/7 text-[rgba(2,6,12,0.75)] mt-[4px] font-bold">
                {" "}
                {item?.card?.info?.price
                  ? `₹ ${item.card.info.price / 100}`
                  : "Price Not Available"}
              </div>
              <div className="text-lg/7 text-[rgba(2,6,12,0.75)] mt-[4px] font-semibold flex items-center">
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
                <span className="ml-[2px] text-black text-sm">
                  {item?.card?.info?.ratings?.aggregatedRating?.rating
                    ? item?.card?.info?.ratings?.aggregatedRating?.rating
                    : "No ratings"}{" "}
                  (
                  {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2
                    ? item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2
                    : "0"}
                  )
                </span>
              </div>
              <div className="mt-[12px] text-[rgba(2,6,12,0.6)] font-medium text-base/7 line-clamp-1 w-[400px]">
                {item?.card?.info?.description}
              </div>
            </div>
            <div className="relative w-[150px] h-[130px]">
              {/* Add Button - Positioned Consistently */}
              <div
                className="absolute font-bold bottom-5 left-6 text-[rgb(27,166,114)] bg-[#02060cbf] px-3 rounded-lg w-15 text-center"
                onClick={() => handleAddClick(item)}
              >
                Add
              </div>

              {/* Image Placeholder - Ensures Consistent Layout */}
              {item?.card?.info?.imageId ? (
                <img
                  className="w-25 h-25 p-2 rounded-xl"
                  src={SINGLE_IMAGE + item.card.info.imageId}
                />
              ) : (
                <div className="w-full h-full bg-transparent rounded-xl"></div> // Placeholder box
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemLists;
