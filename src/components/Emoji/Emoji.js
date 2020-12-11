import "./Emoji.css";
import React from "react";
import _ from "lodash";
import TextField from "@material-ui/core/TextField";

class Emoji extends React.Component {
  constructor(props) {
    super(props);

    const emoji = _.sample(this.props.emojis);
    this.state = {
      input: {
        value: "",
        isCorrect: false,
      },
      currentEmoji: {
        link: emoji.link,
        name: emoji.name,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  render() {
    const currentEmoji = this.state.currentEmoji;
    const isEmpty = this.state.input.value === "";
    const isCorrect = this.state.input.isCorrect;

    return (
      <div>
        <img src={currentEmoji.link} alt="emoji"></img>
        <form onSubmit={this.handleSubmit}>
          <TextField
            type="text"
            value={this.state.input.value}
            onInput={this.handleInput}
            label="Guess the emoji"
            variant="outlined"
            error={!isCorrect && !isEmpty}
            inputProps={{
              autoCapitalize: 'none'
            }}
          ></TextField>
        </form>
      </div>
    );
  }

  setRandomEmoji() {
    const emoji = _.sample(this.props.emojis);
    this.setState({
      currentEmoji: {
        link: emoji.link,
        name: emoji.name,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({
      input: {
        value: "",
        isCorrect: false,
      },
    });

    this.setRandomEmoji();
  }

  handleInput(event) {
    const userInput = event.target.value.replace(" ", "_");
    this.setState({
      input: {
        value: userInput,
        isCorrect: this.state.currentEmoji.name === userInput,
      },
    });
  }
}

export default Emoji;
