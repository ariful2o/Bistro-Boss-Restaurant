import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAddtoCart from "../../../../hooks/addtoCart/useAddtoCart";
import useAuth from "../../../../hooks/auth/useAuth";

export default function Navbar() {
  const [cart] = useAddtoCart();
  const { signOutUser, user } = useAuth();

  const navlist = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li><Link to='/contacus'>CONTACT us</Link></li>
        <li><Link to='/dashboard'>DASHBOARD</Link></li>
      <li>
        <Link to="/orders">Our Menu</Link>
      </li>
      <li>
        <Link to="/shop/drinks">Our Shop</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlist}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          BISTRO BOSS
          <br /> Restaurant
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlist}</ul>
      </div>
      <div className="navbar-end gap-4">
        <Link to="/dashboard">
          <button className="btn">
            <FaCartPlus />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </Link>
        {user ? (
          <a onClick={signOutUser} className="btn">
            Log Out
          </a>
        ) : (
          <Link to="/login">
            <button className="btn">LogIn</button>
          </Link>
        )}
      </div>
    </div>
  );
}
