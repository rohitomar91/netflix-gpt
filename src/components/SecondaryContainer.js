import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((state) => state.movies);

  return (
    <div className=" bg-black pb-24">
      <div className="-mt-80 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
      </div>

      {/* 
    MovieList - Popular 
    MovieList - Now Playing
    MovieList - Trending
    MovieList - by genre
    */}
    </div>
  );
};

export default SecondaryContainer;
