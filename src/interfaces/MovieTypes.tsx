import { ReactNode } from "react";

export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    category: string;
    release_date: string;
    vote_average: number;
    genres?: { id: number; name: string }[];
}

export interface MovieContextProps {
    movies: Movie[];
}

export interface MoviesProviderProps {
    children: ReactNode;
}
