import React, {useEffect} from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { NF_LOGO } from "../Utils/constants"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user.uid;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((err) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-60 px-8 py-4" src={NF_LOGO} alt="netflix_logo" />
      {user && (
        <div className="flex justify-between items-center">
          <img className="w-12 h-12" src="/netflix-dp.jpg" alt="netflix_dp" />
          <button className="px-4 font-bold text-white" onClick={handleSignout}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
