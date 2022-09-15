import React from 'react';

import './styles/App.css';

type StateType = {};
class Header extends React.Component<unknown, StateType> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    // Pass client to all routes/components that need to make API requests
    return (
      <div className="app">

      </div>
    );
  }
}

export default Header;