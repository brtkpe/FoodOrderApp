const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className="flex justify-between items-center border-b-2 border-red-900 py-4 my-4">
      <div>
        <h2 className="mb-2 text-white text-xl font-bold">{props.name}</h2>
        <div className="font-bold w-40 flex justify-between items-center">
          <span className=" text-red-600">{price}</span>
          <span className="py-1 px-3 text-slate-200 border-[1px] border-slate-200">
            x {props.amount}
          </span>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          className="font-bold text-2xl text-slate-200 border-[1px] border-red-900 w-12 rounded-lg"
          onClick={props.onRemove}
        >
          -
        </button>
        <button
          className="font-bold text-2xl text-slate-200 border-[1px] border-red-900 w-12 rounded-lg"
          onClick={props.onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
