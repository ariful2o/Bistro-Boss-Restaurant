import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/auth/useAuth";

const SocialSignin = () => {
  const { signinGoogle } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    signinGoogle()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Sign In Success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => console.error(err));
  };
  const handleGithubLogin = () => {
    // signinGoogle()
    // .then(() => {})
    // .catch(err=>console.error(err))
  };
  return (
    <div className="text-center -mt-6">
      <p className="text-[#D1A054]">
        New here?{" "}
        <Link to="/signup">
          <span className="font-bold">Create a New Account</span>
        </Link>
      </p>
      <p>Or sign in with</p>
      <div className="flex items-center justify-center gap-4 mt-3">
        <FaGoogle
          onClick={handleGoogleLogin}
          className="border-2 border-[#444444] w-12 rounded-full p-3 h-12"
        />
        <FaGithub
          onClick={handleGithubLogin}
          className="border-2 border-[#444444] w-12 rounded-full p-3 h-12"
        />
      </div>
    </div>
  );
};

export default SocialSignin;
