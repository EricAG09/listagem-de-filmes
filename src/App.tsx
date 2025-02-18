import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MoviesProvider } from "./context/MovieContext";
import Home from "./pages/home";
import "./App.css";

const App: React.FC = () => {
  return (
    <MoviesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </MoviesProvider>
  );
};

export default App;
