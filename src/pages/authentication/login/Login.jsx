import { useContext, useEffect, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import authentication from "../../../assets/others/authentication.png";
import authentication1 from "../../../assets/others/authentication2-removebg-preview.png";
import { AuthContext } from "../../../authProvider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { signinUser,signinGoogle } = useContext(AuthContext);
  const [validateCap, setValidateCap] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signinUser(email, password)
      .then((userCredential) => {
        // Signed in
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign In Success",
          showConfirmButton: false,
          timer: 1500
        });
        const user = userCredential.user;
        console.log(user);
      })
      .catch((err) => console.error(err));

    console.log(email, password);
  };
  const handleValidateCap = (e) => {
    const userCaptcha = e.target.value;

    if (validateCaptcha(userCaptcha)) {
      setValidateCap(false);
    } else {
      setValidateCap(true);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center"
      style={{ backgroundImage: `url(${authentication})` }}
    >
      <div
        className="flex flex-col lg:flex-row justify-between items-center pb-10 mx-auto max-h-[600px] w-[80%]"
        style={{ boxShadow: `10px 10px 10px 10px rgba(0, 0, 0, 0.25)` }}
      >
        <div className="w-1/2">
          <img src={authentication1} alt="" />
        </div>
        <div className="card w-full max-w-sm mx-auto">
          <form className="card-body" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-center ">Login now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <div className="input input-bordered mb-10 p-3">
                <LoadCanvasTemplate />
              </div>
              <input
                onBlur={handleValidateCap}
                name="userCaptcha"
                type="text"
                placeholder="Type here"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-2">
              <button
                className="btn bg-[#D1A054B3]"
                type="submit"
                disabled={validateCap}
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center -mt-6">
            <p className="text-[#D1A054]">
              New here?{" "}
              <Link to="/signup">
                <span className="font-bold">Create a New Account</span>
              </Link>
            </p>
            <p>Or sign in with</p>
            <div className="flex items-center justify-center gap-4 mt-3">
              <FaGoogle onClick={signinGoogle} className="border-2 border-[#444444] w-12 rounded-full p-3 h-12" />
              <FaGithub className="border-2 border-[#444444] w-12 rounded-full p-3 h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
