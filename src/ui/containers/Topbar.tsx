import React from 'react';

export class Topbar extends React.Component {
  render() {
    const origin = window.origin;
    return (
      <div className="topbar">
        <div className="header-logo">
          <img src="/images/grouphouse-logo.png" alt="Mushroom Header"className="header-logo-img"/>
        </div>
        <div className="header-logo-title">Grouphouse</div>
        <ul className="header-links">
          <li><a className="header-link" href="https://whatis.grouphouse.io">About</a></li>
          <li><a className="header-link" href={`${origin}#mission`}>Mission</a></li>
          <li><a className="header-link" href={`${origin}#homes`}>Homes</a></li>
          <li><a className="header-link header-emphasis" href={`${origin}#community`}>Join the Community</a></li>
        </ul>
      </div>
    );
  }
}
