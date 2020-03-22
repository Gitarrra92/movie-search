import React from "react";
import "./style.css";

export const Search = ({ handleInput, movieSearch }) => {
  return (
    <div className="search">
      <input
        onChange={handleInput}
        type="text"
        placeholder="find your movie"
        onKeyPress={movieSearch}
      ></input>
    </div>
  );
};
