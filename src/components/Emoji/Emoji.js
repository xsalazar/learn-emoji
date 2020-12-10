import "./Emoji.css";
import React from "react";
import _ from "lodash";

class Emoji extends React.Component {
  constructor(props) {
    super(props);

    const emoji = _.sample(this.props.emojis);
    this.state = {
      input: {
        value: "",
        isCorrect: false
      },
      currentEmoji: {
        link: emoji.link,
        name: emoji.name
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  render() {
    const currentEmoji = this.state.currentEmoji;
    const currentStatus = this.state.input.isCorrect ? "✔️": "❌";

    return (
      <div>
        <img src={currentEmoji.link} alt="emoji"></img>
        <form onSubmit={this.handleSubmit}>
          : <input type="text" value={this.state.input.value} onInput={this.handleInput}  placeholder="Guess the emoji"></input> :
        </form>
        {currentStatus}
      </div>
    );
  }

  setRandomEmoji() {
    const emoji = _.sample(this.props.emojis);
    this.setState({
      currentEmoji: {
        link: emoji.link,
        name: emoji.name
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    
    this.setState({
      input: {
        value: "",
        isCorrect: false
      }
    });

    this.setRandomEmoji();
  }

  handleInput(event) {
    const userInput = event.target.value.replace(' ', '_');
    this.setState({
      input: {
        value: userInput,
        isCorrect: this.state.currentEmoji.name === userInput
      }
    })
  }
}

export default Emoji;
