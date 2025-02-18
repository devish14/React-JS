import { useSelector, useDispatch } from "react-redux";
import ItemLists from "./ItemList.js";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cartName?.items);
  const dispatch = useDispatch();

  const clearAllItems = () => {
    dispatch(clearCart());
  };

  return (
    <div className="w-6/12 m-auto">
      {/* Now reusing the same itemsList components to show the selected component */}

      <div>
        <div className="flex justify-between p-2 items-center border-1 border-[rgba(2,6,12,0.15] mt-3 bg-gray-200">
          <div className="text-xl font-extrabold text-center mb-[15px]">
            Cart
          </div>
          <button
            className="bg-[#ff5200] font-bold p-2 m-2 border-[#ff5200]"
            onClick={clearAllItems}
          >
            Clear Cart
          </button>
        </div>
        <ItemLists responseItems={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
