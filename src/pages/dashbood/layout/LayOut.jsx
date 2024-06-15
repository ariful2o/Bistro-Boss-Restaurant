import {
  FaCalendarAlt,
  FaCalendarCheck,
  FaHome,
  FaShoppingCart,
} from "react-icons/fa";
import { MdOutlinePayment, MdOutlineRateReview } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const LayOut = () => {
  return (
    <div className="flex">
      <div className="bg-[#D1A054] max-w-60 p-5 h-screen">
        <ul className="space-y-4 menu uppercase">
          <li>
            <NavLink>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaCalendarAlt />
              reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <MdOutlinePayment />
              payment history
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <MdOutlineRateReview />
              add review
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaCalendarCheck />
              my booking
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 bg-[#E8E8E8]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayOut;
