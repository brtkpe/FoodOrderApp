import Modal from "../UI/Modal";
import { useContext, useState } from "react";

import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

export default function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
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

  return (
    <>
      <Modal>
        {cartItems}
        <div className="flex justify-between font-bold text-2xl text-white my-4">
          <span>Total amount</span>
          <span>{cartCtx.totalAmount.toFixed(2)} $</span>
        </div>
        {!isCheckout && (
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
        )}
        {isCheckout && <Checkout onClick={closeCartHandler} />}
      </Modal>
    </>
  );
}
