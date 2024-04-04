import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[25%] px-8 md:px-24 absolute text-white bg-gradient-to-t from-black">
      <h1 className="text-xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:block md:py-6 md:text-lg md:w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 mx-3 md:p-4 md:px-12 text-xl bg-opacity-80 rounded-lg hover:bg-opacity-65">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-2 mx-3 md:p-4 md:px-12 md:mx-3 text-xl bg-opacity-50 rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;