import { useEffect, useState } from "react";
import useAxiosSecure from "../axios/useAxiosSecure";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get("/menu")
      .then((res) => {
        setMenu(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
    // fetch('http://localhost:5000/menu')
    //     .then(res => res.json())
    //     .then(data => {
    //         setMenu(data)
    //         setLoading(false)
    //     })
  }, []);
  return [menu, loading];
};

export default useMenu;
