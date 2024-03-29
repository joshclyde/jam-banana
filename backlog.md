# Backlog

## High Priority

- [ ] figure out firebaeConfig so that lint and types will work
- [ ] look closer at Spotify terms and conditions (https://developer.spotify.com/documentation/general/design-and-branding/)

## Project Foundational Things

### Lint

- Checkout out this [awesome-eslint](https://github.com/dustinspecker/awesome-eslint) repo to see a lot of different eslint resources.

- [x] eslint prettier
- [x] eslint import rules
- [ ] eslint core rules
- [ ] eslint react rules
- [x] eslint react hooks rules
- [ ] eslint typescript rules (i have added some rules, but a lot of the rules are off)
- [ ] eslint lodash rules
- [ ] eslint jsx-a11y rules
- [ ] eslint react-redux rules
- [ ] eslint jsdoc rules
- [ ] eslint import sorting rules (might be more advanced?) https://github.com/lydell/eslint-plugin-simple-import-sort

- [ ] eslint monitoring? like, if a new version comes out and has a new rule notify me. make sure i explicity have every rule on/off

### File Structure

- [ ] lint rules for picky file structure
- [ ] exact components look (and snippets). unit tests?
- [ ] lint rules for file contents

### Misc.

- [x] research how I should do css
- [ ] write unit tests
- [ ] build
- [ ] fix ci/cd pipeline
- [ ] switch to nvm instead of brew
- [ ] get rid of type assertions
- [ ] typescript namespaces and how they build with webpack
- [ ] naming conventions for literally everything
- [ ] package.json documentation (I want to have documentation about why I have dependencies but I can't put comments in my package.json)
- [ ] docusaurus? do i want to make my own documentation?
- [ ] remove oldish code
- [ ] commit conventions
- [ ] take another look at tsconfig, specifically `strictNullChecks`
- [ ] figure out why storybook won't render with type errors and see if I can change it cuz it's annoying when developing
- [ ] lint styled components using https://styled-components.com/docs/tooling#stylelint or https://github.com/Microsoft/typescript-styled-plugin
- [ ] source maps arent entirely working

### Performance

- [ ] research things to improve
- [ ] know what packages are consuming space

## Project Features/Domains Ideas

### Explore Route

- [x] allow search of songs (tracks?)
  - redux
    - [x] create a type of "tracks" in searchResults redux attributes
    - [x] create a "tracks" key to the spotify redux state (similar to simplifiedAlbums)
    - [x] create selectors for tracks
    - [x] create typings in @Api
  - [x] create the react components to display a songs/songs
    - [x] move the MainText and SubText from SearchResultsListEntity into Design? then can re-use
  - [x] create tabs on the explore form for album/song/artist
- [ ] create search of artists
- [ ] create paging through search results
- [ ] create loading spinner
- [ ] normalize redux data
- [ ] make the MoreVertical options icon functional
- [ ] at the end of everything, double check styling

### Misc.

- [ ] make header better
- [ ] make form components better
- [ ] take out the Components folder and just have all the folders be a base level (do I want this?)
- [ ] branch and commit pattern?
- [ ] fix console warnings/errors
- [ ] icons. would be super sweet if I autogenerated all the icons from figma.
- [ ] icons. the MoreVertical messed up my root component
- [ ] clean up Tabs component

## Redux

- [ ] refactor redux files to have no index files (except the main one)
