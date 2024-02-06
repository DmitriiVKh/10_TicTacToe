import './App.css';
import { Component } from 'react';
import Game from "./components/Game/Game";

class App extends Component {
  render() {
    return (
      <div className='min-h-screen w-full bg-gray-100 flex justify-center items-center'>
        <Game />
      </div>
    );
  }
}

export default App;