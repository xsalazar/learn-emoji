import "./App.css";
import React from "react";
import Emoji from "./components/Emoji/Emoji";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      emojis: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/emojis")
      .then((resp) => resp.json())
      .then((resp) => {
        const emojis = [];
        for (const key in resp) {
          emojis.push({
            name: key,
            link: resp[key],
          });
        }
        this.setState({
          emojis,
          loading: false
        });
      })
      .catch((e) => console.error(e));
  }

  render() {
    if (this.state.loading) {
      return (<div></div>);
    }

    return (
      <div className="App">
        <Emoji emojis={this.state.emojis}></Emoji>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
