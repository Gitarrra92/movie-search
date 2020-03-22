import React, { useState } from "react";
import "./App.css";
import axios from "axios";

import { Search } from "./components/Search/Search";
import { Title } from "./components/Title/Title";
import { Results } from "./components/Results/Results";

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
  return (
    <div className="App">
      <Title />
      <Search handleInput={handleInput} movieSearch={movieSearch} />
      <Results results={state.results} />
    </div>
  );
}

export default App;
