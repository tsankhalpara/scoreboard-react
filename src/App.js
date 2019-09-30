import React from 'react';
import logo from './logo.svg';
import './App.css';


const Header = () => {
  return (
    <header>
      <h1>Scoreboard</h1>
      <span className="stats">Players: 1</span>
    </header>
  );
}

const Player = () => {
  return (
    <div className="player">
      <span className="player-name">
        Tara
      </span>
    </div>
  );
}

export default Header;
