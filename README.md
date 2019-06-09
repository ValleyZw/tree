Top 100 Documentaries App with [Create React App](https://github.com/facebook/create-react-app) and [Material-UI](https://material-ui.com/).

## Overview

<p align='center'>
<img src='https://github.com/ValleyZw/tree/blob/master/static/Tree.jpeg' width='600' alt='App Overview'>
</p>

## Project structure

```bash
tree
  ├── .gitignore               git ignore configuration
  ├── jsconfig.json            baseUrl configuration
  ├── README.md                Documentation
  ├── package.json             npm configuration
  ├── public/                  public resources folder
  └── src                      Main scripts folder
       ├── components/         React basic components folder
       ├── data/               Public data folder
       ├── page/               React routes folder
       ├── utils/              Helper functions folder
       ├── index.css           Global style
       ├── index.js            Main js file
       └── serviceWorker.js    Service worker configuration
```

## State Management

React Hooks, an awesome feature which is available in React v16.7.0-alpha,
is able to simplify React state and lifecycle features from function components.

<p align='center'>
<img src='https://github.com/ValleyZw/tree/blob/master/static/Hooks.png' width='600' alt='React Hooks'>
</p>

### Install

```npm
yarn add react@next react-dom@next
```

### Usage

```javascript
import { useState, useEffect, useContext, useReducer } from 'react'
```

## Lazy loading

The React.lazy function enables dynamic import components and routes.

### Component

```javascript
const Child = React.lazy(() => import('./components'));

const Main = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Child />
  </Suspense>
)
```

### Routes

```javascript
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./page/Home'));
const About = lazy(() => import('./page/About'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </Suspense>
  </Router>
);
```

## Performance

<p align='center'>
<img src='https://github.com/ValleyZw/tree/blob/master/static/Audits.png' width='600' alt='Lighthouse Report'>
</p>

## Reference

- [Introducing Hooks](https://reactjs.org/docs/hooks-intro.html)
- [Code-Splitting](https://reactjs.org/docs/code-splitting.html)
- [Making Sense of React Hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)
- [Manage global state with React Hooks](https://medium.com/@Charles_Stover/manage-global-state-with-react-hooks-6065041b55b4)
- [Why React Hooks, and how did we even get here?](https://medium.freecodecamp.org/why-react-hooks-and-how-did-we-even-get-here-aa5ed5dc96af)
- [Rehooks](https://rehooks.com/)
- [Replacing Redux with the new React context API](https://medium.freecodecamp.org/replacing-redux-with-the-new-react-context-api-8f5d01a00e8c)
- [How to use React.lazy and Suspense for components lazy loading](https://medium.freecodecamp.org/how-to-use-react-lazy-and-suspense-for-components-lazy-loading-8d420ecac58)
- [Lazy Loading Routes in React](https://scotch.io/tutorials/lazy-loading-routes-in-react)