import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";
import useAxiosSecure from "../axios/useAxiosSecure";

const useAddtoCart = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: cart = [], refetch } = useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/addtoCart?email=${user.email}`);
      return res.data;
    },
  });
  return [cart, refetch];
};

export default useAddtoCart;
