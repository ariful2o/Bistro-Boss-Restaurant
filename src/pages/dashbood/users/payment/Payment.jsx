import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../components/sectionHeading/SectionTitle";
import CheckoutForm from "./CheckoutForm";

// todo:add stripe key
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISH_KEY);

const Payment = () => {
  return (
    <div>
      <SectionTitle title="Payment" subtitle="lksdfj"></SectionTitle>
      <div className="">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
