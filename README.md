#mock up for crossword ui

## Getting Started

1. `npm i` - Install dependencies. This might take a while.
2. `npm start` - Run development build. If it doesn't start, make sure you aren't running anything else in the same port. In case you are on a Unix platform, you can try `PORT=3000 npm start`. It will pick up the port from the environment if it's set.
3. Surf to the port shown at terminal.
4. Start modifying the code. The browser should pick up the changes.

##Intial spec writeup
1) UI
- open with a menu that shows some options and a 'make puzzle' button
- make puzzle promps the user to enter some words

![Alt text](/readmestuff/word_query.png?raw=true "word prompt mockup")

- this could hit googles list API to fill in other related words
    green button would this 
- ask user to pick a puzzle layout, something like: http://www.onlinecrosswords.net/layout-730.png
    in progress
- 'go' button
- some display of the algorithm's progress as words are added

2) Word placement algorithm
- port the javascript to java/swift

3) Adding clues
- once words are placed, call the API to get clues for each word
- randomly pick a clue for each word
- highlight words that don't have clues
- let the user tap a row/column and select from available clues
- let the user 'preview' the puzzle and view it as a printed page
(btw, click the solve button on the site to see it fill in the puzzle with words - the words "online crossword design aid" are like the user's "theme" words or list that they would enter, then we fill in boiler plate stuff and add clues)



## Advanced Commands

Beyond development, the boilerplate supports other tasks listed below:

* `npm run build` - Generates a production build below `build/`.
* `npm run deploy` - Deploys the contents of the `build/` directory below the **gh-pages** branch.
* `npm run test` - Runs `tests/` through Karma/Phantom/Mocha once.
* `npm run test:tdd` - Runs `tests/` in a TDD mode (watches for changes and rebuilds).
* `npm run test:lint` - Runs code through ESLint to spot code quality issues.
* `npm run stats` - Generates Webpack build statistics.
