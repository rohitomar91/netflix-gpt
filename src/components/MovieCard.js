import { IMAGE_PATH } from "../utils/constants";

const MovieCard = ({ movieId, posterPath }) => {
  return (
    <div className="w-80 rounded-3xl">
      <img src={IMAGE_PATH + posterPath} alt={movieId} />
    </div>
  );
};

export default MovieCard;
