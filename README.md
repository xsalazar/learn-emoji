# 📚 Learn Emoji

This repository contains the source code for the website [https://learnemoji.dev](https://learnemoji.dev).

This website is a simple guessing game where an emoji is shown and the user types in a guess.

The answers take the form of canonical short names used on websites such as GitHub, Slack, Discord, Windows, macOS, and more. These short names follow closely to the [CLDR Short Names](https://unicode.org/emoji/charts/full-emoji-list.html) from [unicode.org](https://unicode.org).

For example, `:see_no_evil:` corresponds to :see_no_evil:, `:hear_no_evil:` is :hear_no_evil:, and `:speak_no_evil:` is :speak_no_evil:.

## Getting Started

This repository leverages [VSCode's devcontainer](https://code.visualstudio.com/docs/remote/containers) feature to ensure all necessary dependencies are available inside the container for development.

### Application

To get started:

```bash
npm install && npm start
```

This will start the application on your local machine, running on [http://127.0.0.1:5173/](http://127.0.0.1:5173).

### Deployments

All application deployments are managed via GitHub Actions and the [`./.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) workflow.

Additionally, application dependencies are automatically managed and updated via Dependabot and the [`./.github/workflows/automerge-dependabot.yml`](./.github/workflows/automerge-dependabot.yml) workflow.
