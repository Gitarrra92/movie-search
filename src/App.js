import React, { useState } from "react";
import "./App.css";
import axios from "axios";

import { Search } from "./components/Search/Search";
import { Title } from "./components/Title/Title";
import { Results } from "./components/Results/Results";
import { MovieDetail } from "./components/MovieDetails/MovieDetail";

function App() {
  const [state, setState] = useState({
    search: "",
    results: [],
    selected: {}
  });
  const api = ` http://www.omdbapi.com/?i=tt3896198&apikey=bde261bd`;

  const movieSearch = e => {
    if (e.key === "Enter") {
      axios.get(`${api}&s=${state.search}`).then(({ data }) => {
        const apiResult = data.Search;
        setState(state => {
          return { ...state, results: apiResult };
        });
      });
    }
  };

  const handleInput = e => {
    const s = e.target.value;

    setState(state => {
      return { ...state, search: s };
    });
  };

  const checkDetails = imdbID => {
    axios(api + "&i=" + imdbID).then(({ data }) => {
      let result = data;

      console.log("result", result);

      setState(prevState => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closeDetails = () => {
    setState(state => {
      return { ...state, selected: {} };
    });
  };

  return (
    <div className="App">
      <Title />
      <Search handleInput={handleInput} movieSearch={movieSearch} />
      <Results results={state.results} checkDetails={checkDetails} />
      {typeof state.selected.Title != "undefined" ? (
        <MovieDetail selected={state.selected} closeDetails={closeDetails} />
      ) : (
        false
      )}
    </div>
  );
}

export default App;
