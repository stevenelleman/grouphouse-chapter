import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// Import all styles
import './styles/App.css';

// Import fonts
import './styles/fonts/Fonts.css';

import { Topbar } from './ui/containers/Topbar';
// @ts-ignore
import { Storyline } from './ui/containers/Storyline';

type StateType = {};
class App extends React.Component<unknown, StateType> {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>        
            <Route exact path="/">
              <Topbar />
              <Storyline />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
