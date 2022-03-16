import React from "react";

const ShowCartContext = React.createContext({
  cartIsVisible: false,
  onShowCart: () => {},
});

export default ShowCartContext;
