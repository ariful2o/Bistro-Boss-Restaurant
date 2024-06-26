import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/axios/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosPublic = useAxiosPublic();
  const googleProvider = new GoogleAuthProvider();

  // sign in and sign out ,signout
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signupUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signinGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signOutUser = () => {
    setLoading(true);
    auth.signOut().then(() => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign out Success",
        showConfirmButton: false,
        timer: 1000,
      });
    });
  };

  //user management
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("------>", currentUser);
      setUser(currentUser);

      const userEmail = { email: currentUser?.email };
      const userInformations = {
        name: currentUser?.displayName,
        email: currentUser?.email,
      };

      if (currentUser) {
        axiosPublic.post("/jwt", userEmail).then((res) => {
          //save token
          localStorage.setItem("token", res.data.token);

          //new user save database
          axiosPublic.post("/users", userInformations).then(() => {});
        });
      } else {
        //remove token
        localStorage.removeItem("token");
      }
      setLoading(false);
    });
    return () => unSubscribe();
  }, [user, axiosPublic]);

  const authInfo = {
    user,
    loading,
    signupUser,
    signinUser,
    signinGoogle,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
