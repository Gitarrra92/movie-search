import React from "react";
import "./style.css";

import { Result } from "./Result/Result";

export const Results = ({ results, checkDetails }) => {
  return (
    <section className="results">
      {results.map(result => (
        <Result
          key={result.imdbID}
          result={result}
          checkDetails={checkDetails}
        />
      ))}
    </section>
  );
};
