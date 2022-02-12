import React from 'react';
import axios from 'axios';

class Event extends React.Component {
  render() {
    let { eventName, startDate, endDate, id, deleteEvent } = this.props;

    return (
      <div className="event" id={id}>
        <input
          value={eventName}
          className="event-field"
          type="text"
          aria-label="Event name"
          disabled
        />
        <input
          value={startDate}
          className="start-field"
          type="date"
          aria-label="Start date"
          disabled
        />
        <input
          value={endDate}
          className="end-field"
          type="date"
          aria-label="End date"
          disabled
        />
        <div id="edit-delete">
          <button className="edit-btn">Edit</button>
          <button id={id} onClick={deleteEvent} className="delete-btn">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Event;
