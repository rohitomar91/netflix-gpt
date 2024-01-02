const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-16 absolute text-gray-300 bg-gradient-to-r from-black">
      <h1 className="text-4xl font-extrabold w-1/3">{title}</h1>
      <p className="py-6 text-lg w-1/4 ">{overview}</p>
      <div className="py-4">
        <button className="px-10 py-2 bg-white text-black text-xl font-bold rounded-md bg-opacity-95 hover:bg-opacity-70">
          ▶️ Play
        </button>
        <button className="px-6 py-2 ml-4 bg-gray-400 text-xl font-medium rounded-md bg-opacity-50 hover:bg-opacity-90">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
