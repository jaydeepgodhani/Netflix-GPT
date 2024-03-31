import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[25%] px-24 absolute text-white bg-gradient-to-t from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl bg-opacity-80 rounded-lg hover:bg-opacity-65">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-white p-4 px-12 mx-3 text-xl bg-opacity-50 rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;