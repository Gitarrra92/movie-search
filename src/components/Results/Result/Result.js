import React from "react";
import "./style.css";

export const Result = ({ result }) => {
  return (
    <div className="result">
      <img src={result.Poster} alt={result.Poster} />
      <h2>{result.Title}</h2>
    </div>
  );
};
