import { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "./App.css";

const initialMovies = [
  {
    id: 1,
    title: "Inception",
    description:
      "A skilled thief enters people's dreams to steal secrets and is given a mission that could change his life.",
    posterURL:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Interstellar",
    description:
      "A team of astronauts travels through a wormhole in search of a new home for humanity.",
    posterURL:
      "https://es.web.img3.acsta.net/pictures/14/10/02/11/07/341344.jpg",
    rating: 4.9,
  },
  {
    id: 3,
    title: "The Dark Knight",
    description:
      "Batman faces the Joker, a criminal who wants to bring chaos to Gotham City.",
    posterURL:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Stranger Things",
    description:
      "A group of friends discovers mysterious supernatural events in their small town.",
    posterURL:
      "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
    rating: 4.6,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);

  const [searchTitle, setSearchTitle] = useState("");
  const [minRating, setMinRating] = useState(0);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "3",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewMovie((previousMovie) => ({
      ...previousMovie,
      [name]: value,
    }));
  };

  const handleAddMovie = (event) => {
    event.preventDefault();

    const movieToAdd = {
      id: Date.now(),
      title: newMovie.title.trim(),
      description: newMovie.description.trim(),
      posterURL: newMovie.posterURL.trim(),
      rating: Number(newMovie.rating),
    };

    setMovies((previousMovies) => [...previousMovies, movieToAdd]);

    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "3",
    });
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(searchTitle.toLowerCase());

    const matchesRating = Number(movie.rating) >= Number(minRating);

    return matchesTitle && matchesRating;
  });

  return (
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">YOUR PERSONAL COLLECTION</p>
        <h1>Movie Night</h1>
        <p className="subtitle">
          Discover your favorites and add something new to watch.
        </p>
      </header>

      <section className="form-section">
        <h2>Add a Movie</h2>

        <form onSubmit={handleAddMovie} className="movie-form">
          <div className="form-group">
            <label htmlFor="title">Movie or TV Show Title</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter the title"
              value={newMovie.title}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              placeholder="Write a short description"
              value={newMovie.description}
              onChange={handleInputChange}
              rows="3"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="posterURL">Poster Image URL</label>
            <input
              id="posterURL"
              name="posterURL"
              type="url"
              placeholder="https://example.com/poster.jpg"
              value={newMovie.posterURL}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="rating">Rating (out of 5)</label>
            <select
              id="rating"
              name="rating"
              value={newMovie.rating}
              onChange={handleInputChange}
            >
              <option value="1">1 / 5</option>
              <option value="2">2 / 5</option>
              <option value="3">3 / 5</option>
              <option value="4">4 / 5</option>
              <option value="5">5 / 5</option>
            </select>
          </div>

          <button type="submit" className="add-button">
            Add Movie
          </button>
        </form>
      </section>

      <section className="movies-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE YOUR COLLECTION</p>
            <h2>My Movies & Shows</h2>
          </div>

          <span className="movie-count">
            {filteredMovies.length}{" "}
            {filteredMovies.length === 1 ? "title" : "titles"}
          </span>
        </div>

        <Filter
          searchTitle={searchTitle}
          setSearchTitle={setSearchTitle}
          minRating={minRating}
          setMinRating={setMinRating}
        />

        <MovieList movies={filteredMovies} />
      </section>

      <footer className="app-footer">Made for movie lovers.</footer>
    </main>
  );
}

export default App;
