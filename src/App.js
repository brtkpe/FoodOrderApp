import { useState } from "react";

import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/cart-context";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  function showCartHandler() {
    setCartIsVisible(!cartIsVisible);
  }

  return (
    <>
      <CartProvider>
        {cartIsVisible && <Cart onShowCart={showCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <Meals />
      </CartProvider>
    </>
  );
}

export default App;
