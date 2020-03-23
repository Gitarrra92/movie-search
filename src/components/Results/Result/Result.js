import React from "react";
import "./style.css";

export const Result = ({ result, checkDetails }) => {
  return (
    <div
      className="result"
      onClick={() => checkDetails(console.log(result.imdbID))}
    >
      <img src={result.Poster} alt={result.Poster} />
      <h2>{result.Title}</h2>
    </div>
  );
};
