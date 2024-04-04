import React, {useEffect} from "react";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";
import { LANGUAGES, NF_LOGO } from "../Utils/constants"
import { toggleGPTSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // add tmdb api to search movies coming from gpt
  // show movie list from gpt below it
  // add env file

  const user = useSelector((store) => store.user);

  const showgptSearch = useSelector((store) => store.gpt.showGPTSearch);

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

  const handleSearch = () => {
    dispatch(toggleGPTSearchView());
  }

  const langChanged = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between">
      <img className="w-40 mx-auto md:w-60 md:px-4 md:py-4 md:mx-0" src={NF_LOGO} alt="netflix_logo" />
      {user && (
        <div className="flex justify-between items-center">
          {showgptSearch && (
            <select
              className="p-2 bg-gray-600 text-white m-2"
              onChange={langChanged}
            >
              {LANGUAGES.map((lang) => (
                <option value={lang.identifier} key={lang.name}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            onClick={handleSearch}
            className="px-4 font-bold text-white py-2 rounded-lg mx-6 bg-transparent border-red-600 border-2"
          >
            {showgptSearch ? "Homepage" : "Search Anything"}
          </button>
          <img className="w-10 h-10" src="/netflix-dp.jpg" alt="netflix_dp" />
          <button
            className="px-4 font-bold text-white bg-transparent py-2 rounded-lg mx-4"
            onClick={handleSignout}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;