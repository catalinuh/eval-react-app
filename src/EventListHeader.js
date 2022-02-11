import React from 'react';

class EventListHeader extends React.Component {
  render() {
    return (
      <div>
        <header className="button-header">
          <button id="add-new-btn">Add New</button>
        </header>
        <section className="event-table">
          <ul className="event-table__header">
            <li>Event name</li>
            <li>Start date</li>
            <li>End date</li>
            <li>Actions</li>
          </ul>
        </section>
      </div>
    );
  }
}

export default EventListHeader;
