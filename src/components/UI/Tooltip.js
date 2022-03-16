import React from "react";

const Tooltip = (props) => {
  return (
    <div className="tooltip tooltip-bottom tooltip-left tooltip-info" data-tip={props.title}>
      {props.children}
    </div>
  );
};

export default Tooltip;
