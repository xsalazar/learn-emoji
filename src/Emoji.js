import React from "react";
import _ from "lodash";
import emojiSheet from 'emoji-datasource-apple/img/apple/sheets/64.png';
var emojiData = require('emoji-datasource-apple/emoji_pretty.json');

class Emoji extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentEmoji: _.sample(emojiData),
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    const currentEmoji = this.state.currentEmoji;

    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${emojiSheet})`,
            backgroundPosition: `left -${66 * currentEmoji.sheet_x + 1}px top -${66 * currentEmoji.sheet_y + 1}px`,
            width: 64,
            height: 64,
          }}
        />
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Enter guess"></input>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }

  getRandomEmoji() {
    this.setState({
      currentEmoji: _.sample(emojiData),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getRandomEmoji();
  }
}

export default Emoji;
