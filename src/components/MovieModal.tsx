import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

interface MovieModalProps {
  movieId: number;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movieId, onClose }) => {
  const [movieDetails, setMovieDetails] = useState<any>(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const API_KEY = "SUA_API_KEY";
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do filme:", error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-900 text-white rounded-lg p-6 w-11/12 max-w-2xl relative">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          <FaTimes />
        </button>

        <h2 className="text-2xl font-bold mb-4">{movieDetails.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className="w-full max-h-80 object-cover rounded-lg"
        />
        <p className="mt-4 text-gray-300">{movieDetails.overview}</p>

        <div className="mt-4 flex justify-between">
          <span>⭐ {movieDetails.vote_average.toFixed(1)}</span>
          <span>🗓 {movieDetails.release_date}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
