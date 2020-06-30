# LearnSpot

Find a teacher near you.

## Tools

- Typescript
- Node, Express
- React
- React native

![LearnSpotWeb](github-assets/learnSpotWeb.gif)

![LearnSpotMobile](github-assets/learnSpotMobile.gif)

## Setup

You will need [Node](https://nodejs.org/en/) and [Expo](https://expo.io/) installed.

Install all dependencies (run in each folder):
```
npm install
```

Run in /server:
```
npm run knex:migrate
npm run knex:seed
```

Set your url in the files: /server/src/config/config, /mobile/src/services/api

Finally, run in each folder:
```
npm start
```