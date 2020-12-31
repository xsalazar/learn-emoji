import "./Emoji.css";
import React from "react";
import _ from "lodash";
import {
  TextField,
  InputAdornment,
  Switch,
  FormControlLabel,
} from "@material-ui/core";
import emojis from "emoji-datasource/emoji_pretty.json";
import twemoji from "twemoji";

class Emoji extends React.Component {
  constructor(props) {
    super(props);

    const emoji = this.getEmoji();
    this.state = {
      input: {
        value: "",
        isCorrect: false,
      },
      currentEmoji: {
        codePoint: emoji.unified,
        names: emoji.short_names,
      },
      showAnswer: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  render() {
    const currentEmoji = this.state.currentEmoji;
    const isEmpty = this.state.input.value === "";
    const isCorrect = this.state.input.isCorrect;

    return (
      <div className="emoji-column">
        {/* Emoji picture */}
        <div
          dangerouslySetInnerHTML={this.createEmoji(currentEmoji.codePoint)}
        ></div>

        {/* Emoji form input */}
        <form
          onSubmit={this.handleSubmit}
          className="input-emoji-form"
          label="Guess the emoji"
        >
          <TextField
            fullWidth
            type="text"
            value={this.state.input.value}
            onInput={this.handleInput}
            label="Guess the emoji"
            id="Guess the emoji"
            variant="outlined"
            error={!isCorrect && !isEmpty}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  dangerouslySetInnerHTML={this.getGuessStatus(
                    isCorrect,
                    isEmpty
                  )}
                ></InputAdornment>
              ),
            }}
            inputProps={{
              autoCapitalize: "none",
            }}
          ></TextField>
        </form>

        {/* Helper control to show answer */}
        <FormControlLabel
          style={{ padding: "8px" }}
          control={<Switch size="small" onChange={this.handleToggle} />}
          label="Show answer?"
        />
        <div>
          {this.state.showAnswer ? this.state.currentEmoji.names[0] : ""}
        </div>
      </div>
    );
  }

  createEmoji(codePoint) {
    return {
      __html: twemoji.parse(
        codePoint.split("-").map(twemoji.convert.fromCodePoint).join(""),
        {
          ext: ".svg",
          folder: "svg",
        }
      ),
    };
  }

  getGuessStatus(isCorrect, isEmpty) {
    if (isEmpty) {
      return;
    }

    let result = "";
    const correct = "2714-FE0F"; // ✔
    const incorrect = "274C"; // ❌

    if (!isEmpty && isCorrect) {
      result = correct;
    } else {
      result = incorrect;
    }

    return {
      __html: twemoji.parse(
        result.split("-").map(twemoji.convert.fromCodePoint).join(""),
        {
          className: "input-emoji-validate",
        }
      ),
    };
  }

  setRandomEmoji() {
    const emoji = this.getEmoji();
    this.setState({
      currentEmoji: {
        codePoint: emoji.unified,
        names: emoji.short_names,
      },
    });
  }

  getEmoji() {
    return _.sample(
      emojis.filter(
        (e) =>
          e.category === "Smileys & Emotion" ||
          e.category === "Animals & Nature" ||
          e.category === "Food & Drink"
      )
    );
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
    const userInput = event.target.value.replace(" ", "_").toLowerCase();
    this.setState({
      input: {
        value: userInput,
        isCorrect: this.state.currentEmoji.names.includes(userInput),
      },
    });
  }

  handleToggle(event) {
    this.setState({
      showAnswer: !this.state.showAnswer,
    });
  }
}

export default Emoji;
