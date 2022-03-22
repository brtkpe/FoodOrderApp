import { useRef, useState } from "react";
import CheckoutInput from "./CheckoutInput";

function isNotEmpty(value) {
  return value.trim() !== "";
}
function isFiveChars(value) {
  return value.trim().length === 5;
}

export default function Checkout(props) {
  const [inputsValidity, setInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });
  const nameRef = useRef();
  const cityRef = useRef();
  const postalRef = useRef();
  const streetRef = useRef();

  const formHandler = (e) => {
    e.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredCity = cityRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredStreet = streetRef.current.value;

    const validName = isNotEmpty(enteredName);
    const validCity = isNotEmpty(enteredCity);
    const validStreet = isNotEmpty(enteredStreet);
    const validPostal = isFiveChars(enteredPostal);

    
    setInputsValidity({
        name: validName,
        street: validStreet,
        city: validCity,
        postal: validPostal,
    });

    const formIsValid = validName && validCity && validStreet && validPostal;
    if(!formIsValid) return;

    props.onConfirm({
        name: enteredName,
        city: enteredCity,
        street: enteredStreet,
        postal: enteredPostal
    })


  };

  return (
    <form onSubmit={formHandler} className="mt-12 flex flex-col gap-2">
      <CheckoutInput
        name="name"
        label="Name"
        ref={nameRef}
        isValid={inputsValidity.name}
      />
      <CheckoutInput
        name="city"
        label="City"
        ref={cityRef}
        isValid={inputsValidity.city}
      />
      <CheckoutInput
        name="street"
        label="Street"
        ref={streetRef}
        isValid={inputsValidity.street}
      />
      <CheckoutInput
        name="postal"
        label="Postal Code"
        ref={postalRef}
        isValid={inputsValidity.postal}
      />

      <div className=" mt-4 flex justify-end text-slate-200 gap-4">
        <button
          onClick={props.onClick}
          type="button"
          className="btn btn-outline border-2 border-red-900 hover text-white hover:bg-red-900 hover:text-white hover:border-red-900"
        >
          Close
        </button>
        <button
          type="submit"
          className="btn bg-red-800 text-white hover:text-white hover:bg-red-900 "
        >
          Confirm
        </button>
      </div>
    </form>
  );
}
