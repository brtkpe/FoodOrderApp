import React from "react";

export default function Error(props) {
  return <p className="text-center font-bold text-red-400">{props.error}!</p>;
}
