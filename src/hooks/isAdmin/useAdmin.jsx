import { useQuery } from "@tanstack/react-query";
import useAuth from "../auth/useAuth";
import useAxiosSecure from "../axios/useAxiosSecure";

const useAdmin = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data:isAdmin,isPending:isAdminLoading } = useQuery({
    queryKey: [user?.email,"isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admim/${user?.email}`);
      return res.data;
    },
  });
  return [isAdmin,isAdminLoading];
};

export default useAdmin;
