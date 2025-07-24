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

import { Storyline } from './ui/containers/Storyline';

class App extends React.Component<unknown, unknown> {
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
