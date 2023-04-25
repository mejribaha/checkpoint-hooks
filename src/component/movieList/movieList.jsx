import React from "react";
import MovieCard from "../movieCard/movieCard";
import { CardGroup } from "react-bootstrap";
import "./moviList.css";


function movieList({ search , star, movie }) {
  return (
    <div className="list">
      <CardGroup style={{ gap: "40px" }}>
        {movie
          .filter((Data) =>
            Data.Title.toLowerCase().includes(search.toLowerCase())
          )
          .filter((Data) => star? Data.Rating === star : Data)
          .map((movie, i) => (
            <MovieCard key={i} movie={movie} />
          ))}
      </CardGroup>
    </div>
  );
}

export default movieList;
