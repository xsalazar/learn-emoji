import "./App.css";
import React from "react";
import Emoji from "./components/Emoji/Emoji";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div
          style={{
            gridTemplateRows: "1fr auto",
            minHeight: "100%",
            display: "grid",
          }}
        >
          <Emoji />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
