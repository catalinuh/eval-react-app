import React from 'react';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div id="title">
          <h2>Navigation</h2>
        </div>
        <nav>
          <span id="home" onClick={(e) => this.props.clickLink(e)}>
            Home
          </span>
          <span id="upcoming-events" onClick={(e) => this.props.clickLink(e)}>
            Upcoming Events
          </span>
        </nav>
      </div>
    );
  }
}

export default Navigation;
