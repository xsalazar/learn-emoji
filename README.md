![.github/workflows/deploy.yml](https://github.com/xsalazar/learn-emoji/workflows/.github/workflows/deploy.yml/badge.svg)

# Learn Emoji :sparkles:

This website is a simple guessing game where an emoji is shown and the user types in a guess.

The answers take the form of canonical short names used on websites such as GitHub, Slack, Discord, Windows, macOS, and more. These short names follow closely to the [CLDR Short Names](https://unicode.org/emoji/charts/full-emoji-list.html) from [unicode.org](https://unicode.org).

For example, `:see_no_evil:` corresponds to :see_no_evil:, `:hear_no_evil:` is :hear_no_evil:, and `:speak_no_evil:` is :speak_no_evil:.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Working Locally :pencil:

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deploy to Production :rocket:

This repository is deployed as a [GitHub Page](https://pages.github.com/) under a custom domain. On merge to `master` the [GitHub Action](https://github.com/xsalazar/learn-emoji/blob/master/.github/workflows/deploy.yml) will be triggered and deploy the updated code. The repository settings are configured to host [learnemoji.dev](https://learnemoji.dev) at the code generated on the [gh-pages](https://github.com/xsalazar/learn-emoji/tree/gh-pages) branch.

## Supporting Libraries :pray:

- https://github.com/iamcal/emoji-data
- https://github.com/twitter/twemoji
- https://primer.style/octicons/packages/react
- https://material-ui.com/getting-started/installation/#npm
