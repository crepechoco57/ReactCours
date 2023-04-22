import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// b9c7de5e

const API_URL = "http://www.omdbapi.com?apikey=b9c7de5e";
const movie1 = {
  Title: "Amazing Spidercrotte",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "TVSHOW",
  Poster: "N/A",
};
const App = () => {
  const [movies, setMovies] = useState([]);
  //constante est une fonction asynq qui crée
  // une constante - qui fait un fetch dans l'api pour chercher l'element title qui y loge
  // une constante - qui attend la reponse de ce fetch en json
  //le tout inséré dans setMovies qui change le statut de movies
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  //effet au chargement
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="search" onClick={() => {}} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
