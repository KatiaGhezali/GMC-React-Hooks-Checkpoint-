function MovieCard({ movie }) {
  const { title, description, posterURL, rating } = movie;

  return (
    <article className="movie-card">
      <img
        className="movie-poster"
        src={posterURL}
        alt={`${title} poster`}
        loading="lazy"
      />

      <div className="movie-info">
        <div className="movie-title-row">
          <h3>{title}</h3>
          <span className="movie-rating">★ {rating.toFixed(1)}</span>
        </div>

        <p className="movie-description">{description}</p>
      </div>
    </article>
  );
}

export default MovieCard;
