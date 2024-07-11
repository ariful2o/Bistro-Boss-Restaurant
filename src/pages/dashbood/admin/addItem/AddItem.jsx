import { useForm } from "react-hook-form";
import SectionTitle from "../../../../components/sectionHeading/SectionTitle";
import useAxiosPublic from "../../../../hooks/axios/useAxiosPublic";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const result = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {"Content-Type": "multipart/form-data",},
    });
    if(result.data.success){
        // now send the menu item data to the server with the image url
        const menuItem = {
            name: data.name,
            category: data.category,
            price: parseFloat(data.price),
            recipe: data.recipe,
            image: result.data.data.display_url
        }
        const addMenuResult = await axiosSecure.post('/menu',menuItem)
        if(addMenuResult.data.acknowledged){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the menu.`,
                showConfirmButton: false,
                timer: 1500
              });
              reset()
        }
    // console.log(addMenuResult);
    }
  };

  return (
    <section className="bg-white">
      <SectionTitle
        title="ADD AN ITEM"
        subtitle="---What's new?---"
      ></SectionTitle>

      <div className="card bg-base-200 w-full max-w-4xl shrink-0 shadow-2xl mx-auto">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
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
                id=""
                className="p-3 rounded-lg bg-white"
              >
                <option value="Category" disabled></option>
                <option value="drinks">Drinks</option>
                <option value="desserts">Desserts</option>
                <option value="soups">Soups</option>
                <option value="pizza">Pizza</option>
                <option value="Salad">Salad</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                {...register("price")}
                type="number"
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
              {...register("recipe")}
              placeholder="Recipe Details"
              className="textarea textarea-bordered textarea-lg w-full py-8"
            ></textarea>
          </div>
          <input
            {...register("image")}
            type="file"
            className="file-input file-input-base-300 w-full max-w-xs"
          />
          <div className="form-control mt-6">
            <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] ">Add Item </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddItem;
