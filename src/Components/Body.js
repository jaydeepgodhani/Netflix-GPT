import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import SearchGPT from './SearchGPT';

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/search",
      element: <SearchGPT />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body;