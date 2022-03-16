import React, { useReducer, useEffect } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  let updatedItem;
  let updatedItems = [...state.items];
  let updatedTotalAmount;

  if (action.type === "ADD") {
    updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = [...updatedItems, { ...action.item }];
    }

    
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    if (action.id === "all") {
      updatedItems = [];
    } else {
      const removedItemIndex = state.items.findIndex(
        (item) => item.id === action.id
      );
      const removedItem = state.items[removedItemIndex];

      updatedItem = {
        ...removedItem,
        amount: removedItem.amount - 1,
      };

      updatedItems[removedItemIndex] = updatedItem;
      updatedTotalAmount = state.totalAmount - updatedItem.price;

      if (updatedItem.amount < 1) {
        updatedItems.splice(removedItemIndex, 1);
      }
    }
    
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
};

export function CartProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const {items} = cartState
 
  useEffect(() => {
    const getCart = JSON.parse(localStorage.getItem("cart"));

    if (!getCart) return;

    getCart.forEach((item) => addItemHandler(item));
  }, []);

  useEffect (() => {
    
    items.length>0 && localStorage.setItem('cart', JSON.stringify(items))
  }, [items])


  function addItemHandler(item) {
    dispatchCart({ type: "ADD", item: item });
  }

  function removeItemHandler(id) {
    dispatchCart({ type: "REMOVE", id: id });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
