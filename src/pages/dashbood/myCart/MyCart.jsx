import { CiTrash } from "react-icons/ci";
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
      <div className="overflow-x-auto">
        <table className="table mt-10">
          {/* head */}
          <thead className="bg-[#D1A054]">
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Ittem Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <h4>{item.name}</h4>
                </td>
                <td>{item.price}</td>
                <th>
                  <button className="btn btn-error btn-md">
                    <CiTrash className="text-white text-3xl" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
