import React, { useState } from "react";

// Get free API key from https://www.omdbapi.com/apikey.aspx
const API_KEY = "YOUR_OMDB_API_KEY_HERE";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  function search() {
    if (!query.trim()) return;
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.Response === "True") {
          setError("");
          setMovies(data.Search);
        } else {
          setError(data.Error);
          setMovies([]);
        }
      })
      .catch(() => setError("Error fetching data"));
  }

  return (
    <div>
      <h2>Task 16 - Movie Search App</h2>
      <p style={{ color: "orange" }}>⚠️ Replace YOUR_OMDB_API_KEY_HERE in MovieSearch.js with your OMDB API key.</p>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button onClick={search}>Search</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
        {movies.map((m) => (
          <div key={m.imdbID} style={{ border: "1px solid black", padding: "10px", width: "150px" }}>
            <img src={m.Poster !== "N/A" ? m.Poster : ""} alt={m.Title} width="100" />
            <p>{m.Title}</p>
            <p>{m.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieSearch;
