function Filter({ searchTitle, setSearchTitle, minRating, setMinRating }) {
  return (
    <div className="filter-bar">
      <div className="form-group filter-search">
        <label htmlFor="searchTitle">Search by title</label>
        <input
          id="searchTitle"
          type="text"
          placeholder="Search movies or shows..."
          value={searchTitle}
          onChange={(event) => setSearchTitle(event.target.value)}
        />
      </div>

      <div className="form-group filter-rating">
        <label htmlFor="minRating">Minimum rating</label>
        <select
          id="minRating"
          value={minRating}
          onChange={(event) => setMinRating(event.target.value)}
        >
          <option value="0">Any rating</option>
          <option value="1">1+ stars</option>
          <option value="2">2+ stars</option>
          <option value="3">3+ stars</option>
          <option value="4">4+ stars</option>
          <option value="5">5 stars</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
