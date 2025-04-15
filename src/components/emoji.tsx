import React, { useState } from "react";
import { Close, Check } from "@mui/icons-material";
import emojiDatasource from "emoji-datasource/emoji_pretty.json";
import twemoji from "@twemoji/api";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

export default function Emoji() {
  const getEmoji = () => {
    const possibleEmojis = emojiDatasource.filter((e) => e.sort_order !== 152); // Filter out eye in speech bubble. See: https://git.io/JDj18
    return possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];
  };

  const emoji = getEmoji();
  const [input, setInput] = useState<{ value: string; isCorrect: boolean }>({
    value: "",
    isCorrect: false,
  });
  const [currentEmoji, setCurrentEmoji] = useState<{
    codePoint: string;
    names: Array<string>;
  }>({ codePoint: emoji.unified, names: emoji.short_names });
  const [showAnswer, setShowAnswer] = useState(false);

  const createEmoji = (codePoint: string) => {
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
  };

  const setRandomEmoji = () => {
    const emoji = getEmoji();
    setCurrentEmoji({ codePoint: emoji.unified, names: emoji.short_names });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setInput({ value: "", isCorrect: false });
    setRandomEmoji();
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = event.target.value.replace(" ", "_").toLowerCase();
    setInput({
      value: userInput,
      isCorrect: currentEmoji.names.includes(userInput),
    });
  };

  const handleToggle = () => {
    setShowAnswer(!showAnswer);
  };

  const handleClear = () => {
    setInput({ value: "", isCorrect: false });
  };

  const isEmpty = input.value === "";
  const isCorrect = input.isCorrect;

  return (
    <Container maxWidth="xs" sx={{ flexGrow: "1" }}>
      {/* Emoji picture */}
      <Box sx={{ py: 4, width: "auto", aspectRatio: "1" }}>
        <img
          width="100%"
          loading="lazy"
          src={createEmoji(currentEmoji.codePoint)}
        ></img>
      </Box>

      {/* Emoji form input */}
      <Box sx={{ pb: 4 }}>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            fullWidth
            helperText="Press return to try another"
            label="Guess the emoji"
            value={input.value}
            onChange={handleInput}
            error={!isCorrect && !isEmpty}
            slotProps={{
              input: {
                autoCapitalize: "none",
                endAdornment: (
                  <InputAdornment position="end">
                    {isCorrect && <Check />}
                    {!isEmpty && !isCorrect && (
                      <IconButton onClick={handleClear}>
                        <Close />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              },
            }}
          ></TextField>
        </form>
      </Box>

      {/* Helper control to show answer */}
      <Box sx={{ pb: 2, textAlign: "center" }}>
        <FormControlLabel
          control={<Switch size="small" onChange={handleToggle} />}
          label="Show answer?"
        />
      </Box>

      {/* The answer, if enabled */}
      {showAnswer && (
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="caption">{currentEmoji.names[0]}</Typography>
        </Box>
      )}
    </Container>
  );
}
