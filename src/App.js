import React, {Component} from "react";
import './App.css';
import { FestivalsList } from "./components/FestivalsList";
import NavBar from "./components/Nav";

class App extends Component {
  render () {
    return (
      <div>
        <br></br>
        <NavBar />
        <h2>Music Festivals</h2>
        <FestivalsList />
      </div>
    )
  }
}

export default App;
