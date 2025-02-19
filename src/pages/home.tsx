// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MovieList from '../components/MovieList';
import MovieModal from '../components/MovieModal';
import { Movie } from '../interfaces/MovieTypes';
import Footer from '../components/footer';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR')
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);

  };

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = 
      !selectedCategory || movie.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }

  );

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

 
  return (
    <>
      <div className="bg-gray-900 min-h-screen text-white">
        {/* Componente Header onde renderiza a navbar */}
        <Header 
          onSearch={handleSearch} 
          onCategorySelect={handleCategorySelect}
        />
        {/* Componente MovieList que irá renderizar os cards dos filmes */}
        <MovieList movies={filteredMovies} onMovieClick={openModal} />
        {selectedMovie && (
          <MovieModal isOpen={isModalOpen} movie={selectedMovie} onClose={closeModal} />
        )}
      </div>

      <Footer />  
    </>
    
  );
};

export default Home;
