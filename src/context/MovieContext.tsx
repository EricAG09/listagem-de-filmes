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
        const fetchMovies = async () => {
            try {
                // Usando as variáveis de ambiente corretamente
                const apiKey = "c5a74bdd0a627511bb8c930d845caeeb";
                const apiUrl = "https://api.themoviedb.org/3/movie/popular?language=pt-BR";
                
                // Verifique se as variáveis existem
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
