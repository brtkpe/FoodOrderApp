import Modal from "../UI/Modal";
import { useContext } from "react";
import ShowCartContext from "../../context/showCart-context";
import CartContext from "../../context/cart-context";
import CartItem from "./CartItem";
import Snackbar from "../UI/Snackbar";

export default function Cart(props) {
  const ctx = useContext(ShowCartContext);
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

  function orderCartHandler() {
    ctx.onShowCart();
    props.onShowSnackbar(true, true, "Order accepted!");
   cartCtx.removeItem('all')
  }

  function closeCartHandler() {
    ctx.onShowCart();
    props.onShowSnackbar(true, false, "Order cancelled! ");
  }

  return (
    <>
      <Modal>
        {cartItems}
        <div className="flex justify-between font-bold text-2xl text-white my-4">
          <span>Total amount</span>
          <span>{cartCtx.totalAmount.toFixed(2)} $</span>
        </div>
        <div className="flex justify-end text-slate-200 gap-4">
          <button
            onClick={closeCartHandler}
            className="border-[1px] border-red-900 py-2 px-6  rounded-xl hover:bg-red-900"
          >
            Close
          </button>
          {cartCtx.items.length > 0 && (
            <button
              onClick={orderCartHandler}
              className="border-[1px] border-transparent py-2 px-6 rounded-xl bg-red-800 hover:bg-red-900"
            >
              Order
            </button>
          )}
        </div>
      </Modal>
      <Snackbar />
    </>
  );
}
