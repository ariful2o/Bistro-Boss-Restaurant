import { useQuery } from "@tanstack/react-query";
import useAuth from "../auth/useAuth";
import useAxiosPublic from "../axios/useAxiosPublic";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/admim/${user.email}`);
      return res.data;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default useAdmin;
