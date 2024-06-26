import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../axios/useAxiosPublic";

const useMenu = () => {
  const axiosPublich = useAxiosPublic();

  const { data: menu = [], refetch } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublich.get("/menu");
      return res.data;
    },
  });
  
  return [menu, refetch];
};

export default useMenu;
