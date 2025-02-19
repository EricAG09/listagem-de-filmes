// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import MovieModal from '../components/MovieModal';
import { Movie } from '../interfaces/MovieTypes';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const apiKey = "c5a74bdd0a627511bb8c930d845caeeb";
        const apiUrl = "https://api.themoviedb.org/3/movie/popular?language=pt-BR";
        
        if (!apiKey || !apiUrl) {
          console.error("API Key ou URL não encontrada nas variáveis de ambiente!");
          return;
        }

        const response = await fetch(`${apiUrl}&api_key=${apiKey}`);
        if (!response.ok) throw new Error("Erro na requisição");
        const data = await response.json();
        console.log("Filmes buscados:", data.results);
        setMovies(data.results);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category: string) => {
    console.log("Categoria selecionada:", category);
    // Aqui você pode aplicar o filtro para filmes por categoria
  };

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header 
        onSearch={handleSearch} 
        onCategorySelect={handleCategorySelect} // Passa a função de categoria aqui
      />
      <MovieList movies={filteredMovies} onMovieClick={openModal} />
      {selectedMovie && (
        <MovieModal isOpen={isModalOpen} movie={selectedMovie} onClose={closeModal} />
      )}
    </div>
  );
};

export default Home;
