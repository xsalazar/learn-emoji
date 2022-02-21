import React from "react";
import Emoji from "./components/emoji";
import Footer from "./components/footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Emoji />
        <Footer />
      </div>
    );
  }
}

export default App;
