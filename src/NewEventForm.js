import React from 'react';

class NewEventForm extends React.Component {
  render() {
    if (!this.props.show) return null;

    return (
      <div className="event">
        <input className="event-field" type="text" aria-label="Event name" />
        <input className="start-field" type="date" aria-label="Start date" />
        <input className="end-field" type="date" aria-label="End date" />
        <div id="edit-delete">
          <button className="save-btn">Save</button>
          <button onClick={this.props.addNewClick} className="close-btn">
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default NewEventForm;
