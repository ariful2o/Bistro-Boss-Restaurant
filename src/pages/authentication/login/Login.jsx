import { useEffect, useState } from "react";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import authentication from "../../../assets/others/authentication.png";
import authentication1 from "../../../assets/others/authentication1.png";

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
      className="hero min-h-screen bg-base-200"
      style={{ backgroundImage: `url(${authentication})` }}
    >
      <div
        className="hero-content flex-col lg:flex-row p-8"
        style={{ boxShadow: `10px 10px 10px 10px rgba(0, 0, 0, 0.25)` }}
      >
        <div className="text-center lg:text-left max-w-2xl bg-slate-900">
          <img className="bg-transparent" src={authentication1} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-4">Login now!</h1>
          <form className="card-body" onSubmit={handleSubmit}>
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
                className="btn btn-primary"
                type="submit"
                disabled={validateCap}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
