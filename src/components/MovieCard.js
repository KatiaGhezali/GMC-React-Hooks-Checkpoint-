import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  const { id, title, description, posterURL, rating } = movie;

  return (
    <Link to={`/movie/${id}`} className="movie-card-link">
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

            <span className="movie-rating">★ {Number(rating).toFixed(1)}</span>
          </div>

          <p className="movie-description">{description}</p>

          <span className="view-details">View details →</span>
        </div>
      </article>
    </Link>
  );
}

export default MovieCard;
