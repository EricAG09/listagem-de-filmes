import React from 'react';
import { Movie } from '../interfaces/MovieTypes';

interface MovieModalProps {
  isOpen: boolean;
  movie: Movie | null;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ isOpen, movie, onClose }) => {
  if (!isOpen || !movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gray-300 p-6 rounded-lg w-96 relative shadow-lg">
        {/* Botão de fechar reposicionado */}
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-2xl"
        >
          ✖
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold text-gray-900 text-center">{movie.title}</h2>

        {/* Imagem do filme */}
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title} 
          className="w-full h-64 object-cover rounded-lg mt-3"
        />

        {/* Detalhes adicionais */}
        <p className="text-gray-700 mt-3 text-sm">{movie.overview}</p>
        <p className="text-gray-600 mt-2 text-sm">
          <strong>Data de lançamento:</strong> {movie.release_date}
        </p>
        <p className="text-yellow-500 mt-1 text-sm">
          <strong>⭐ Avaliação:</strong> {movie.vote_average?.toFixed(1) || 'N/A'}
        </p>

        {/* Gêneros (se disponíveis) */}
        {movie.genres && movie.genres.length > 0 && (
          <p className="text-gray-600 mt-2 text-sm">
            <strong>Gêneros:</strong> {movie.genres.map(genre => genre.name).join(', ')}
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieModal;
