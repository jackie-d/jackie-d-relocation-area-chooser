# Relocation Area Chooser

### A project by Jakie degli Innocenti

### Table of contents
- [Relocation Area Chooser](#relocation-area-chooser)
    - [A project by Jakie degli Innocenti](#a-project-by-jakie-degli-innocenti)
    - [Table of contents](#table-of-contents)
    - [Project Description](#project-description)
    - [Project Wireframe](#project-wireframe)
  - [Links and resources](#links-and-resources)
    - [Hosting](#hosting)
    - [GitHub](#github)
  - [Configure API](#configure-api)
  - [Techical Details](#techical-details)
  - [Platform and device of destination](#platform-and-device-of-destination)
  - [Project commands](#project-commands)
    - [Jest unit testing, snapshot, store examples](#jest-unit-testing-snapshot-store-examples)
    - [E2E cypress example](#e2e-cypress-example)
  - [Other project commands](#other-project-commands)

### Project Description

The realization of this project is aimed to demonstrate the possibiity to realize a software that helps the user to choose between three different possible cities to find the one that best suites his needs.

The coiche options and the possible cities are pre determinated and the user will be helped in the process by a wizard procedure in a cool user interface and with the possibility to interact with the app in english and german language.

### Project Wireframe

The following wireframe represent a mock of the project UX:
https://wireframe.cc/A4GBOu

## Links and resources

### Hosting

- https://relocation-area-chooser.web.app/ -

### GitHub

- https://github.com/jackie-d/relocation-area-chooser

## Configure API

To run on your local environment create a `.env.local` file in the root project folder and configure the following keys from respective website.

```
VUE_APP_ACCUWEATHER_API_KEY=
VUE_APP_TEQUILA_API_KEY=
```

- AccuWeather API ( https://developer.accuweather.com )
- Tequila Kiwi API - Book & Search section ( https://tequila.kiwi.com/ )

## Techical Details

- *Language:* 
  - Javascript TypeScript
- *Framework:* 
  - Vue.js
- *Tools:* 
  - Vue Command Line Interface Helper
- *Libraries included:*
  - *Design:* Material Design Bootstrap
- *Frameworks included:*
  - Vue Router
  - Vuex 
  - Jest (Unit/Integration Testing)
  - Cypress (E2E testing)
  - PWA support
- *Hosting:*
  - The project will be hosted on an Microsoft Azure
- *Backend:*
  - none
- *Authentication:*
  - none
- *Mobile app build:*
  - PWA only

## Platform and device of destination

- Modern browsers
- Destkop, tablet, mobile (responsive design)

## Project commands

*Project setup*
```
yarn install
```

*Compiles and hot-reloads for development*
```
yarn serve
```

### Jest unit testing, snapshot, store examples

*Prior to test run you would have to setup the project*

```
yarn test:unit --watch
```

### E2E cypress example

*Prior to test run you would have to setup the project*

```
yarn start
cypress open
```

or

```
yarn test:e2e
```


## Other project commands

*Compiles and minifies for production*
```
yarn build
```

*Lints and fixes files*
```
yarn lint
```

