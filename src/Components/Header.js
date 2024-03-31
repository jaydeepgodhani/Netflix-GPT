import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img
        className="w-60 px-8 py-4"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix_logo"
      />
      {user && <div className="flex justify-between items-center">
        <img className="w-12 h-12" src="/netflix-dp.jpg" alt="netflix_dp" />
        <button className="px-4 font-bold text-white" onClick={handleSignout}>
          Sign Out
        </button>
      </div>}
    </div>
  );
};

export default Header;
