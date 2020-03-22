import React from "react";

export const Result = ({ result }) => {
  return (
    <div>
      <h2>{result.Title}</h2>
      <img src={result.Poster} alt={result.Poster} />
    </div>
  );
};
