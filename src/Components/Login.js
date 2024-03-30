import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMsg, setErrMsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSubmitButton = () => {
    const output = checkValidData(email.current.value, password.current.value);
    if (output != null) setErrMsg(output);
  };

  return (
    <div className="w-full h-auto">
      <Header />
      <div>
        <img
          className="bg-center bg-cover min-w-full min-h-full absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg_img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black mx-auto my-36 right-0 left-0 text-white bg-opacity-75"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 block w-full bg-gray-800"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 block w-full bg-gray-800"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 block w-full bg-gray-800"
        />
        {errMsg && <p className="py-2 text-red-600">{errMsg}</p>}
        <button
          className="p-3 my-4 block bg-red-600 rounded-md w-full"
          onClick={handleSubmitButton}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to netflix ? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
