import "./App.css";
import React from "react";
import Emoji from "./Emoji";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: true,
      emojis: [],
    };
  }

  render() {
    return (
      <div className="App">
        <Emoji></Emoji>
      </div>
    );
  }
}

export default App;
