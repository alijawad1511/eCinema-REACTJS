import React from "react";

const Movie = ({ movie }) => {
  const IMAGE_URL = "https://image.tmdb.org/t/p/w200";

  return (
    <div className="card shadow mr-4">
      <img
        src={`${IMAGE_URL}${movie.poster_path}`}
        alt="Movie Poster"
        className="card-img-top w-100"
        height="270"
      />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text text-secondary">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default Movie;
