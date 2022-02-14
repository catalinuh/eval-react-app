import React from 'react';
import axios from 'axios';

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: props.eventName,
      startDate: props.startDate,
      endDate: props.endDate,
      disabled: true,
      editOrSave: 'Edit',
      deleteOrCancel: 'Delete',
    };

    this.editEvent = this.editEvent.bind(this);
    this.deleteOrCancel = this.deleteOrCancel.bind(this);
  }

  editEvent() {
    let { editOrSave } = this.state;
    if (editOrSave === 'Edit') {
      this.setState({
        disabled: false,
        editOrSave: 'Save',
        deleteOrCancel: 'Cancel',
      });
    } else {
      this.setState({
        disabled: true,
        editOrSave: 'Edit',
        deleteOrCancel: 'Delete',
      });
    }
  }

  deleteOrCancel() {
    const { deleteOrCancel } = this.state;
    if (deleteOrCancel === 'Cancel') {
      this.setState({
        disabled: true,
        editOrSave: 'Edit',
        deleteOrCancel: 'Delete',
      });
    } else {
      this.props.deleteEvent(this.props.id);
    }
  }

  render() {
    let { eventName, startDate, endDate, id } = this.props;

    return (
      <div className="event" id={id}>
        <input
          value={eventName}
          className="event-field"
          type="text"
          aria-label="Event name"
          disabled={this.state.disabled}
        />
        <input
          value={startDate}
          className="start-field"
          type="date"
          aria-label="Start date"
          disabled={this.state.disabled}
        />
        <input
          value={endDate}
          className="end-field"
          type="date"
          aria-label="End date"
          disabled={this.state.disabled}
        />
        <div id="edit-delete">
          <button id={id} onClick={this.editEvent} className="edit-btn">
            {this.state.editOrSave}
          </button>
          <button id={id} onClick={this.deleteOrCancel} className="delete-btn">
            {this.state.deleteOrCancel}
          </button>
        </div>
      </div>
    );
  }
}

export default Event;
