
import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      "-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "20px",
      width: "100%",
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

// ...

<div className="border border-gray-300 rounded-md p-4">
  <CardElement className="stripe-card-element" options={CARD_OPTIONS} />
</div>




export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("https://job-portal-website-by5i.onrender.com/payments", {
          amount: 299,
          id,
        });
        if (response.data.success) {
          console.log(response);
          console.log("successful payment");
          setSuccess(true);
        } else {
          setError("Payment failed");
        }
      } catch (error) {
        console.error("Error from catch", error);
        setError("Payment failed");
      }
    } else {
      console.error(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center mb-20">
      {!success ? (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md max-w-lg w-full mb-20">
          <div className="mb-4">
          <label className="block text-gray-700 font-3xl bg  font-bold mb-10 items-center justify-center text-3xl ">
              Card Details
            </label>
            <div className="border border-gray-300 rounded-md p-4">
    <CardElement options={CARD_OPTIONS} />
</div>




          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800 w-full"
            type="submit"
          >
            PAY NOW
          </button>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </form>
      ) : (
        <div className="text-center mb-20">
          <h2 className="text-2xl text-green-600 font-bold mb-4 ">
            Payment Successful!
          </h2>
          <p className="text-gray-700 mb-20">You have successfully made the payment.</p>
        </div>
      )}
    </div>
  );
}