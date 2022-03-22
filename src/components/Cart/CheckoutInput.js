import React from "react";

const CheckoutInput = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="flex w-3/5">
        <label
          htmlFor={props.name}
          className={`font-bold w-1/3 rounded-l-md inline-flex  items-center px-3 border-t bg-slate-200 border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm
            ${!props.isValid ? "bg-error border-red-600" : ""}`}
        >
          {props.label}
        </label>
        <input
          ref={ref}
          type="text"
          className={`${
            !props.isValid ? "placeholder-red-600" : "placeholder-gray-400"
          }
               rounded-r-lg appearance-none border border-gray-300 w-full py-1 px-4 bg-slate-100 text-gray-700 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent
          }`}
          name={props.name}
          placeholder={`${
            props.isValid ? `Your ${props.label}` : `Invalid ${props.label}`
          }`}
        />
      </div>
    </>
  );
});
export default CheckoutInput;
