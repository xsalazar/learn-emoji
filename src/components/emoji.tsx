import React from "react";
import {
  TextField,
  Switch,
  FormControlLabel,
  InputAdornment,
  Container,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Close, Check } from "@mui/icons-material";
import emojiDatasource from "emoji-datasource/emoji_pretty.json";
import twemoji from "@twemoji/api";

interface EmojiProps {}

interface EmojiState {
  currentEmoji: {
    codePoint: string;
    names: Array<string>;
  };
  input: {
    value: string;
    isCorrect: boolean;
  };
  showAnswer: boolean;
}

export default class Emoji extends React.Component<EmojiProps, EmojiState> {
  constructor(props: EmojiProps) {
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
    this.handleClear = this.handleClear.bind(this);
  }

  render() {
    const currentEmoji = this.state.currentEmoji;
    const isEmpty = this.state.input.value === "";
    const isCorrect = this.state.input.isCorrect;

    return (
      <Container maxWidth="xs" sx={{ flexGrow: "1" }}>
        {/* Emoji picture */}
        <Box sx={{ py: 4, width: "auto", aspectRatio: "1" }}>
          <img
            width="100%"
            loading="lazy"
            src={this.createEmoji(currentEmoji.codePoint)}
          ></img>
        </Box>

        {/* Emoji form input */}
        <Box sx={{ pb: 4 }}>
          <form onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              fullWidth
              helperText="Press return to try another"
              label="Guess the emoji"
              value={this.state.input.value}
              onChange={this.handleInput}
              error={!isCorrect && !isEmpty}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {isCorrect && <Check />}
                    {!isEmpty && !isCorrect && (
                      <IconButton onClick={this.handleClear}>
                        <Close />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
              inputProps={{
                autoCapitalize: "none",
              }}
            ></TextField>
          </form>
        </Box>

        {/* Helper control to show answer */}
        <Box sx={{ pb: 2, textAlign: "center" }}>
          <FormControlLabel
            control={<Switch size="small" onChange={this.handleToggle} />}
            label="Show answer?"
          />
        </Box>

        {/* The answer, if enabled */}
        {this.state.showAnswer && (
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="caption">
              {this.state.currentEmoji.names[0]}
            </Typography>
          </Box>
        )}
      </Container>
    );
  }

  createEmoji(codePoint: string) {
    const div = document.createElement("div");

    div.textContent = codePoint
      .toLowerCase()
      .split("-")
      .map((parts) => twemoji.convert.fromCodePoint(parts))
      .join("");

    twemoji.parse(div, {
      ext: ".svg",
      folder: "svg",
    });

    return div.getElementsByTagName("img")[0].src;
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
    const possibleEmojis = emojiDatasource.filter((e) => e.sort_order !== 152); // Filter out eye in speech bubble. See: https://git.io/JDj18
    return possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
  }

  handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    this.setState({
      input: {
        value: "",
        isCorrect: false,
      },
    });

    this.setRandomEmoji();
  }

  handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const userInput = event.target.value.replace(" ", "_").toLowerCase();

    this.setState({
      input: {
        value: userInput,
        isCorrect: this.state.currentEmoji.names.includes(userInput),
      },
    });
  }

  handleToggle() {
    this.setState({
      showAnswer: !this.state.showAnswer,
    });
  }

  handleClear() {
    this.setState({
      input: {
        value: "",
        isCorrect: false,
      },
    });
  }
}
