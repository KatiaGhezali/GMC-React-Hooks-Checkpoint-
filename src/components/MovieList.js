import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  if (movies.length === 0) {
    return (
      <p className="empty-message">
        No movies found. Try changing your filters or adding a movie.
      </p>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
