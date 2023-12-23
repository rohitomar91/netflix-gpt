import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const movieTrailer = useSelector((state) => state.movies?.topMovieTrailer);

  useMovieTrailer(movieId);

  return (
    <div className="w-screen">
      {movieTrailer && (
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${movieTrailer?.key}?&autoplay=1&mute=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      )}
    </div>
  );
};

export default VideoBackground;
