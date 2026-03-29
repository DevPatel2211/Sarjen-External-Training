import React, { useState, useEffect } from "react";

// Get free API key from https://newsapi.org/
const API_KEY = "YOUR_NEWS_API_KEY_HERE";

function NewsApp() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.status === "ok") {
          setArticles(data.articles);
        } else {
          setError(data.message || "Error loading news");
        }
      })
      .catch(() => setError("Error fetching news"));
  }, []);

  return (
    <div>
      <h2>Task 17 - News App</h2>
      <p style={{ color: "orange" }}>⚠️ Replace YOUR_NEWS_API_KEY_HERE in NewsApp.js with your NewsAPI key.</p>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {articles.map((a, i) => (
          <div key={i} style={{ border: "1px solid black", padding: "10px", width: "250px" }}>
            <h4>{a.title}</h4>
            <p>{a.description}</p>
            <a href={a.url} target="_blank" rel="noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsApp;
