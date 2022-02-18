import React from 'react';
import { deleteEvent } from '../apirequests';
import { saveEvent } from '../apirequests';

class Event extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      eventName: '',
      startDate: '',
      endDate: '',
      disabled: true,
      editOrSave: 'Edit',
      deleteOrCancel: 'Delete',
    };

    this.editEvent = this.editEvent.bind(this);
    this.deleteOrCancel = this.deleteOrCancel.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      saveEvent(this.props.id, this.props);

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
      deleteEvent(this.props.id);
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    let { eventName, startDate, endDate, id, upcoming } = this.props;

    return (
      <div className="event" id={id}>
        <input
          onChange={this.handleChange}
          value={eventName}
          className="event-field"
          type="text"
          aria-label="Event name"
          disabled={this.state.disabled}
        />
        <input
          onChange={this.handleChange}
          value={startDate}
          className="start-field"
          type="date"
          aria-label="Start date"
          disabled={this.state.disabled}
        />
        <input
          onChange={this.handleChange}
          value={endDate}
          className="end-field"
          type="date"
          aria-label="End date"
          disabled={this.state.disabled}
        />
        {!upcoming ? (
          <div id="edit-delete">
            <button id={id} onClick={this.editEvent} className="edit-btn">
              {this.state.editOrSave}
            </button>
            <button
              id={id}
              onClick={this.deleteOrCancel}
              className="delete-btn"
            >
              {this.state.deleteOrCancel}
            </button>
          </div>
        ) : (
          <div id="edit-delete" className="hide-buttons">
            <button id={id} onClick={this.editEvent} className="edit-btn">
              {this.state.editOrSave}
            </button>
            <button
              id={id}
              onClick={this.deleteOrCancel}
              className="delete-btn"
            >
              {this.state.deleteOrCancel}
            </button>
          </div>
        )}
        {/* // <div id="edit-delete">
        //   <button id={id} onClick={this.editEvent} className="edit-btn">
        //     {this.state.editOrSave}
        //   </button>
        //   <button id={id} onClick={this.deleteOrCancel} className="delete-btn">
        //     {this.state.deleteOrCancel}
        //   </button>
        // </div> */}
      </div>
    );
  }
}

export default Event;
