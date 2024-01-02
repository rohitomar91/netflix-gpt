import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return;

  console.log(movies);

  return (
    <div className="px-6 py-1 text-white">
      <h1 className="py-4 text-2xl font-base">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex gap-4">
          {movies.map((movie) => (
            <MovieCard
              movieId={movie.id}
              posterPath={movie.backdrop_path}
              key={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
