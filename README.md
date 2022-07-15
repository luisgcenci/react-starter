# NodeJS Backend App - Starter
React app with Redux, Routes and absolute path set up.

# Minimum Dependencies
[NodeJS](https://nodejs.org/en/download/) \
[Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)


# Features

- Redux
- React Router
- Typescript
- Axios

# Application Structure

```
react-starter
├── public
└── src
    ├── App.js
    ├── apps
    │   └── app-one
    │       ├── AppOne.js
    │       ├── components
    │       │   └── Home.js
    │       └── css
    │           └── Home.module.css
    ├── css
    │   ├── App.css
    │   └── index.css
    ├── hooks
    │   └── hooks.ts
    ├── index.js
    └── store
        ├── features
        │   └── sampleSlice.ts
        └── store.ts
```

- **public/ -** Public Folder.
- **src/ -** All Resources.
- **src/App.js -** Main React Component.
- **src/App.js/apps/ -** All "mini-apps" within the main app.
- **src/App.js/apps/app-one/ -** "mini-app" sample with its own Routes definitions, components and css.
- **src/css/ -** CSS for App.js and index.js. Set up to use Flexbox web layout model.
- **src/hooks/ -** Redux Hooks.
- **src/index.js -** Renders Main React Component onto root element.
- **src/store/ -** Redux Store.
  
# Set Up
### Clone this repo 
```https://github.com/luisgcenci/react-starter.git```
### Install Dependencies
```yarn install```

### How to Run
```yarn start```
