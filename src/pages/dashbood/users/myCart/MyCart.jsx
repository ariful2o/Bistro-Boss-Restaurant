import { CiTrash } from "react-icons/ci";
import Swal from "sweetalert2";
import SectionTitle from "../../../../components/sectionHeading/SectionTitle";
import useAddtoCart from "../../../../hooks/addtoCart/useAddtoCart";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";
import { Link } from "react-router-dom";

const MyCart = () => {
  const [cart, refetch] = useAddtoCart();
  const axiosSecure = useAxiosSecure();

  const totalPrice = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/addtoCart/${id}`).then((res) => {
          if (res.data.acknowledged) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Food Item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="w-11/12 mx-auto">
      <SectionTitle
        title="WANNA ADD MORE?"
        subtitle="---My Cart---"
      ></SectionTitle>
      <div className="bg-white px-12 py-1 shadow-lg rounded-md">
        <div className="mt-12">
          <div className="flex justify-between font-semibold">
            <h2 className="text-2xl">Total orders: {cart.length}</h2>
            <h2 className="text-2xl">Total price: ${totalPrice}</h2>
            <Link to="/dashboard/payment">
            <button className="bg-[#D1A054] text-white font-bold p-3 rounded-lg">
              PAY
            </button>
            </Link>
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
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn btn-error btn-md"
                    >
                      <CiTrash className="text-white text-3xl" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
