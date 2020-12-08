import React from "react";
import _ from "lodash";

class Emoji extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentEmoji: _.sample(this.props.emojis).character,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <div className="Emoji">{this.state.currentEmoji}</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter guess"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }

  getRandomEmoji() {
    const emojis = this.props.emojis;
    this.setState({
      currentEmoji: _.sample(emojis).character,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getRandomEmoji();
  }
}

export default Emoji;
