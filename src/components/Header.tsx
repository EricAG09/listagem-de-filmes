import React from 'react';
import Navbar from './NavBar';

interface HeaderProps {
  onSearch: (query: string) => void; 
  onCategorySelect: (category: string) => void; 
}

const Header: React.FC<HeaderProps> = ({ onSearch }) => (
    <Navbar onSearch={onSearch} />
);

export default Header;
