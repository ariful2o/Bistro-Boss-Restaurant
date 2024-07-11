import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import SectionTitle from "../../../../components/sectionHeading/SectionTitle";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";
import useMenu from "../../../../hooks/menus/useMenu";
import Swal from "sweetalert2";

const UpdateItem = () => {
  const axiosSecure = useAxiosSecure();
  const [menu, refetch] = useMenu();
  const id = useParams();
  const item = menu.find((item) => item._id === id.id);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      category: item.category,
    },
  });

  const onSubmit = async (data) => {
    const menuItem = {
      name: data.name,
      category: data.category,
      price: parseFloat(data.price),
      recipe: data.recipe,
    };
    const updateItem = await axiosSecure.patch(`/menu/${item._id}`, menuItem);
    if (updateItem.data.acknowledged) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} is update Success.`,
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      refetch();
    }
  };

  return (
    <section className="bg-white">
      <SectionTitle
        title="Update AN ITEM"
        subtitle="---What's new?---"
      ></SectionTitle>

      <div className="card bg-base-200 w-full max-w-4xl shrink-0 shadow-2xl mx-auto">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              defaultValue={item.name}
              {...register("name")}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="flex gap-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                {...register("category")}
                className="p-3 rounded-lg bg-white"
              >
                <option value="Category" disabled></option>
                <option value="drinks">Drinks</option>
                <option value="desserts">Desserts</option>
                <option value="soups">Soups</option>
                <option value="pizza">Pizza</option>
                <option value="salad">Salad</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                defaultValue={item.price}
                {...register("price")}
                type="text"
                placeholder="Price"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Recipe Details*</span>
            </label>
            <textarea
              defaultValue={item.recipe}
              {...register("recipe")}
              placeholder="Recipe Details"
              className="textarea textarea-bordered textarea-lg w-full py-8"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="bg-gradient-to-r from-[#835D23] to-[#B58130] btn">Update Recipe Details</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateItem;
