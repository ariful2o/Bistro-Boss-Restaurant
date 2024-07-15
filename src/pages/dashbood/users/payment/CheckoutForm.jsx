import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAddtoCart from "../../../../hooks/addtoCart/useAddtoCart";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";
import useAuth from "../../../../hooks/auth/useAuth";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const [cart, refetch] = useAddtoCart();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [payId,setPayId] = useState("");

  const stripe = useStripe();
  const elements = useElements();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  // console.log(totalPrice);
  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((response) => {
        // console.log(response.data.clientSecret);
        setClientSecret(response.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("Error creating card", error);
      setErrorMessage(error.message);
    } else {
      // console.log("Card created successfully", paymentMethod);
      setErrorMessage("");
    }

    //confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm error: " + confirmError);
    } else {
        // console.log("success", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setPayId(paymentIntent.id)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment Successfully Received",
          showConfirmButton: false,
          timer: 1500,
        });
        const payment = {
          email: user.email,
          transactionId: paymentIntent.id,
          price: totalPrice,
          time: new Date(),
          itemsId: cart.map((item) => item.foodId),
          addtocardsId: cart.map((item) => item._id),
          status: "Pending",
        };
        const res = await axiosSecure.post("/payment", payment);
        console.log(res.data,"Clear the cart");
        refetch()
      }
    }
  };
  return (
    <div className="max-w-96 mx-auto">
      <p>Total Pay : $ {totalPrice}</p>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-primary btn-outline text-black"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {errorMessage && <div className="text-red-500 mt-10">{errorMessage}</div>}
      {payId.id&&
      <p className="text-center text-green-700 mt-10">{payId.id}</p>
      }
    </div>
  );
};

export default CheckoutForm;
