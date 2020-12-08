import "./App.css";
import React from "react";
import Emoji from "./Emoji";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      emojis: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://emoji-api.com/emojis?access_key=${process.env.REACT_APP_OPEN_EMOJI_API_KEY}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            emojis: result.filter(
              (e) => !new RegExp(/e[0-9]+-[0-9]+-/, "i").test(e.slug)
            ),
            isLoaded: true,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, emojis } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <Emoji emojis={emojis}></Emoji>
        </div>
      );
    }
  }
}

export default App;
