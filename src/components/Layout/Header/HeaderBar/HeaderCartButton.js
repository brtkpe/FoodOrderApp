import { FaShoppingCart } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import CartContext from "../../../../context/cart-context";

const HeaderCartButton = (props) => {
  const [btnClicked, setBtnClicked] = useState(false);

  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  useEffect(() => {
    setBtnClicked(true);
    if (items.length < 0) return;

    const timer = setTimeout(() => {
      setBtnClicked(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const amount = cartCtx.items.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  return (
    <button
      onClick={props.onShowCart}
      className={`${
        btnClicked && "animate-bump"
      } relative group px-4 py-2 flex justify-center items-center rounded-xl font-bold bg-red-700 hover:bg-red-900 active:bg-red-900 duration-300`}
    >
      <FaShoppingCart className="text-2xl" />

      <span className="absolute -top-2 -right-3 px-2 rounded-lg  bg-red-900 group-hover:bg-red-700 group-active:bg-red-700  duration-300">
        {amount}
      </span>
    </button>
  );
};

export default HeaderCartButton;
