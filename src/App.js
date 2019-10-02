import React from 'react';
import logo from './logo.svg';
import './App.css';

const players = [
  {
    name:"Tara",
    score:20
  },
  {
    name:"Kira",
    score:25
  },
  {
    name:"Tia",
    score:23
  }
];

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        {props.name}
      </span>
      <Counter score={props.score}/>
    </div>
  );
}

class Counter extends React.Component {
  state = {
    score: 0
  };

  incrementScore() {
    this.setState({
      score: this.state.score + 1
    });
  }

  decrementScore() {
    this.setState({
      score: this.state.score - 1
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={this.decrementScore.bind(this)}> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={this.incrementScore.bind(this)}> + </button>
      </div>
    );
  }
}

const App = () => {
  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={1}
      />
      <Player name="Tara" score={20} />
      <Player name="Kira" score={25} />
      <Player name="Tia" score={23} />
    </div>
  );
}

export default App;
