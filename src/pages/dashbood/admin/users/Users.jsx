import { useQuery } from "@tanstack/react-query";
import { CiTrash } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import SectionTitle from "../../../../components/sectionHeading/SectionTitle";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const result = await axiosSecure.get("/users");
      return result.data;
    },
  });
  console.log(users);

  const handleDelete = (user) => {
    console.log(user);
  };
  return (
    <section>
      <SectionTitle
        title="MANAGE ALL USERS"
        subtitle="---How many??---"
      ></SectionTitle>
      <div className="overflow-x-auto bg-white p-8 mx-8">
        <h2 className="text-2xl font-bold">Total users: {users.length}</h2>
        <table className="table mt-10">
          {/* head */}
          <thead className="bg-[#D1A054]">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <h4>{user.name}</h4>
                </td>
                <td>
                  <h4>{user.email}</h4>
                </td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button className="btn btn-warning btn-md">
                      <FaUsers className="text-white text-3xl" />
                    </button>
                  )}
                </td>
                <th>
                  <button
                    onClick={() => handleDelete(user)}
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
    </section>
  );
};

export default Users;
