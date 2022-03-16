import React from "react";

const Input = React.forwardRef((props,ref) => {
  return (
    <div className="flex items-center">
      <label htmlFor={props.input.id} className="font-bold mr-4">
        {props.label}
      </label>
      <input ref={ref}
        {...props.input}
        className="w-10 rounded-md pl-2 font-bold text-gray-800"
      />
    </div>
  );
});

export default Input;