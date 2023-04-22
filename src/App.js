import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// b9c7de5e

const API_URL = "http://www.omdbapi.com?apikey=b9c7de5e";

//App est le contenu PPal injecté ds index
const App = () => {
  //créa d'une constante "movie" modifiable par "setMovies" grace au useState
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //constante "SearchMovie" est une fonction asynq qui crée...à partir d'un parametre (title)
  const searchMovies = async (title) => {
    // une constante - qui fait un fetch dans l'api pour chercher l'element title qui y loge
    const response = await fetch(`${API_URL}&s=${title}`);
    // une constante - qui stockge la reponse de ce fetch en json
    const data = await response.json();
    //modif de "movies", devient le tableau trouvé (l'index Search stocke tt le tableau d'objets)
    setMovies(data.Search);
  };
  //Effet au chargement
  useEffect(() => {
    searchMovies("hello");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>
      {/* Barre de recherche et son icon */}
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {/* Si l'array movies à au moins un élément, parcours de chq movie et affichage de MovieCard */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        // SI l'array movie n'a pas d'éléments...
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
