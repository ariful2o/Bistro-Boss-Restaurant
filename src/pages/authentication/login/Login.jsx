import { useEffect, useState } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import authentication from "../../../assets/others/authentication.png";
import authentication1 from "../../../assets/others/authentication2-removebg-preview.png";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const [validateCap, setValidateCap] = useState(true);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

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
      className=" max-h-screen"
      style={{ backgroundImage: `url(${authentication})` }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center"
        style={{ boxShadow: `10px 10px 10px 10px rgba(0, 0, 0, 0.25)` }}>

        <div className="w-1/2">
          <img src={authentication1} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm mx-auto max-h-screen">
          <form className="card-body" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold text-center ">Login now!</h1>
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
              <div className="input input-bordered mb-10 p-4">
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

            <div className="form-control mt-6">
              <button
                className="btn bg-[#D1A054B3]"
                type="submit"
                disabled={validateCap}
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-[#D1A054]">
              New here? <span className="font-bold">Create a New Account</span>
            </p>
            <p>Or sign in with</p>
            <div className="flex items-center justify-center gap-4 my-4">
              <FaGoogle className="border-2 border-[#444444] w-12 rounded-full p-3 h-12" />
              <FaGithub className="border-2 border-[#444444] w-12 rounded-full p-3 h-12" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
