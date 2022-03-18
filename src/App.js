import { useState } from "react";

import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import ShowCartContext from "./context/showCart-context";
import { CartProvider } from "./context/cart-context";
import Snackbar from "./components/UI/Snackbar";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState({
    isVisible: false,
    msg: "l",
    success: false,
  });

  function showCartHandler() {
    setCartIsVisible(!cartIsVisible);
  }

  function showSnackbarHandler(bool, success = false, msg = "") {
    setShowSnackbar({ isVisible: bool, msg: msg, success: success });
  }

  return (
    <>
      <CartProvider>
        <ShowCartContext.Provider value={{ onShowCart: showCartHandler }}>
          {cartIsVisible && <Cart onShowSnackbar={showSnackbarHandler} />}
          <Header />
        </ShowCartContext.Provider>
        <Meals />
        {showSnackbar.isVisible && (
          <Snackbar
            msg={showSnackbar.msg}
            success={showSnackbar.success}
            onShowSnackbar={showSnackbarHandler}
          />
        )}
      </CartProvider>
    </>
  );
}

export default App;
