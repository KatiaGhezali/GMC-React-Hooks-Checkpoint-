import { Link, useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { id } = useParams();

  const movie = movies.find((item) => String(item.id) === id);

  if (!movie) {
    return (
      <main className="details-page">
        <h1>Movie not found</h1>

        <Link to="/" className="back-button">
          ← Back to Home
        </Link>
      </main>
    );
  }

  return (
    <main className="details-page">
      <Link to="/" className="back-button">
        ← Back to Home
      </Link>

      <section className="details-header">
        <img
          src={movie.posterURL}
          alt={`${movie.title} poster`}
          className="details-poster"
        />

        <div className="details-info">
          <p className="eyebrow">MOVIE DETAILS</p>

          <h1>{movie.title}</h1>

          <p className="details-rating">
            ★ {Number(movie.rating).toFixed(1)} / 5
          </p>

          <h2>About this title</h2>

          <p className="details-description">{movie.description}</p>
        </div>
      </section>

      <section className="trailer-section">
        <h2>Watch the Trailer</h2>

        <div className="trailer-container">
          <iframe
            src={movie.trailerLink}
            title={`${movie.title} trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default MovieDetails;
