import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopMovieTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // Fetch trailer video && update the store with top movie trailer Object

  const getMovieTrailer = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const movieVideosJson = await response.json();

    const movieTrailer = movieVideosJson.results.find(
      (video) => video.type?.toUpperCase() === "TRAILER"
    );
    const movieClip = movieTrailer ? movieTrailer : movieVideosJson[0];
    dispatch(addTopMovieTrailer(movieClip));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useMovieTrailer;
