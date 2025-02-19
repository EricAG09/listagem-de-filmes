import React, { createContext, useContext, useState, useEffect } from "react";
import { Movie, MoviesProviderProps } from "../interfaces/MovieTypes";


// Definindo o tipo do contexto
interface MovieContextProps {
  movies: Movie[];
}


const MovieContext = createContext<MovieContextProps | undefined>(undefined);

export const MoviesProvider: React.FC<MoviesProviderProps> = ({ children }) => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
        fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR')
            .then((response) => response.json())
            .then((data) => setMovies(data.results));
    }, []);
    
    return (
        <MovieContext.Provider value={{ movies }}>
            {children}
        </MovieContext.Provider>
    );
}

export const useMovies = () => {
    const context = useContext(MovieContext);
    if (!context) {
        throw new Error("Error: useMovies must be used within a MoviesProvider");
    }
    return context;
};
