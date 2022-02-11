import React from 'react';

class NewEventForm extends React.Component {
  render() {
    return (
      <div className="event">
        <input className="event-field" type="text" aria-label="Event name" />
        <input className="start-field" type="date" aria-label="Start date" />
        <input className="end-field" type="date" aria-label="End date" />
        <div id="edit-delete">
          <button className="edit-btn">Edit</button>
          <button className="delete-btn">Delete</button>
        </div>
      </div>
    );
  }
}

export default NewEventForm;
