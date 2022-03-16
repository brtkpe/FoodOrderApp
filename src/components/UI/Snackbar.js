import { useEffect } from "react";
import {IoClose} from 'react-icons/io5'

export default function Snackbar(props) {
  function closeHandler() {
    props.onShowSnackbar(false);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      closeHandler();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  });

  const isSuccessed = `${props.success ? 'border-lime-500 text-lime-500' : 'border-red-600 text-red-600'}`

  return (
    <div className={`${isSuccessed} animate-fadeIn fixed bottom-4 left-4 border-l-4 pl-3 pr-8 py-3 bg-gray-800 rounded-lg shadow-sm rounded-bl-none rounded-tl-none `}>
      <p className="font-bold ">{props.msg}</p>
      <button className="absolute top-1 right-1 " onClick={closeHandler}><IoClose className="text-md font-bold"/></button>
    </div>
  );
}
