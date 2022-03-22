import Modal from "../UI/Modal";
import { useContext, useState } from "react";
import axios from "axios";

import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import Spinner from "../UI/Spinner";

export default function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);

  function addItemHandler(item) {
    cartCtx.addItem({ ...item, amount: 1 });
  }

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          onRemove={cartCtx.removeItem.bind(null, item.id)}
          onAdd={addItemHandler.bind(null, item)}
          key={item.id}
          name={item.name}
          price={item.price * item.amount}
          amount={item.amount}
        />
      ))}
    </ul>
  );

  function closeCartHandler() {
    props.onShowCart();
  }

  function orderHandler() {
    setIsCheckout(true);
  }

  const submitHandler = async (userData) => {
    setIsSubmitting(true);

    await axios.post(
      "https://food-app-e35bb-default-rtdb.firebaseio.com/orders.json",
      { user: userData, orderedItems: cartCtx.items }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.resetCartItems();
  };

  const cartActions = (
    <div className="flex justify-end text-slate-200 gap-4">
      <button
        onClick={closeCartHandler}
        className="btn btn-outline border-2 border-red-900 hover text-white hover:bg-red-900 hover:text-white hover:border-red-900"
      >
        Close
      </button>
      {cartCtx.items.length > 0 && (
        <button
          onClick={orderHandler}
          className="btn bg-red-800 text-white hover:text-white hover:bg-red-900 "
        >
          Order
        </button>
      )}
    </div>
  );

  const cartContent = (
    <>
      {cartItems}
      <div className="flex justify-between font-bold text-2xl text-white my-4">
        <span>Total amount</span>
        <span>{cartCtx.totalAmount.toFixed(2)} $</span>
      </div>
      {!isCheckout && cartActions}
      {isCheckout && (
        <Checkout onClick={closeCartHandler} onConfirm={submitHandler} />
      )}
    </>
  );

  const submittingContent = (
    <>
      <div className="flex justify-center items-center">
        <span className="text-bold text-slate-200 mr-2">Sending...</span>
        <Spinner />
      </div>
    </>
  );

  const submittedContent = (
    <>
      <p className="text-bold text-slate-200 text-center">
        You sent the order!
      </p>
      <button
        onClick={closeCartHandler}
        className="btn btn-outline border-2 border-red-900 hover text-white hover:bg-red-900 hover:text-white hover:border-red-900"
      >
        Close
      </button>
    </>
  );

  return (
    <>
      <Modal>
        {!isSubmitting && !didSubmit && cartContent}
        {isSubmitting && submittingContent}
        {!isSubmitting && didSubmit && submittedContent}
      </Modal>
    </>
  );
}
