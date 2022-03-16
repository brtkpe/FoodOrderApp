import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../context/cart-context";

export default function MealItem(props) {

  const cartCtx = useContext(CartContext)
  const price = `${props.price.toFixed(2)} $`;

  const addToCartHandler = (amount) => {
     cartCtx.addItem({id: props.id, name: props.name, price: props.price, amount: amount})
  }
  return (
    <li className="flex justify-between items-center mx-4 my-6 pb-2 border-b-[1px] text-slate-200">
      <div>
        <h3 className="font-bold text-lg text-white">{props.name}</h3>
        <p className="">{props.description}</p>
        <p className="font-bold text-lg text-red-600 mb-2">{price}</p>
      </div>
      <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
}
