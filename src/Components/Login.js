import React from 'react'
import Header from './Header';

const Login = () => {
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
      <form className="w-3/12 absolute p-12 bg-black mx-auto my-36 right-0 left-0 text-white bg-opacity-75">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 block w-full bg-gray-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 block w-full bg-gray-800"
        />
        <button className="p-3 my-4 block bg-red-600 rounded-md w-full">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default Login;