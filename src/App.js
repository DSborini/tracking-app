import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
// import Result from './pages/Result';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Main } />
      {/* <Route exact path="/results" component={ Result } /> */}
      <Route component={ NotFound } />
    </Switch>
  );
}

export default App;
