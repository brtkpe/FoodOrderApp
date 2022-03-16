import Input from "../../UI/Input";
import { IoBagAdd } from "react-icons/io5";

import { useRef } from "react";

export default function MealItemForm(props) {
  const amountInputRef = useRef(null);

  function submitHandler(e) {
    e.preventDefault();

    const enteredAmount = +amountInputRef.current.value;

    if (enteredAmount < 1 || enteredAmount > 5) return;

    props.onAddToCart(enteredAmount);
  }

  return (
    <form onSubmit={submitHandler} className="flex">
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_$' + props.id,
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button className="-mt-1 ml-2">
        <IoBagAdd className="font-bold text-3xl hover:text-red-700 duration-300" />
      </button>
    </form>
  );
}
