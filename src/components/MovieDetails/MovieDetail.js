import React from "react";

export const MovieDetail = ({ selected, closeDetails }) => {
  return (
    <div className="movieDetail">
      <h2>{selected.Title}</h2>
      <h5>Type: {selected.movie}</h5>
      <h5>Year: {selected.Year}</h5>
      <h5>Rating: {selected.imdbRating}</h5>
      <img scr={selected.Poster} alt={selected.Poster} />
      <p>{selected.Plot}</p>
      <button onClick={closeDetails}>Back</button>
    </div>
  );
};
