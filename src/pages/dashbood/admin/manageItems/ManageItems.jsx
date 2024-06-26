import { CiTrash } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import SectionTitle from "../../../../components/sectionHeading/SectionTitle";
import useMenu from "../../../../hooks/menus/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";

const ManageItems = () => {
  const [menu,refetch] = useMenu();
  const axiosSecure=useAxiosSecure()

  const handleDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/menu/${id}`)
            .then(res=>{
                if(res.data.acknowledged){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
            })
        }
      });
    
  }
  return (
    <div>
      <SectionTitle
        subtitle="---Hurry Up!---"
        title="MANAGE ALL ITEMS"
      ></SectionTitle>
      <div className="overflow-x-auto bg-white p-8 mx-8">
        <h2 className="text-2xl font-bold">Total users: {menu.length}</h2>
        <table className="table mt-10">
          {/* head */}
          <thead className="bg-[#D1A054]">
            <tr>
              <th></th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img
                        src={item.image}
                        alt="Tailwind-CSS-Avatar-component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  <h4>{item?.name}</h4>
                </td>
                <td>
                  <h4>$ {item?.price}</h4>
                </td>
                <td>
                  <button className="bg-[#D1A054] btn-md rounded">
                    <FaRegEdit className="text-white text-3xl ml-2" />
                  </button>
                </td>
                <th>
                  <button onClick={()=>handleDelete(item._id)} className="btn btn-error btn-md">
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

export default ManageItems;
