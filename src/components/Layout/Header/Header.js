import React from "react";

import HeaderCartButton from "./HeaderBar/HeaderCartButton";
import HeaderTitle from "./HeaderBar/HeaderTitle";

import img from "../../../assets/meal.jpg";

const Header = (props) => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 bg-gray-800/60 backdrop-blur-sm text-white shadow-sm flex justify-between items-center px-[10%] z-10">
        <HeaderTitle />
        <HeaderCartButton/>
      </header>
      <div className="shadow-sm w-full h-[32rem] overflow-hidden z-0">
        <img
          src={img}
          alt="table with meals"
          className="w-full h-full object-cover "
        />
      </div>
    </>
  );
};

export default Header;
