import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
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
  const signOutUser = () => {
    setLoading(true);
    return auth.signOut();
  };
  const signinGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //user management
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("------>", currentUser);
      setUser(currentUser);
      setLoading(false);
      
      const userInformations = {
        name: currentUser.displayName,
        email: currentUser.email,
      };
      
      currentUser && axiosPublic.post("/users", userInformations)
      .then(res=>{
        console.log(res);
      })
    });
    return () => unSubscribe();
  }, [axiosPublic]);

  const authInfo = {
    user,
    loading,
    signupUser,
    signinUser,
    signOutUser,
    signinGoogle,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
