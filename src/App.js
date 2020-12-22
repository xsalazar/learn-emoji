import "./App.css";
import React from "react";
import Emoji from "./components/Emoji/Emoji";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Emoji></Emoji>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
