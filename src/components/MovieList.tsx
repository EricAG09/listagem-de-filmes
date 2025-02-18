import React from "react";
import { Movie } from "../interfaces/MovieTypes";

interface MovieListProps {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieClick }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
      {movies.length === 0 ? (
        <p className="text-white text-center col-span-full">Carregando filmes...</p>
      ) : (
        movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => onMovieClick(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-auto rounded-lg mb-4"
            />
            <h2 className="text-lg font-semibold text-white truncate">{movie.title}</h2>
            <p className="text-gray-400 text-sm mt-1">{movie.release_date}</p>
            <p className="text-yellow-500 text-sm mt-1">
              ⭐ {movie.vote_average !== undefined ? movie.vote_average.toFixed(1) : "N/A"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieList;
