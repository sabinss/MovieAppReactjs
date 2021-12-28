import React from "react";
import { MovieList } from "./MovieList";
import { TvShowList } from "./TvShowList";
import { Link } from "react-router-dom";

interface MovieProps {
  movieData: any[];
  tvShowData: any[];
}

export const Movie = ({ movieData, tvShowData, ...props }: MovieProps) => {
  return (
    <>
      <div className="Movie">
        <Link to="/protected?token=johndoe">Go to protected route</Link>
        <MovieList data={movieData} {...props} />
        <TvShowList data={tvShowData} {...props} />
      </div>
    </>
  );
};
