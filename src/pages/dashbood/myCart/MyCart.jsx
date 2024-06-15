import SectionTitle from "../../../components/sectionHeading/SectionTitle";
import useAddtoCart from "../../../hooks/addtoCart/useAddtoCart";

const MyCart = () => {
  const [cart] = useAddtoCart();
  const totalPrice = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  console.log(cart);
  return (
    <div className="w-11/12 mx-auto">
      <SectionTitle
        title="WANNA ADD MORE?"
        subtitle="---My Cart---"
      ></SectionTitle>
      <div className="mt-20">
        <div className="flex justify-between font-semibold">
          <h2 className="text-2xl">Total orders: {cart.length}</h2>
          <h2 className="text-2xl">Total price: ${totalPrice}</h2>
          <button className="bg-[#D1A054] text-white font-bold p-3 rounded-lg">
            PAY
          </button>
        </div>
      </div>
      <div className="">
        
      </div>
    </div>
  );
};

export default MyCart;
